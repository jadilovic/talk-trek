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
		if (sentenceIndex < exercise.exercises.length - 1) {
			setSentenceIndex(sentenceIndex + 1);
		} else {
			createNewSentence();
		}
	};

	const handlePreviousSentence = () => {
		if (sentenceIndex > 0) {
			setIsLoading(true);
			setSentenceIndex(sentenceIndex - 1);
		}
	};

	return (
		<main style={{ minHeight: '80vh' }}>
			<CardButton
				text="Create First Sentence"
				createSentence={createNewSentence}
			/>
			{!sentence ? (
				<h1 style={{ margin: '2em 0 0' }}>Loading...</h1>
			) : (
				<>
					<h1 style={{ margin: '2em 0 0' }}>
						Exercise: {exercise.exerciseName}
					</h1>
					<h4 style={{ margin: '0 0 2em' }}>{exercise.exerciseDescription}</h4>
					<section className={styles.card}>
						<h4 className="cardTitle">{`${sentenceIndex + 1} out of ${
							exercise.exercises.length
						}`}</h4>
						{isLoading ? (
							<h5>Loading...</h5>
						) : (
							<article>
								<p>
									<b>Sentence:</b> {sentence.sentence}
								</p>
								<button
									className="showHide"
									onClick={() => setShowAnswer(!showAnswer)}
								>
									{showAnswer ? 'Hide Answer' : 'Show Answer'}
								</button>
								{showAnswer ? <p>Tense: {sentence.tense}</p> : <p></p>}
							</article>
						)}

						<button onClick={handlePreviousSentence}>Previous</button>
						<button onClick={handleNextSentence}>Next</button>
						<CardButton text="Card Button" />
					</section>
				</>
			)}
		</main>
	);
};
export default Exercise;
