import { SyncTodoActionTypes, SyncTodoState } from "./types";

export const initialState: SyncTodoState = {
  syncTodoList: [],
  errors: undefined,
  loading: false
};


export function syncTodoReducer(state = initialState, action: any): SyncTodoState {
   switch (action.type) {
    case SyncTodoActionTypes.FETCH_SYNC_TODO_SUCCESS: {
      return { ...state, loading: false, syncTodoList: action.payload };
    }
    case SyncTodoActionTypes.FETCH_SYNC_TODO_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
}
