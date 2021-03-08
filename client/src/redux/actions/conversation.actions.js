import {createAction} from '../../utils/reduxHelper'
import * as actions from '../types/conversation.types'

export const conversationsOfUsersStart = createAction(actions.CONVERSATIONS_OF_USER_START)
export const conversationsOfUsersSuccess= createAction(actions.CONVERSATIONS_OF_USER_SUCCESS)
export const conversationsOfUsersError = createAction(actions.CONVERSATIONS_OF_USER_ERROR)

export const createConversationStart = createAction(actions.CREATE_CONVERSATION_START)
export const createConversationSuccess= createAction(actions.CREATE_CONVERSATION_SUCCESS)
export const createConversationError = createAction(actions.CREATE_CONVERSATION_ERROR)

export const getRepliesOfConversationStart = createAction(actions.GET_REPLIES_OF_CONVERSATION_START)
export const getRepliesOfConversationSuccess= createAction(actions.GET_REPLIES_OF_CONVERSATION_SUCCESS)
export const getRepliesOfConversationError = createAction(actions.GET_REPLIES_OF_CONVERSATION_ERROR)

export const addMsgInReplies = createAction(actions.ADD_MSG_IN_REPLIES)
