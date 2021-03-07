import {createAction} from '../../utils/reduxHelper'
import * as actions from '../types/conversation.types'

export const conversationsOfUsersStart = createAction(actions.CONVERSATIONS_OF_USER_START)
export const conversationsOfUsersSuccess= createAction(actions.CONVERSATIONS_OF_USER_SUCCESS)
export const conversationsOfUsersError = createAction(actions.CONVERSATIONS_OF_USER_ERROR)
