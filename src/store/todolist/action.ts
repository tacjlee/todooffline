import { typedAction } from "../../utils/typedAction";
import { TodoAction, TodoActions, Todo } from "./types";


export function addTodo(todo: Todo): TodoAction {
	return typedAction(TodoActions.ADD_TODO, todo);
}

export function startTodo(todoId: number): TodoAction {
	return typedAction(TodoActions.START_TODO, todoId);
}

export function doneTodo(todoId: number): TodoAction {
	return typedAction(TodoActions.DONE_TODO, todoId);
}

export function cancelTodo(todoId: number): TodoAction {
	return typedAction(TodoActions.CANCEL_TODO, todoId);
}

export function deleteTodo(todoId: number): TodoAction {
	return typedAction(TodoActions.DELETE_TODO, todoId);
}
