import styles from './EmptyToDoListMessage.module.scss';
import clipboardImagePath from '../../../assets/Clipboard.svg';

export function EmptyToDoListMessage() {
	return (
		<div className={styles.container}>
			<img src={clipboardImagePath} alt="Clipboard image" />
			<p>
				<span>Você ainda não tem tarefas cadastradas</span>
				Crie tarefas e organize seus itens a fazer
			</p>
		</div>
	);
}
