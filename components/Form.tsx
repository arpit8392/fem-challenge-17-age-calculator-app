'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import InputField from './InputField'
import Button from './Button'
import { FormData, validationSchema } from '@/utils/validationSchema'

type Props = {
	handler: (data: FormData) => void
}

const Form = ({ handler }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(validationSchema),
	})

	return (
		<form
			onSubmit={handleSubmit(handler)}
			noValidate
			className='flex max-w-full flex-col gap-8'>
			<div className='grid grid-cols-3 gap-x-4 md:max-w-lg md:gap-x-8'>
				<InputField
					name='day'
					label='Day'
					type='text'
					register={register}
					error={errors.day}
					placeholder='DD'
				/>
				<InputField
					name='month'
					label='Month'
					type='text'
					register={register}
					error={errors.month}
					placeholder='MM'
				/>
				<InputField
					name='year'
					label='Year'
					type='text'
					register={register}
					error={errors.year}
					placeholder='YYYY'
				/>
				{Object.values(errors)[0]?.type === 'valid-date' && (
					<p className='error'>{Object.values(errors)[0]?.message}</p>
				)}
			</div>

			<div className='relative flex items-center py-4 md:py-8'>
				<hr className='w-full' />
				<div className='absolute right-1/2 md:right-0'>
					<Button />
				</div>
			</div>
		</form>
	)
}
export default Form
