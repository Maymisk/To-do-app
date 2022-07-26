import { Check } from 'phosphor-react';
import { useState } from 'react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
	isChecked: boolean;
	handleCheck(): void;
}

export function Checkbox({ isChecked, handleCheck }: ICheckboxProps) {
	return (
		<button
			onClick={handleCheck}
			className={`${styles.checkbox} ${
				isChecked ? styles.checked : styles.notChecked
			}`}
		>
			{isChecked && <Check weight="bold" />}
		</button>
	);
}
