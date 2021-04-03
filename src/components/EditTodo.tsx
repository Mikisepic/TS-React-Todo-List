import React, { useState } from 'react';
import { TodoInterface } from '../interfaces/todo-interface';
import { Button, Form } from 'semantic-ui-react';

interface Props {
	editTodo: (todo: TodoInterface) => void;
	todo: TodoInterface;
}

export const EditTodo: React.FC<Props> = ({ editTodo, todo }) => {
	const [text, setText] = useState(todo.text);
	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				todo.isEditing = false;
				todo.text = text;
				editTodo(todo);
			}}
		>
			<Form.Field>
				<label>EDIT TODO</label>
				<input
					placeholder="What Do You Need To Do?"
					defaultValue={text}
					onChange={(e) => {
						e.preventDefault();
						setText(e.target.value);
					}}
				/>
			</Form.Field>
			<Button type="submit">Submit</Button>
		</Form>
	);
};
