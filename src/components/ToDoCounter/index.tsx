import styles from './ToDoListHeader.module.scss';

interface IToDoCounterProps {
	toDos: number;
	completedToDos: number;
}

export function ToDoCounter({ toDos, completedToDos }: IToDoCounterProps) {
	return (
		<header className={styles.main}>
			<div className={styles.created}>
				Tarefas Criadas
				<div className={styles.highlightedNumber}>{toDos}</div>
			</div>

			<div className={styles.completed}>
				Concluídas
				<div className={styles.highlightedNumber}>{completedToDos}</div>
			</div>
		</header>
	);
}
