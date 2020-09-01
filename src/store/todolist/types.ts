export interface Todo {
    id: number;
    todoId: number;
    text: string;
    status: string;
    deleted: boolean;
  }
  
  export enum TodoActions {
    ADD_TODO = "ADD_TODO",
    START_TODO = "START_TODO",
    DONE_TODO = "DONE_TODO",
    CANCEL_TODO = "CANCEL_TODO",
    DELETE_TODO = "DELETE_TODO",
    DELETE_TODO_FORCE = "DELETE_TODO_FORCE",
    GET_TODOS = "GET_TODOS",

  }
  
  interface TodoActionType<T, P> {
    type: T;
    payload: P;
  }
  
  export type TodoAction =
    | TodoActionType<typeof TodoActions.ADD_TODO, Todo>
    | TodoActionType<typeof TodoActions.START_TODO, number>
    | TodoActionType<typeof TodoActions.DONE_TODO, number>
    | TodoActionType<typeof TodoActions.CANCEL_TODO, number>
    | TodoActionType<typeof TodoActions.DELETE_TODO, number>
    | TodoActionType<typeof TodoActions.DELETE_TODO_FORCE, number>
  ;
  