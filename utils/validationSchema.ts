import * as yup from 'yup'
import moment from 'moment'

export type FormData = yup.InferType<typeof validationSchema>

const isDateValid = (
	day: number | undefined,
	month: number | undefined,
	year: number | undefined
) => {
	console.log(day, month, year)
	if (!day || !month || !year) {
		return true
	}
	const isValidDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').isValid()
	return isValidDate
}

export const validationSchema = yup
	.object()
	.shape({
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
		day: yup
			.number()
			.transform((value) => (isNaN(value) ? undefined : value))
			.required('This field is required')
			.typeError('Must be a valid day')
			.positive('Day must be a positive number')
			.integer('Day must be an integer')
			.min(1, 'Must be a valid day')
			.max(31, 'Must be a valid day'),
	})
	.required()
	.test('valid-date', 'Must be a valid date', function (value) {
		const { day, month, year } = value
		const result = isDateValid(day, month, year)
		console.log(result)
		return result
	})
