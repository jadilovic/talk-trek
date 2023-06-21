import { connectToDB } from '@/utils/database';
import VerbTense from '@/models/verb-tense';

// get

export const GET = async (req, { params }) => {
	try {
		await connectToDB();
		const sentence = await VerbTense.findOne({ _id: params.sentenceId });
		if (!sentence) {
			return new Response('Failed to find exercise', { status: 404 });
		}
		return new Response(JSON.stringify(sentence), { status: 201 });
	} catch (error) {
		return new Response('Failed to fetch exercise!', { status: 500 });
	}
};
