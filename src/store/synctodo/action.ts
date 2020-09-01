import { SyncTodoActionTypes} from './types';
import { typedAction } from "../../utils/typedAction";
import { apiAction } from "../../middlewares/apiMiddleware";

export const loadSyncTodoList = (userId: any) => {
    return apiAction({
        method: 'GET',
        url: `https://5f4dba46eeec51001608ee64.mockapi.io/todo/v1/todo`,
        onSuccess: (data?:any) => typedAction(SyncTodoActionTypes.FETCH_SYNC_TODO_SUCCESS, data),
        onFailure: ()=> typedAction(SyncTodoActionTypes.FETCH_SYNC_TODO_ERROR)
    });
};
