type ResultProps = {
	results: calculatedAge
}

const AgeData = ({ results }: ResultProps) => {
	return (
		<div className='text-6xl font-extrabold italic tracking-tight md:text-8xl'>
			<p className='flex flex-row gap-x-2'>
				<span className='text-purple'>{results?.years ?? '--'} </span>years
			</p>
			<p className='flex flex-row gap-x-2'>
				<span className='text-purple'>{results?.months ?? '--'} </span> months
			</p>
			<p className='flex flex-row gap-x-2'>
				<span className='text-purple'>{results?.days ?? '--'} </span> days
			</p>
		</div>
	)
}
export default AgeData
