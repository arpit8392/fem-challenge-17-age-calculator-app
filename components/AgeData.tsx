type ResultProps = {
	results: calculatedAge
}

const AgeData = ({ results }: ResultProps) => {
	return (
		<div
			className='flex flex-col flex-wrap gap-1 text-4xl font-extrabold italic tracking-tight md:text-8xl'
			aria-live='polite'>
			<p className='flex flex-row gap-2'>
				<span className='text-purple'>{results?.years ?? '--'} </span>years
			</p>
			<p className='flex flex-row gap-2'>
				<span className='text-purple'>{results?.months ?? '--'} </span> months
			</p>
			<p className='flex flex-row gap-2'>
				<span className='text-purple'>{results?.days ?? '--'} </span> days
			</p>
		</div>
	)
}
export default AgeData
