'use client'

import { useState } from 'react'
import AgeData from '@/components/AgeData'
import Form from '@/components/Form'
import calculateAge from '@/utils/calculateAge'
import { FormData } from '@/utils/validationSchema'

export default function Home() {
	const [age, setAge] = useState<calculatedAge>(null)

	const submitHandler = (data: FormData) => {
		const { day, month, year } = data
		const result = calculateAge(day, month, year)

		if (result) {
			setAge(result)
		}
	}

	return (
		<main className='flex flex-col gap-8 rounded-3xl rounded-br-[100px] bg-white px-6 py-12 shadow-2xl md:rounded-br-[200px] md:p-14'>
			<Form handler={submitHandler} />
			<AgeData results={age} />
		</main>
	)
}
