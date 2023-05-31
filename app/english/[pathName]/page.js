'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

const Exercise = () => {
	const { pathName } = useParams();
	const router = useRouter();
	const [exercise, setExercise] = useState(null);

	useEffect(() => {
		const getExerciseDetails = async () => {
			const response = await fetch(`/api/english/${pathName}`);
			const data = await response.json();
			setExercise(data);
		};
		getExerciseDetails();
	}, [pathName]);

	const createExercise = async () => {
		const response = await fetch(`/api/english/${pathName}/new`);
		const data = await response.json();
		setExercise(data);
	};

	console.log(exercise);

	if (!exercise) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1 style={{ margin: '2em' }}>test {pathName}</h1>
			{exercise.exercises.length > 0 ? (
				exercise.exercises.map((item) => {
					return (
						<div key={item._id} className="card">
							<h4 className="cardTitle">{item.tense}</h4>
							<p>{item}</p>
						</div>
					);
				})
			) : (
				<button onClick={createExercise}>create some</button>
			)}
		</div>
	);
};
export default Exercise;
