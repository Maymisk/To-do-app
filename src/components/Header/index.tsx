import logoPath from '../../assets/Logo.svg';
import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={logoPath} alt="to do logo" />
		</header>
	);
}
