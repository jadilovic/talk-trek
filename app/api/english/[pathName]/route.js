import { connectToDB } from '@/utils/database';
import Exercise from '@/models/exercise';

// get

export const GET = async (req, { params }) => {
	try {
		await connectToDB();
		const exercise = await Exercise.findOne({ pathName: params.pathName });
		if (!exercise) {
			return new Response('Failed to find exercise', { status: 404 });
		}
		return new Response(JSON.stringify(exercise), { status: 201 });
	} catch (error) {
		return new Response('Failed to fetch exercise!', { status: 500 });
	}
};

// // patch

// export const PATCH = async (req, { params }) => {
// 	const { prompt, tag } = await req.json();

// 	try {
// 		await connectToDB();
// 		const existingPrompt = await Prompt.findById(params.id);
// 		if (!existingPrompt) {
// 			return new Response('Failed to find prompt!', { status: 404 });
// 		}
// 		existingPrompt.prompt = prompt;
// 		existingPrompt.tag = tag;
// 		await existingPrompt.save();
// 		return new Response(JSON.stringify(existingPrompt), { status: 200 });
// 	} catch (error) {
// 		return new Response('Failed to fetch prompt!', { status: 500 });
// 	}
// };

// // deleted
// export const DELETE = async (req, { params }) => {
// 	try {
// 		await connectToDB();
// 		await Prompt.findByIdAndRemove(params.id);
// 		return new Response('Prompt was deleted', { status: 200 });
// 	} catch (error) {
// 		return new Response('Failed to delete prompt!', { status: 500 });
// 	}
// };
