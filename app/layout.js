import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const inter = Poppins({ subsets: ['latin'], weight: ['500', '700'] });

export const metadata = {
	charset: 'UTF-8',
	viewport: 'width=device-width, initial-scale=1.0',
	title: 'TalkTrek - English Exercises and Grammar Definitions',
	description: 'Practice english grammar and practical use of english language',
	author: 'Jasmin Adilovic',
	keywords:
		'english, practice, learn, exercise, grammar, language, verb, noun, tense, pronouns, words, sentences, talk, speak, communicate',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
