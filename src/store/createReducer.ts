import { Reducer } from "redux";
import {TodoAction} from '../store/todolist/types'

//It’s a helper function lets you describe reducers as mappings from action types to handlers.
//-Instead of switch cases, we can use functions for every action type.
//-An added bonus is that if the given action doesn’t match, createReducer takes care of the default case by returning state

export default function createReducer<S>(initialState: S, handlers: any): Reducer<S> {
	const r = (state: S = initialState, action: TodoAction): S => {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
	return r as Reducer<S>;
}
