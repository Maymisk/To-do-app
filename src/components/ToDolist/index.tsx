import { Dispatch, SetStateAction, useState } from 'react';
import { ToDo } from '../ToDo';
import { EmptyToDoListMessage } from './EmptyToDoListMessage';
import styles from './ToDoList.module.scss';

interface IToDo {
	id: string;
	text: string;
}

interface IToDoListProps {
	toDos: IToDo[];
	handleDeleteToDo(id: string): void;
	setCompletedToDos: Dispatch<SetStateAction<number>>;
}

export function ToDoList({
	toDos,
	handleDeleteToDo,
	setCompletedToDos,
}: IToDoListProps) {
	const hasTodos = toDos.length > 0;

	return (
		<div className={styles.toDoList}>
			{!hasTodos ? (
				<EmptyToDoListMessage />
			) : (
				toDos.map(toDo => {
					return (
						<ToDo
							key={toDo.id}
							{...toDo}
							deleteToDo={handleDeleteToDo}
							setCompletedToDos={setCompletedToDos}
						/>
					);
				})
			)}
		</div>
	);
}
