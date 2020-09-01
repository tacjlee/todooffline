import { combineReducers } from "redux";
import { History } from "history";

import * as todoReducer from "./todolist/reducer";
import { syncTodoReducer} from "../store/synctodo/reducer";


const rootReducer = combineReducers({
    ...todoReducer,
   rootSyncTodo: syncTodoReducer 
});
export default(history: History)=>rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

