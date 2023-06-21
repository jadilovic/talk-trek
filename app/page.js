import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import workingImage from '../public/images/illustration-working.svg';
import desktopBoost from '../public/images/bg-boost-desktop.svg';

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.heading}>
				<article className={styles.welcome}>
					<h2 className={styles.title}>More than just talking English</h2>
					<p className={styles.description}>
						Our mission is to have you engaged in conversation and practical use
						of English with the idea of embarking on a linguistic adventure.
						TalkTrek will guide you in exploring the English language through AI
						generated exercises and discovering new horizons in language
						learning.
					</p>
					<Link href="/english" className="start">
						Get Started
					</Link>
				</article>
				<article className={styles.illustration}>
					<Image
						className={styles.working}
						src={workingImage}
						alt="language-skill"
					/>
				</article>
			</section>
			<section className={styles.popular}>
				<article className={styles.popularHeading}>
					<h3 className={styles.popularTitle}>Most popular exercises</h3>
					<p className={styles.popularDescription}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Praesentium, sit iste? Fugiat consequuntur tempora quas? Aperiam at
						hic officia minus?
					</p>
				</article>
				<article className="cards">
					<div className="card">
						<h4 className="cardTitle">Lorem, ipsum dolor.</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus quis ab fugiat incidunt magnam iure.
						</p>
					</div>
					<div className="card">
						<h4 className="cardTitle">Lorem, ipsum dolor.</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus quis ab fugiat incidunt magnam iure.
						</p>
					</div>
					<div className="card">
						<h4 className="cardTitle">Lorem, ipsum dolor.</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus quis ab fugiat incidunt magnam iure.
						</p>
					</div>
				</article>
			</section>
			<section className={styles.middle}>
				<Image
					className={styles.boost}
					src={desktopBoost}
					alt="desktop bg boost"
				/>
				<div className={styles.starting}>
					<h5 className={styles.middleTitle}>
						Start your TalkTrek adventure today!
					</h5>
					<div className="start">Get Started</div>
				</div>
			</section>
		</main>
	);
}
