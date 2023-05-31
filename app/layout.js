import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const inter = Poppins({ subsets: ['latin'], weight: ['500', '700'] });

export const metadata = {
	title: 'TalkTrek - Practice English',
	description: 'Practice english grammar and practical use of english language',
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
