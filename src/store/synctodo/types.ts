export interface SyncTodo {
    id: number;
    todoId: number;
    text: string;
    status: string;
  }
  
  export enum SyncTodoActionTypes {
    FETCH_SYNC_TODO_SUCCESS = "@@mockapi/FETCH_SYNC_TODO_SUCCESS",
    FETCH_SYNC_TODO_ERROR = "@@mockapi/FETCH_SYNC_TODO_ERROR"
  }

  export interface SyncTodoState{
    readonly loading: boolean;
    readonly syncTodoList: SyncTodo[];
    readonly errors?: string;
  }