import React from 'react';
import { TodoList } from './components/TodoList';

export const App: React.FC = () => {
	return (
		<div className="ui container">
			<TodoList />
		</div>
	);
};
