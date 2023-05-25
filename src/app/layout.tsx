import './globals.css';
import { Inter } from 'next/font/google';
import '../css/main.css';
import NavBar from '@/components/NavBar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Juegos',
	description: 'Puedes buscar y saber donde comprar cada juego.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="page">
					<NavBar />
					<div className="page__container">{children}</div>
				</div>
			</body>
		</html>
	);
}
