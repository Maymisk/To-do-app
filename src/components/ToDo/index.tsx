import { Dispatch, SetStateAction, useState } from 'react';
import { Trash, CheckCircle } from 'phosphor-react';

import styles from './ToDo.module.scss';
import { Checkbox } from '../Checkbox';

interface IToDoProps {
	id: string;
	text: string;
	deleteToDo(id: string): void;
	setCompletedToDos: Dispatch<SetStateAction<number>>;
}

export function ToDo({ id, text, deleteToDo, setCompletedToDos }: IToDoProps) {
	const [isCompleted, setIsCompleted] = useState(false);

	function handleCheck() {
		setIsCompleted(prevState => !prevState);

		if (!isCompleted) {
			setCompletedToDos(prev => prev + 1);
		} else {
			setCompletedToDos(prev => prev - 1);
		}
	}

	function handleDelete() {
		if (isCompleted) {
			setCompletedToDos(prevState => prevState - 1);
		}

		deleteToDo(id);
	}

	return (
		<div className={`${styles.ToDo} ${isCompleted && styles.completed}`}>
			<Checkbox isChecked={isCompleted} handleCheck={handleCheck} />

			<div>
				<p>{text}</p>

				<button className={styles.deleteButton} onClick={handleDelete}>
					<Trash />
				</button>
			</div>
		</div>
	);
}
