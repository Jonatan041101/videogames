import styles from './page.module.css';
import getVideoGames from '@/services/videogames';
import Aside from '@/components/Aside';
import MainC from '@/components/MainC';

export default async function Home() {
	const { platforms, videogames } = await getVideoGames();

	return (
		<main className="main">
			<MainC />
			<Aside />
		</main>
	);
}
