import React from 'react';
import Icons, { IconsType } from '../Icons/Icons';
export type change = React.ChangeEvent<HTMLInputElement>;
export type form = React.FormEvent<HTMLFormElement>;
interface Props {
	text: string;
	icon: IconsType;
	type: string;
	placeholder: string;
	handleChange: (evt: change) => void;
	handleSubmit: (evt: form) => void;
}

export default function Input({
	icon,
	text,
	type,
	placeholder,
	handleChange,
	handleSubmit,
}: Props) {
	return (
		// <div className="input">
		<form className="input" onSubmit={handleSubmit}>
			<input
				type={type}
				className="input__input"
				onChange={handleChange}
				value={text}
				placeholder={placeholder}
			/>
			{icon && (
				<button>
					<i className="input__i">
						<Icons icon={icon} />
					</i>
				</button>
			)}
		</form>
		// </div>
	);
}
