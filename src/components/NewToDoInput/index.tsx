import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	InvalidEvent,
	SetStateAction,
	useState,
} from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 } from 'uuid';

import styles from './NewToDoInput.module.scss';

interface IToDo {
	id: string;
	text: string;
}

interface INewToDoInputProps {
	setToDos: Dispatch<SetStateAction<IToDo[]>>;
}

export function NewToDoInput({ setToDos }: INewToDoInputProps) {
	const [newToDoText, setNewToDoText] = useState('');

	function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity('');
		setNewToDoText(event.target.value);
	}

	function handleToDoSubmission(event: FormEvent) {
		event.preventDefault();

		const newToDo = {
			id: v4(),
			text: newToDoText,
		};

		setToDos(prevState => [...prevState, newToDo]);
		setNewToDoText('');
	}

	function handleInvalidSubmission(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Escreva sua tarefa!');
	}

	return (
		<form className={styles.form} onSubmit={handleToDoSubmission}>
			<input
				type="text"
				required
				onInvalid={handleInvalidSubmission}
				placeholder="Adicionar uma nova tarefa"
				value={newToDoText}
				onChange={handleNewToDoChange}
			/>

			<button type="submit">
				Criar <PlusCircle size={20} weight={'bold'} />
			</button>
		</form>
	);
}
