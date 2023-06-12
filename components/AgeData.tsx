type ResultProps = {
	results: calculatedAge
}

const AgeData = ({ results }: ResultProps) => {
	const years = results?.years ?? '--'
	const months = results?.months ?? '--'
	const days = results?.days ?? '--'
	return (
		<div
			className='flex flex-col gap-1 text-6xl font-extrabold italic tracking-tight md:text-8xl'
			aria-live='polite'>
			<p className='flex flex-row flex-wrap gap-2'>
				<span className='text-purple'>{years} </span>years
			</p>
			<p className='flex flex-row flex-wrap gap-2 '>
				<span className='text-purple'>{months} </span> months
			</p>
			<p className='flex flex-row flex-wrap gap-2'>
				<span className='text-purple'>{days} </span> days
			</p>
		</div>
	)
}
export default AgeData
