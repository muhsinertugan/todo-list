import React from 'react';

function List({ handleChecked, item }) {
	return (
		<li className={item.isChecked === true ? 'completed' : ''}>
			<div className='view'>
				<input
					className='toggle'
					type='checkbox'
					onChange={handleChecked}
					checked={item.isChecked}
					value={item.id}
				/>
				<label>{item.todo} </label>
				<button className='destroy'></button>
			</div>
		</li>
	);
}

export default List;
