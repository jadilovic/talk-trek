import styles from './CardButton.module.css';

const CardButton = ({ text, createSentence }) => {
	return (
		<button onClick={() => createSentence()} className={styles.cardButton}>
			{text}
		</button>
	);
};
export default CardButton;
