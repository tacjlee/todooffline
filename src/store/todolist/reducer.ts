import { TodoAction, TodoActions, Todo, TodoState } from "./types";
import createReducer from "../createReducer";


// export const todoList = createReducer<Todo[]>([], {
// 	[TodoActions.ADD_TODO](state: Todo[], action: TodoAction) {
// 		return [...state, action.payload];
// 	},

// 	[TodoActions.START_TODO](state: Todo[], action: TodoAction) {
// 		return state.map(t =>
// 			t.id === action.payload ? { ...t, status: 'In-Progress' } : t
// 		);
// 	},
// 	[TodoActions.DONE_TODO](state: Todo[], action: TodoAction) {
// 		return state.map(t =>
// 			t.id === action.payload ? { ...t, status: 'Done' } : t
// 		);
// 	},

// 	[TodoActions.CANCEL_TODO](state: Todo[], action: TodoAction) {
// 		return state.map(t =>
// 			t.id === action.payload ? { ...t, status: 'Canceled' } : t
// 		);
// 	},

// 	[TodoActions.DELETE_TODO](state: Todo[], action: TodoAction) {
// 		return state.map(t =>
// 			t.id === action.payload ? { ...t, status: 'Deleted' } : t
// 		);
// 	},

// 	[TodoActions.DELETE_TODO_FORCE](state: Todo[], action: TodoAction) {
// 		return state.filter(t => t.id !== action.payload);
// 	},

// 	[TodoActions.SET_TODOS](state: Todo[], action: TodoAction) {
// 		return {...state, todoList: action.payload};
// 	},

// });


export const initialState: TodoState = {
	todoList: [],
	errors: undefined,
	loading: false
  };


export function todoReducer(state = initialState, action: any): TodoState {
	switch (action.type) {
	 case TodoActions.ADD_TODO: {
		return {...state, todoList: action.payload};
	 }
	 case TodoActions.START_TODO: {
		const todos:any[] = [...state.todoList];
		return {...state, todoList: todos.map((t: Todo) => t.id === action.payload ? { ...t, status: 'In-Progress' } : t )};
	 }
	 case TodoActions.DONE_TODO:{
		const todos:any[] = [...state.todoList];
		return {...state, todoList: todos.map((t: Todo) => t.id === action.payload ? { ...t, status: 'Done' } : t )};
	 }
	 case TodoActions.CANCEL_TODO:{
		const todos:any[] = [...state.todoList];
		return {...state, todoList: todos.map((t: Todo) => t.id === action.payload ? { ...t, status: 'Canceled' } : t )};
	 }
	 case TodoActions.DELETE_TODO:{
		const todos:any[] = [...state.todoList];
		return {...state, todoList: todos.map((t: Todo) => t.id === action.payload ? { ...t, status: 'Deleted' } : t )};
	 }
	 case TodoActions.SET_TODOS: {
		return {...state, todoList: action.payload};
	 }
	 default: {
	   return state;
	 }
   }
 }
