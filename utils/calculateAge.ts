import moment from 'moment'

const calculateAge = (
	day: number,
	month: number,
	year: number
): calculatedAge => {
	const birthDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD')

	if (!birthDate.isValid()) return null

	const currentDate = moment()

	const ageInYears = currentDate.diff(birthDate, 'years')

	currentDate.subtract(ageInYears, 'years')
	const ageInMonths = currentDate.diff(birthDate, 'months')

	currentDate.subtract(ageInMonths, 'months')
	const ageInDays = currentDate.diff(birthDate, 'days')

	return {
		days: ageInDays,
		months: ageInMonths,
		years: ageInYears,
	}
}

export default calculateAge
