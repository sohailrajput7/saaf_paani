import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';

import {usersForConversationsStart} from '../../redux/actions/users.actions'

const Messenger = () => {
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users);

    const [search,setSearch] = useState("");
    const [currentChatMsgs,setCurrentChatMsgs] = useState([]);
    const [currentChatUser,setCurrentChatUser] = useState(null);


    useEffect(()=>{
        dispatch(usersForConversationsStart(search))
    },[search])

    useEffect(()=>{

    },[])


    const handleSearchChange = e=>{
        setSearch(e.target.value)
    }

    const handleCurrentChatUserChange = (user)=>{
        setCurrentChatUser(user)
    }


    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>Chat</h2>
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
                                        {users.conversationUsers?.map(user=>{
                                            return (
                                                <li className="offline" onClick={()=>handleCurrentChatUserChange(currentChatUser)}>
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
                                        })}

                                    </ul>
                                </div>
                                <div className="chatapp_body mr-0">
                                    <div className="chat-header clearfix">
                                        <div className="row clearfix">
                                            <div className="col-lg-12">
                                                <div className="chat-about">
                                                    <h6 className="m-b-0">Louis Pierce</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-history">
                                        <ul className="message_data">
                                            <li className="right clearfix">
                                                <img className="user_pix" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                                                <div className="message">
                                                    <span>Hi Aiden, how are you?<br /> How is the project coming along?</span>
                                                </div>
                                                <span className="data_time">10:12 AM, Today</span>
                                            </li>
                                            <li className="left clearfix">
                                                <img className="user_pix" src="../assets/images/user.png" alt="avatar" />
                                                <div className="message">
                                                    <span>Are we meeting today?</span>
                                                </div>
                                                <span className="data_time">10:12 AM, Today</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-message clearfix">
                                        <div className="input-group mb-0">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <a href="/" className="btn btn-link"><i className="icon-camera text-warning"></i></a>
                                                    <a href="/" className="btn btn-link"><i className="icon-camcorder text-warning"></i></a>
                                                </span>
                                            </div>
                                            <textarea type="text" row="" className="form-control" placeholder="Enter text here..."></textarea>
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
