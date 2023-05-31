import { Schema, models, model } from 'mongoose';

const VerbTenseSchema = new Schema(
	{
		sentence: {
			type: String,
			required: [true, 'Sentence is required!'],
		},
		tense: {
			type: String,
			required: [true, 'Tense is required'],
		},
	},
	{ timestamps: true }
);

const VerbTense = models.VerbTense || model('VerbTense', VerbTenseSchema);

export default VerbTense;
