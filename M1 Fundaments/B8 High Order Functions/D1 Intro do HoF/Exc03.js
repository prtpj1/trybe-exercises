const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparator = (correctAnswers, studentAnswers) => {
	if (correctAnswers === studentAnswers) {
		return 1;
	}
	if (correctAnswers !== studentAnswers) {
		return -0.5;
	}
	return 0;
};

const counter = (correctAnswers, studentAnswers, comparator) => {
	let count = 0;

	for (let i = 0; i < correctAnswers.length; i += 1) {
		const totalPoints = comparator(correctAnswers[i], studentAnswers[i]);

		count += totalPoints;
	}
	return `Final result: ${count} points!`;
};

counter(RIGHT_ANSWERS, STUDENT_ANSWERS, comparator);