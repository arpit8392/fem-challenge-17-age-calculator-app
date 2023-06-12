import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
	title: 'Age Calculator App',
	description:
		'Frontend Mentor Challenge | Age Calculator App | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='bg-offWhite'>
			<body
				className={`${poppins.className} min-h-screen max-w-3xl px-4 py-20 md:mx-auto`}>
				{children}
			</body>
		</html>
	)
}
