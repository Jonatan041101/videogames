import Image from 'next/image';
import React from 'react';

export default function ProfileIcon() {
	return (
		<Image
			src={
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_g_7YVzERozXI_mfnbSPkggiXqlljwtCQXw&usqp=CAU'
			}
			alt="Perfil del usuario."
			width={40}
			height={40}
			className="icon__image"
		/>
	);
}
