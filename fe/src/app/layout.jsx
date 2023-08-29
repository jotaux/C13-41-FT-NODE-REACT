import './globals.css';
import { Inter } from 'next/font/google';
import { FilterProvider } from '@/contexts/Filters.context';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Klinika',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<FilterProvider>
			<html lang='en'>
				<body className={inter.className}>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</FilterProvider>
	);
}