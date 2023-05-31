import { connectToDB } from '@/utils/database';
import Exercise from '@/models/exercise';

export const GET = async (req, res) => {
	try {
		await connectToDB();
		const exercises = await Exercise.find({});
		return new Response(JSON.stringify(exercises), { status: 201 });
	} catch (error) {
		return new Response('Failed to fetch all exercises!', { status: 500 });
	}
};
