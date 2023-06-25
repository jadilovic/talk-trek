const addRandomVerbTenseToAiPrompt = (aiPrompt) => {
	const min = 1;
	const maxVerbTense = 12;
	const randomNumber =
		Math.floor(Math.random() * (maxVerbTense - min + 1)) + min;
	let verbTense = '';

	switch (randomNumber) {
		case 1:
			verbTense = 'Present Simple';
			break;
		case 2:
			verbTense = 'Present Continuous';
			break;
		case 3:
			verbTense = 'Present Perfect';
			break;
		case 4:
			verbTense = 'Present Perfect Continuous';
			break;
		case 5:
			verbTense = 'Past simple';
			break;
		case 6:
			verbTense = 'Past Continuous';
			break;
		case 7:
			verbTense = 'Past Perfect';
			break;
		case 8:
			verbTense = 'Past Perfect Continuous';
			break;
		case 9:
			verbTense = 'Future Simple';
			break;
		case 10:
			verbTense = 'Future Perfect';
			break;
		case 11:
			verbTense = 'Future Continuous';
			break;
		case 12:
			verbTense = 'Future Perfect Continuous';
			break;
		default:
			verbTense = 'Present Simple';
			break;
	}

	const modifiedAiPrompt = aiPrompt.replace('xxxxx', verbTense);

	return modifiedAiPrompt;
};

export default addRandomVerbTenseToAiPrompt;
