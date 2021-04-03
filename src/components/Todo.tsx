import React from 'react';
import { TodoInterface } from '../interfaces/todo-interface';
import { Checkbox, Label } from 'semantic-ui-react';

import '../styles/index.css';
import { EditTodo } from './EditTodo';

interface Props {
	item: TodoInterface;
	toggleTodo: (item: TodoInterface) => void;
	toggleEdit: (item: TodoInterface) => void;
	editTodo: (item: TodoInterface) => void;
	deleteTodo: (item: TodoInterface) => void;
}

export const Todo: React.FC<Props> = ({ item, toggleTodo, toggleEdit, editTodo, deleteTodo }) => {
	return (
		<div role="listitem" className="item">
			<Checkbox
				checked={item.isComplete}
				onChange={(e) => {
					e.preventDefault();
					toggleTodo(item);
				}}
				label={{
					children: item.text,
					className: item.isComplete ? 'completed' : 'incomplete',
					style: { fontSize: 20, width: '50vw' },
				}}
			/>
			<Label
				onClick={
					!item.isComplete
						? () => {
								toggleEdit(item);
						  }
						: undefined
				}
				color="blue"
				as="a"
			>
				{item.isEditing ? 'DONE' : 'EDIT'}
			</Label>
			<Label
				onClick={() => {
					deleteTodo(item);
				}}
				color="red"
				as="a"
			>
				DELETE
			</Label>
			{item.isEditing ? <EditTodo editTodo={editTodo} todo={item} /> : null}
		</div>
	);
};
