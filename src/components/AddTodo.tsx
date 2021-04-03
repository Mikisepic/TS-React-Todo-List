import React, { useState } from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';

interface Props {
	addTodo: (text: string) => void;
}

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
	const [text, setText] = useState<string>('');

	return (
		<Form className="form">
			<Form.Field>
				<label>YOUR TODO</label>
				<input
					onChange={(e) => {
						e.preventDefault();
						setText(e.target.value);
					}}
					placeholder="What Do You Need To Do?"
				/>
			</Form.Field>
			<Button
				type="submit"
				animated
				onClick={(e) => {
					e.preventDefault();
					if (text.length === 0) addTodo('Nothing 🥱 🤷‍♂️ ');
					else addTodo(text);
				}}
			>
				<Button.Content visible>ADD TODO</Button.Content>
				<Button.Content hidden>
					<Icon name="arrow right" />
				</Button.Content>
			</Button>
		</Form>
	);
};
