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
		mode: 'all',
		reValidateMode: 'onBlur' || 'onSubmit',
	})

	return (
		<form
			onSubmit={handleSubmit(handler)}
			noValidate
			className='flex min-w-fit flex-col flex-wrap gap-8'>
			<fieldset className='grid grid-cols-3 gap-2 md:max-w-lg md:gap-8'>
				<legend className='sr-only'>Input Birth Date</legend>
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
					<p className='error' role='alert'>
						{Object.values(errors)[0]?.message}
					</p>
				)}
			</fieldset>

			<div className='relative flex items-center justify-center py-2 md:justify-end '>
				<hr className='w-full' />
				<div className='absolute md:relative md:left-auto md:top-auto md:translate-x-0 md:translate-y-0'>
					<Button />
				</div>
			</div>
		</form>
	)
}
export default Form
