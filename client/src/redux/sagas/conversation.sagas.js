import { put,call,all,fork, takeLatest } from "redux-saga/effects";
import {push} from 'connected-react-router'

import axios from '../../api/axios'
import * as actionTypes from '../types/conversation.types'
import * as actions from '../actions/conversation.actions'


function* createConversationAsync(action){
    try {
        const response = yield axios.post('conversations/',action.payload);
        yield put(actions.createConversationSuccess())

    }catch (e) {
        console.log(e)
    }

    yield put(push('/messenger'))
}

function* getAllConversationOfUserAsync(){
    try {
        const response = yield axios.get('conversations/');
        yield put(actions.conversationsOfUsersSuccess(response.data.data))

    }catch (err) {
        console.log(err);
    }
}

function* getAllRepliesOfConversationAsync(action){
    const {conversationId} = action.payload
    console.log("test",conversationId);
    try {
        const response = yield axios.get(`conversations/replies/?conversationId=${conversationId}`);
        yield put(actions.getRepliesOfConversationSuccess(response.data.data));
    }catch (e) {
        console.log(e)
    }

}

function* watchCreateConversation(){
    yield takeLatest(actionTypes.CREATE_CONVERSATION_START,createConversationAsync)
}

function* watchGetAllConversationOfUser(){
    yield takeLatest(actionTypes.CONVERSATIONS_OF_USER_START,getAllConversationOfUserAsync);
}

function* watchGetRepliesOfConversation(){
    yield takeLatest(actionTypes.GET_REPLIES_OF_CONVERSATION_START,getAllRepliesOfConversationAsync)
}


function* conversationSagas(){
    yield all([
        fork(watchCreateConversation),
        fork(watchGetAllConversationOfUser),
        fork(watchGetRepliesOfConversation)
    ])

}


export default conversationSagas;
