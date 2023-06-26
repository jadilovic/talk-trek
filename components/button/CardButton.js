import styles from './CardButton.module.css';

const CardButton = ({ text, handleEvent }) => {
	return (
		<button onClick={() => handleEvent()} className={styles.cardButton}>
			{text}
		</button>
	);
};
export default CardButton;
