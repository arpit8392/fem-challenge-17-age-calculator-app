import Image from 'next/image'

const Button = () => {
	return (
		<button type='submit'>
			<div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple hover:bg-offBlack md:h-24 md:w-24'>
				<Image
					src={'/images/icon-arrow.svg'}
					alt='Submit Button'
					height={24}
					width={24}
					className='block md:hidden'
				/>
				<Image
					src={'/images/icon-arrow.svg'}
					alt='Submit Button'
					height={44}
					width={44}
					className='hidden md:block'
				/>
			</div>
		</button>
	)
}
export default Button
