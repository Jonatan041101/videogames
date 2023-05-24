'use client';
import Icons, { IconsType } from '@/atoms/Icons/Icons';
import LiWithIcon from '@/atoms/LiWithIcon/LiWithIcon';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useBearStore } from '@/store/store';
import ButtonNavBar from './ButtonNavBar';
export interface LinksNav {
	id: number;
	icon: JSX.Element;
	name: string;
	link: string;
	idMotion: IconsType;
}

const mapNav: LinksNav[] = [
	{
		id: 1,
		icon: <Icons icon="home" />,
		link: '/',
		name: 'Principal',
		idMotion: 'home',
	},
	{
		id: 3,
		icon: <Icons icon="gamepad" />,
		link: '/games',
		name: 'Videojuegos',
		idMotion: 'gamepad',
	},
	{
		id: 2,
		icon: <Icons icon="heart" />,
		link: '/favorits',
		name: 'Favoritos',
		idMotion: 'heart',
	},
];
// const mapBottom: LinksNav = {
// 	id: 4,
// 	icon: <Icons icon="logout" />,
// 	link: '',
// 	name: 'Favoritos',
// 	idMotion: 'logout',
// };
export default function NavBar() {
	const path = usePathname();
	const [backgroundId, setBackgroundId] = useState<string>(path);
	const { navBarView } = useBearStore((state) => state);
	useEffect(() => {
		setBackgroundId(path);
	}, [path]);
	const handleChangePage = (page: string) => {
		setBackgroundId(() => page);
	};
	console.log({ navBarView });

	return (
		<div className="nav__aux">
			<header className="nav" data-nav={navBarView}>
				<nav className="nav__nav">
					<ul className="nav__ul">
						<i>
							<Icons icon="circle" />
						</i>
						<div className="nav__div">
							{mapNav.map((li) => (
								<LiWithIcon
									li={li}
									key={li.id}
									select={backgroundId}
									changePage={handleChangePage}
								/>
							))}
						</div>
					</ul>
					{/* <ul className="nav__ul">
					<LiWithIcon
						li={mapBottom}
						select={backgroundId}
						changePage={handleChangePage}
					/>
				</ul> */}
				</nav>
			</header>
			<ButtonNavBar />
		</div>
	);
}
