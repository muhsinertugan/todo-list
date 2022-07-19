import React from 'react';

function Footer({
	activeTodo,
	completedTodo,
	handleActive,
	handleCompleted,
	handleAll,
	handleClear,
}) {
	return (
		<footer className='footer'>
			<span className='todo-count'>{`${activeTodo.length} items left`}</span>

			<ul className='filters'>
				<li>
					<button className='selected' onClick={handleAll}>
						All
					</button>
				</li>
				<li>
					<button className='selected' onClick={handleActive}>
						Active
					</button>
				</li>
				<li>
					<button className='selected' onClick={handleCompleted}>
						Completed
					</button>
				</li>
			</ul>

			<button
				className='clear-completed'
				onClick={handleClear}
				hidden={completedTodo.length === 0}>
				Clear completed
			</button>
		</footer>
	);
}

export default Footer;
