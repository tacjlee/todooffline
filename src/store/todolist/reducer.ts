import { TodoAction, TodoActions, Todo } from "./types"; 
import createReducer from "../createReducer";

export const todoList = createReducer<Todo[]>([], {
	[TodoActions.ADD_TODO](state: Todo[], action: TodoAction) {
		return [...state, action.payload];
	},
	
	[TodoActions.START_TODO](state: Todo[], action: TodoAction) {
		// search todo item with the given id and set status to In-Progress
		return state.map(t =>
			t.id === action.payload ? { ...t, status: 'In-Progress' } : t
		);
	},
	[TodoActions.DONE_TODO](state: Todo[], action: TodoAction) {
		// search todo item with the given id and set status to Done
		return state.map(t =>
			t.id === action.payload ? { ...t, status: 'Done' } : t
		);
	},

	[TodoActions.CANCEL_TODO](state: Todo[], action: TodoAction) {
		// search todo item with the given id and set status to Canceled
		return state.map(t =>
			t.id === action.payload ? { ...t, status: 'Canceled' } : t
		);
	},

	[TodoActions.DELETE_TODO](state: Todo[], action: TodoAction) {
		// remove all todos with the given id
		return state.map(t =>
			t.id === action.payload ? { ...t, status: 'Deleted' } : t
		);
	},
	
	[TodoActions.DELETE_TODO_FORCE](state: Todo[], action: TodoAction) {
		// remove all todos with the given id
		return state.filter(t => t.id !== action.payload);
	},
	

});
