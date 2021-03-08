import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import socket from '../../api/socketio';
import {conversationsOfUsersStart,getRepliesOfConversationStart,addMsgInReplies} from "../../redux/actions/conversation.actions";


const Messenger = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth);
    const conversation = useSelector(state=>state.conversation);

    const [search,setSearch] = useState("");
    const [msgInput,setMsgInput] = useState("");
    const [currentChatUser,setCurrentChatUser] = useState(null);
    const [currentConversationId,setCurrentConversationId] = useState("");

    useEffect(()=>{
        dispatch(conversationsOfUsersStart())
        socket.emit("chat-connect",{userId:auth.authUser?._id});
        socket.on('private-message',(newMsgObject)=>{
            setCurrentChatUser(user=>{
                if(user._id === newMsgObject.senderId)
                    dispatch(addMsgInReplies(newMsgObject))
                return user;
            })
        })

        return ()=>{
            socket.off("private-message");
        }

    },[])

    useEffect(()=>{
        if(currentChatUser)
           dispatch(getRepliesOfConversationStart({conversationId:currentConversationId}))
    },[currentChatUser])

    const handleSearchChange = e=>{
        setSearch(e.target.value)
    }

    const handleSendMessage = ()=>{
        const newMsgObj = {
            senderId:auth.authUser._id,
            senderProfilePicture:auth.authUser.profilePicture,
            receiverId:currentChatUser._id,
            conversationId:currentConversationId,
            content:msgInput,
        }
        setMsgInput("");
        socket.emit('private-message',newMsgObj)
        dispatch(addMsgInReplies(newMsgObj));

    }


    const renderConversation = (conversation)=>{
        const user = auth.authUser._id === conversation.userOneId._id?conversation.userTwoId:conversation.userOneId;

        return (
            <li key={user._id} className="offline" onClick={()=>{
                setCurrentChatUser(user);
                setCurrentConversationId(conversation._id);
            }}>
                <div className="media">
                    <img className="media-object" src={user.profilePicture} alt="avatar"/>
                    <div className="media-body">
                        <span className="name">{`${user.firstName} ${user.lastName}`}</span>
                        {/*<span className="message">offline</span>*/}
                        {/*<span className="badge badge-outline status"></span>*/}
                    </div>
                </div>
            </li>
        )
    }

    const renderConversationReply = (reply)=>{
        const isLoggedInUser = reply.userId._id === auth.authUser._id;

        return (
            <li className={`${isLoggedInUser?"left":"right"} clearfix`}>
                <img className="user_pix" src={reply.userId.profilePicture} alt="avatar" />
                <div className="message">
                    <span>{reply.content}</span>
                </div>
                <span className="data_time">{reply.createdAt}</span>
            </li>
        )
    }

    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Chats</h2>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="body">
                                <div className="chatapp_list">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Search..." name="search" value={search} onChange={handleSearchChange} />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                        </div>
                                    </div>
                                    <ul className="right_chat list-unstyled mb-0">
                                        {conversation.conversationData?.map(conv=>{
                                            return renderConversation(conv);
                                        })
                                        }

                                    </ul>
                                </div>

                                <div className="chatapp_body mr-0">
                                    <div className="chat-header clearfix">
                                        <div className="row clearfix">
                                            <div className="col-lg-12">
                                                <div className="chat-about">
                                                    {currentChatUser && <h6 className="m-b-0">{`${currentChatUser?.firstName} ${currentChatUser?.lastName}`}</h6>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-history">
                                        <ul className="message_data">
                                            {conversation.replies?.map(reply=>renderConversationReply(reply))}
                                        </ul>
                                    </div>
                                    <div className="chat-message clearfix">
                                        <div className="input-group mb-0">
                                            <div className="input-group-prepend">
                                               <button className="btn btn-warning" onClick={handleSendMessage}>Send</button>
                                            </div>
                                            <textarea value={msgInput} onChange={e=>setMsgInput(e.target.value)} type="text" row="" className="form-control" placeholder="Enter text here..."></textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Messenger
