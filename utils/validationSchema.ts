import * as yup from 'yup'

export type FormData = yup.InferType<typeof validationSchema>

export const validationSchema = yup
	.object()
	.shape({
		day: yup
			.number()
			.transform((value) => (isNaN(value) ? undefined : value))
			.required('This field is required')
			.typeError('Must be a valid day')
			.positive('Day must be a positive number')
			.integer('Day must be an integer')
			.min(1, 'Must be a valid day')
			.max(31, 'Must be a valid day'),
		month: yup
			.number()
			.transform((value) => (isNaN(value) ? undefined : value))
			.required('This field is required')
			.typeError('Must be a valid month')
			.positive('Month must be a positive number')
			.integer('Month must be an integer')
			.min(1, 'Must be a valid month')
			.max(12, 'Must be a valid month'),
		year: yup
			.number()
			.transform((value) => (isNaN(value) ? undefined : value))
			.required('This field is required')
			.typeError('Must be a valid year')
			.positive('Year must be a positive number')
			.integer('Year must be an integer')
			.min(1900, 'Year must be greater than or equal to 1900')
			.max(new Date().getFullYear(), 'Must be in the past'),
	})
	.required()
