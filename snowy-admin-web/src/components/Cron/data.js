export const getYear = () => {
	let v = []
	let y = new Date().getFullYear()
	for (let i = 0; i < 11; i++) {
		v.push(y + i)
	}
	return v
}
export const data = {
	second: ['0', '5', '15', '20', '25', '30', '35', '40', '45', '50', '55', '59'],
	minute: ['0', '5', '15', '20', '25', '30', '35', '40', '45', '50', '55', '59'],
	hour: [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23'
	],
	day: [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'30',
		'31'
	],
	month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	week: [
		{
			value: '1',
			label: '周日'
		},
		{
			value: '2',
			label: '周一'
		},
		{
			value: '3',
			label: '周二'
		},
		{
			value: '4',
			label: '周三'
		},
		{
			value: '5',
			label: '周四'
		},
		{
			value: '6',
			label: '周五'
		},
		{
			value: '7',
			label: '周六'
		}
	],
	year: getYear()
}
