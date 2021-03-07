import axios from '../../api/axios'
import * as actionTypes from '../types/users.types'
import * as actions from '../actions/users.actions'
import {all, fork,throttle,put} from "redux-saga/effects";


function* getUsersForConversations(action){
    try {
        const response = yield axios.get(`users/for-conversations?search=${action.payload}`);
        yield put(actions.usersForConversationsSuccess(response.data.data))
    }catch (err) {
        console.log("error",err);
    }
}

function* watchGetUsersForConversations(){
    yield throttle(2000,actionTypes.USERS_FOR_CONVERSATIONS_START,getUsersForConversations)
}

function* userSagas(){
    yield all([
        fork(watchGetUsersForConversations),
    ])

}


export default userSagas;