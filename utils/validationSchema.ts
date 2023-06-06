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
		day: yup
			.number()
			.typeError('Must be a valid day')
			.required('This field is required')
			.positive('Day must be a positive number')
			.integer('Day must be an integer')
			.min(1, 'Must be a valid day')
			.max(31, 'Must be a valid day'),
		month: yup
			.number()
			.typeError('Must be a valid month')
			.required('This field is required')
			.positive('Month must be a positive number')
			.integer('Month must be an integer')
			.min(1, 'Must be a valid month')
			.max(12, 'Must be a valid month'),
		year: yup
			.number()
			.typeError('Must be a valid year')
			.required('This field is required')
			.positive('Year must be a positive number')
			.integer('Year must be an integer')
			.min(1900, 'Year must be greater than or equal to 1900')
			.max(new Date().getFullYear(), 'Must be in the past'),
	})
	.required()
	.test('valid-date', 'Must be a valid date', function (value) {
		const { day, month, year } = value
		const result = isDateValid(day, month, year)
		return result
	})
