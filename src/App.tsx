import './styles/global.scss';
import styles from './styles/App.module.scss';

import { Header } from './components/Header/';
import { NewToDoInput } from './components/NewToDoInput';
import { ToDoList } from './components/ToDolist';
import { useState } from 'react';
import { v4 } from 'uuid';
import { ToDoCounter } from './components/ToDoCounter';

const toDosSample = [
	{
		id: v4(),
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas tempore eaque omnis tempora dignissimos',
	},
	{
		id: v4(),
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas tempore eaque omnis tempora dignissimos',
	},
	{
		id: v4(),
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas tempore eaque omnis tempora dignissimos',
	},
	{
		id: v4(),
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas tempore eaque omnis tempora dignissimos',
	},
	{
		id: v4(),
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas tempore eaque omnis tempora dignissimos',
	},
];

interface IToDo {
	id: string;
	text: string;
}

export function App() {
	const [toDos, setToDos] = useState<IToDo[]>(toDosSample);
	const [completedToDos, setCompletedToDos] = useState(0);

	function handleDeleteToDo(id: string) {
		setToDos(prevState => prevState.filter(toDo => toDo.id !== id));
	}

	const amountOfToDos = toDos.length;

	return (
		<>
			<Header />

			<main className={styles.mainContainer}>
				<NewToDoInput setToDos={setToDos} />

				<ToDoCounter
					toDos={amountOfToDos}
					completedToDos={completedToDos}
				/>

				<ToDoList
					toDos={toDos}
					handleDeleteToDo={handleDeleteToDo}
					setCompletedToDos={setCompletedToDos}
				/>
			</main>
		</>
	);
}
