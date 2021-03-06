import {createAction} from '../../utils/reduxHelper'
import * as actions from '../types/users.types'



export const usersForConversationsStart = createAction(actions.USERS_FOR_CONVERSATIONS_START);
export const usersForConversationsSuccess = createAction(actions.USERS_FOR_CONVERSATIONS_SUCCESS);
