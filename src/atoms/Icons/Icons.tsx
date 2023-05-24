import React from 'react';
import Heart from './Heart';
import Home from './Home';
import Logout from './Logout';
import Circle from './Circle';
import Search from './Search';
import Msg from './Msg';
import Notify from './Notify';
import Points from './Points';
import Reddit from './Reddit';
import Muted from './Muted';
import Volumen from './Volumen';
import Next from './Next';
import Prev from './Prev';
import HeartL from './HeartL';
import Gamepad from './Gamepad';
import Down from './Down';
import Close from './Close';
import HeartLike from './HeartLike';
export const HAndW = 30;
export type IconsType =
	| 'heart'
	| 'home'
	| 'logout'
	| 'circle'
	| 'search'
	| 'msg'
	| 'notify'
	| 'points'
	| 'reddit'
	| 'muted'
	| 'volumen'
	| 'next'
	| 'prev'
	| 'heart-l'
	| 'gamepad'
	| 'down'
	| 'close'
	| 'heart-like';
interface Props {
	icon: IconsType;
}

export default function Icons({ icon }: Props) {
	return (
		<>
			{icon === 'heart' && <Heart />}
			{icon === 'home' && <Home />}
			{icon === 'logout' && <Logout />}
			{icon === 'search' && <Search />}
			{icon === 'circle' && <Circle />}
			{icon === 'msg' && <Msg />}
			{icon === 'notify' && <Notify />}
			{icon === 'points' && <Points />}
			{icon === 'reddit' && <Reddit />}
			{icon === 'muted' && <Muted />}
			{icon === 'volumen' && <Volumen />}
			{icon === 'next' && <Next />}
			{icon === 'prev' && <Prev />}
			{icon === 'heart-l' && <HeartL />}
			{icon === 'gamepad' && <Gamepad />}
			{icon === 'down' && <Down />}
			{icon === 'close' && <Close />}
			{icon === 'heart-like' && <HeartLike />}
		</>
	);
}
