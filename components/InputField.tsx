import { FieldError, FieldPath, UseFormRegister } from 'react-hook-form'

type InputFieldProps = {
	name: FieldPath<any>
	label: string
	type: string
	register: UseFormRegister<any>
	error: FieldError | undefined
	placeholder: string
}

const InputField = ({
	name,
	label,
	type,
	register,
	error,
	placeholder,
}: InputFieldProps) => {
	return (
		<div className='flex flex-col gap-1 '>
			<label
				htmlFor={name}
				className={`input-label ${
					error ? 'text-lightRed' : 'text-smokeyGrey'
				}`}>
				{label}
			</label>
			<input
				type={type}
				id={name}
				aria-invalid={error ? 'true' : 'false'}
				autoComplete={`bday-${name}`}
				{...register(name)}
				className={`input-field ${
					error
						? 'border-lightRed focus:ring-lightRed'
						: 'border-lightGrey focus:ring-purple'
				}`}
				placeholder={placeholder}
			/>
			{error && (
				<p role='alert' className='error'>
					{error.message}
				</p>
			)}
		</div>
	)
}
export default InputField
