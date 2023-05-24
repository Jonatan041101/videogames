/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				port: '',
				protocol: 'https',
				hostname: 'media.rawg.io',
			},
			{ port: '', protocol: 'https', hostname: 'res.cloudinary.com' },
			{ port: '', protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
		],
	},
};

module.exports = nextConfig;
