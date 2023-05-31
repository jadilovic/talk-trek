'use client';

import styles from './page.module.css';
import Image from 'next/image';
import shorten from '../../public/images/bg-shorten-desktop.svg';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const English = () => {
	const [exercises, setExercises] = useState([]);
	const [searchText, setSearchText] = useState('');

	const handleSearchChange = () => {};

	useEffect(() => {
		const fetchExercises = async () => {
			const response = await fetch('/api/english');
			const data = await response.json();
			setExercises(data);
		};
		fetchExercises();
	}, []);

	console.log(exercises);

	return (
		<main>
			<section className={styles.heading}>
				<h1 className={styles.headingTitle}>English Exercises</h1>
				<article className={styles.search}>
					<Image
						className={styles.searchBgImg}
						src={shorten}
						alt="shorten bg"
					/>
					<div className={styles.inputContainer}>
						<input
							className={styles.searchInput}
							type="text"
							name="english"
							id="english"
							placeholder="Type exercise name here..."
						/>
						<button className={styles.searchBtn}>Search exercises</button>
					</div>
				</article>
			</section>
			<article className="cards">
				{exercises.length > 0 ? (
					exercises.map((item) => {
						return (
							<Link
								href={`/english/${item.pathName}`}
								key={item.pathName}
								className="card"
							>
								<h4 className="cardTitle">{item.exerciseName}</h4>
								<p>{item.exerciseDescription}</p>
							</Link>
						);
					})
				) : (
					<h1 style={{ margin: '3em' }}>Loading...</h1>
				)}
			</article>
		</main>
	);
};
export default English;
