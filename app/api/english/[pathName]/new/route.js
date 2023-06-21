import { connectToDB } from '@/utils/database';
import Exercise from '@/models/exercise';
import VerbTense from '@/models/verb-tense';

const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
	new Configuration({
		apiKey: process.env.API_KEY,
	})
);

export const GET = async (req, { params }) => {
	try {
		await connectToDB();
		const exercise = await Exercise.findOne({ pathName: params.pathName });
		if (!exercise) {
			return new Response('Failed to find exercise', { status: 404 });
		}

		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: exercise.aiPrompt }],
		});

		const messageContentArr =
			response.data.choices[0].message.content.split(' Verb tense used: ');
		const sentence = messageContentArr[0].replace('Sentence: ', '');
		const tense = messageContentArr[1];

		const newSentence = new VerbTense({
			// sentence: response.data.choices[0].message.content,
			// tense: 'from ai to do',
			sentence,
			tense,
		});

		await newSentence.save();
		exercise.exercises.push(newSentence._id);
		await exercise.save();

		return new Response(JSON.stringify(exercise), { status: 201 });
	} catch (error) {
		return new Response('Failed to fetch exercise!', { status: 500 });
	}
};
