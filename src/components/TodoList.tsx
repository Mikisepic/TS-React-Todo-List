import React from 'react';
import { TodoInterface } from '../interfaces/todo-interface';
import { useLocalStorage } from '../useLocalStorage';

import { AddTodo } from './AddTodo';
import { Todo } from './Todo';

export const TodoList: React.FC = () => {
	const [todos, setTodos] = useLocalStorage<TodoInterface[]>('todos', []);

	const handleAdd = (todoText: string) => {
		const newTodo: TodoInterface = {
			id: Math.random() * 10,
			text: todoText,
			isComplete: false,
			isEditing: false,
		};
		setTodos([...todos, newTodo]);
	};

	const handleCompletedToggle = (item: TodoInterface) => {
		item.isComplete = !item.isComplete;
		setTodos([...todos]);
	};

	const handleEditModeToggle = (item: TodoInterface) => {
		item.isEditing = !item.isEditing;
		setTodos([...todos]);
	};

	const handleEdit = (item: TodoInterface) => {
		setTodos([...todos]);
	};

	const handleDelete = (item: TodoInterface) => {
		let index: number = todos.indexOf(item);
		todos.splice(index, 1);
		setTodos([...todos]);
	};

	return (
		<div className="">
			<h1>TodoList</h1>
			<AddTodo addTodo={handleAdd} />
			<div role="list" className="ui list">
				{todos.map((todo) => (
					<Todo
						key={todo.id}
						item={todo}
						toggleTodo={handleCompletedToggle}
						toggleEdit={handleEditModeToggle}
						editTodo={handleEdit}
						deleteTodo={handleDelete}
					/>
				))}
			</div>
		</div>
	);
};
