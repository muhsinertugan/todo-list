import { useState } from 'react';

function Header({ todo, setTodo, toggleAll }) {
	const initialValue = { todo: '', isChecked: false, id: '' };
	const [newTodo, setNewTodo] = useState(initialValue);

	const newTodoItem = (event) => {
		const { name, value, checked } = event.target;

		setNewTodo({
			[name]: value,
			isChecked: checked,
			id: `li-id: ${Math.random()}`,
		});
	};

	const addNewTodo = (event) => {
		event.preventDefault();
		setNewTodo(initialValue);
		newTodo.todo !== '' && setTodo([...todo, newTodo]);
	};

	return (
		<header className='header'>
			<h1 className='app-title'>todos</h1>
			<form className='main'>
				<input
					className='toggle-all'
					type='checkbox'
					onClick={toggleAll}
				/>
				<label htmlFor='toggle-all'> Mark all as complete </label>
				<input
					onChange={newTodoItem}
					name='todo'
					className='new-todo'
					placeholder='What needs to be done?'
					value={newTodo.todo}
					autoFocus
				/>
				<button className='add' onClick={addNewTodo}></button>
			</form>
		</header>
	);
}

export default Header;
