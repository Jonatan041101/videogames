import { LinksNav } from '@/components/NavBar';
import React from 'react';
import { IconsType } from '../Icons/Icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface Props {
	li: LinksNav;
	select: string;
	changePage: (page: string) => void;
}

export default function LiWithIcon({ li, select, changePage }: Props) {
	return (
		<Link href={li.link}>
			<li className="nav__li" onClick={() => changePage(li.link)}>
				<i className="nav__i">{li.icon}</i>
				{select === li.link && (
					<motion.div layoutId="background__home" className="nav__back" />
				)}
			</li>
		</Link>
	);
}
