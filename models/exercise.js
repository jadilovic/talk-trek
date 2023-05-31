import { ObjectId } from 'mongodb';
import { Schema, models, model } from 'mongoose';

const ExerciseSchema = new Schema(
	{
		pathName: {
			type: String,
			required: [true, 'Path name is required!'],
			unique: true,
		},
		exerciseName: {
			type: String,
			required: [true, 'Exercise name is required'],
			unique: true,
		},
		exerciseDescription: {
			type: String,
			required: [true, 'Exercise description is required'],
			unique: true,
		},
		aiPrompt: {
			type: String,
			required: [true, 'AI Prompt is required'],
		},
		exercises: [ObjectId],
	},
	{ timestamps: true }
);

const Exercise = models.Exercise || model('Exercise', ExerciseSchema);

export default Exercise;
