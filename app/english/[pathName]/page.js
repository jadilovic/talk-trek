'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './page.module.css';
import CardButton from '@/components/button/CardButton';

const Exercise = () => {
	const { pathName } = useParams();
	const router = useRouter();
	const [exercise, setExercise] = useState(null);
	const [sentenceIndex, setSentenceIndex] = useState(0);
	const [sentence, setSentence] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [showAnswer, setShowAnswer] = useState(false);

	useEffect(() => {
		const getExerciseDetails = async () => {
			const response = await fetch(`/api/english/${pathName}`);
			const data = await response.json();
			setExercise(data);
		};
		getExerciseDetails();
	}, [pathName]);

	useEffect(() => {
		if (exercise) {
			getSentence();
		}
	}, [exercise, sentenceIndex]);

	const createNewSentence = async () => {
		const response = await fetch(`/api/english/${pathName}/new`);
		const data = await response.json();
		setExercise(data);
		setSentenceIndex(sentenceIndex + 1);
	};

	const getSentence = async () => {
		const response = await fetch(
			`/api/english/${pathName}/${exercise.exercises[sentenceIndex]}`
		);
		const data = await response.json();
		setSentence(data);
		setIsLoading(false);
		console.log(data);
	};

	const handleNextSentence = () => {
		setIsLoading(true);
		setShowAnswer(false);
		if (sentenceIndex < exercise.exercises.length - 1) {
			setSentenceIndex(sentenceIndex + 1);
		} else {
			createNewSentence();
		}
	};

	const handlePreviousSentence = () => {
		if (sentenceIndex > 0) {
			setIsLoading(true);
			setShowAnswer(false);
			setSentenceIndex(sentenceIndex - 1);
		}
	};

	return (
		<main style={{ minHeight: '80vh', textAlign: 'center' }}>
			{/* <CardButton
				text="Create First Sentence"
				handleEvent={createNewSentence}
			/> */}
			{!sentence ? (
				<h1 style={{ margin: '2em 0 0' }}>Loading...</h1>
			) : (
				<>
					<h2 style={{ margin: '2em 0 0' }}>Exercise:</h2>
					<h2 style={{ margin: '0 0 1em' }}>{exercise.exerciseName}</h2>
					<section className={styles.card}>
						<h4 className="cardTitle">{`Exercise ${sentenceIndex + 1} out of ${
							exercise.exercises.length
						}`}</h4>
						{isLoading ? (
							<h3 className={styles.loading}>Loading...</h3>
						) : (
							<article>
								<p className={styles.sentence}>
									<b>Sentence:</b> {sentence.sentence}
								</p>
								<button
									className="showHide"
									onClick={() => setShowAnswer(!showAnswer)}
								>
									{showAnswer ? 'Hide Answer' : 'Show Answer'}
								</button>
								<p className={showAnswer ? styles.show : styles.hide}>
									<b>Tense:</b> {sentence.tense}
								</p>
							</article>
						)}

						<CardButton
							text="&laquo; Previous"
							handleEvent={handlePreviousSentence}
						/>
						<CardButton text="Next &raquo;" handleEvent={handleNextSentence} />
					</section>
					<h4 style={{ margin: '0 0 2em' }}>{exercise.exerciseDescription}</h4>
				</>
			)}
		</main>
	);
};
export default Exercise;
