export interface Todo {
    id: string;
    todoId: string;
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
    SET_TODOS = "SET_TODOS"
  }
  
  interface TodoActionType<T, P> {
    type: T;
    payload: P;
  }
  
  export type TodoAction =
    | TodoActionType<typeof TodoActions.ADD_TODO, Todo>
    | TodoActionType<typeof TodoActions.START_TODO, string>
    | TodoActionType<typeof TodoActions.DONE_TODO, string>
    | TodoActionType<typeof TodoActions.CANCEL_TODO, string>
    | TodoActionType<typeof TodoActions.DELETE_TODO, string>
    | TodoActionType<typeof TodoActions.DELETE_TODO_FORCE, string>
    | TodoActionType<typeof TodoActions.SET_TODOS, Todo[]>
    
  ;
  
  //Add new  here
  
  export interface TodoState{
	[x: string]: any;
    readonly loading: boolean;
    readonly todoList: Todo[];
    readonly errors?: string;
  }