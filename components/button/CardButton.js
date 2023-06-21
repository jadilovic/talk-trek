import styles from './CardButton.module.css';

const CardButton = ({ text }) => {
	return <div className={styles.cardButton}>{text}</div>;
};
export default CardButton;
