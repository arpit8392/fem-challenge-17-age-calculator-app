import Image from 'next/image'
import ArrowIcon from '@/public/images/icon-arrow.svg'

const Button = () => {
	return (
		<button type='submit'>
			<div className='flex h-16 w-16 items-center justify-center rounded-full bg-purple hover:bg-offBlack md:h-24 md:w-24'>
				<Image src={ArrowIcon} alt='Calculate' className='h-6 w-auto md:h-11' />
			</div>
		</button>
	)
}
export default Button
