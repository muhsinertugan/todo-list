import { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List-element';
import Footer from './components/Footer';

function App() {
	const [todo, setTodo] = useState([]);
	const [displayedTodo, setDisplayedTodo] = useState([]);
	const [completedTodo, setCompletedTodo] = useState([]);
	const [activeTodo, setActiveTodo] = useState([]);
	const [toggleStatus, setToggleStatus] = useState(false);

	const filterTodo = (ifTrue, array) => {
		return array.filter((item) => item.isChecked === ifTrue);
	};

	useEffect(() => {
		setDisplayedTodo([...todo]);
	}, [todo]);

	useEffect(() => {
		setCompletedTodo(todo.filter((item) => item.isChecked === true));
	}, [todo]);

	useEffect(() => {
		setActiveTodo(todo.filter((item) => item.isChecked === false));
	}, [todo]);

	const handleToggleAll = () => {
		setTodo((prevState) => {
			return prevState.map((item) => {
				const newItem = item;

				toggleStatus
					? (newItem.isChecked = false)
					: (newItem.isChecked = true);

				return newItem;
			});
		});

		setToggleStatus((prevState) => !prevState);
	};

	const handleChecked = (event) => {
		const { checked, value } = event.target;

		setTodo((prevState) => {
			return prevState.map((item) => {
				const newItem = item;
				if (newItem.id === value) {
					newItem.isChecked = checked;
				}

				return newItem;
			});
		});
	};

	const handleAll = () => {
		setDisplayedTodo([...todo]);
	};

	const handleCompleted = () => {
		setDisplayedTodo([...completedTodo]);
	};

	const handleActive = () => {
		setDisplayedTodo([...activeTodo]);
	};

	const handleClear = () => {
		setTodo(() => filterTodo(false, todo));
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem('items'));
		if (todos) {
			setTodo(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(todo));
	}, [todo]);

	return (
		<div className='App'>
			<Header
				todo={todo}
				setTodo={setTodo}
				toggleAll={handleToggleAll}></Header>

			<ul className='todo-list'>
				{displayedTodo?.map((item) => {
					return (
						<List
							key={item.id}
							item={item}
							handleChecked={handleChecked}></List>
					);
				})}
			</ul>
			<Footer
				completedTodo={completedTodo}
				activeTodo={activeTodo}
				handleActive={handleActive}
				handleCompleted={handleCompleted}
				handleClear={handleClear}
				handleAll={handleAll}></Footer>
		</div>
	);
}

export default App;
