import Exercise from '@/models/exercise';
import { connectToDB } from '@/utils/database';

export const POST = async (request) => {
	const { exerciseData } = await request.json();

	console.log(exerciseData);

	try {
		await connectToDB();
		const newExercise = new Exercise(exerciseData);

		await newExercise.save();

		return new Response(JSON.stringify(newExercise), { status: 201 });
	} catch (error) {
		console.log(error.message);
		return new Response('Failed to create a new exercise', { status: 500 });
	}
};
