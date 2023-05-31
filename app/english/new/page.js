'use client';

import React, { useState } from 'react';

const ExerciseFormComponent = () => {
	const [formData, setFormData] = useState({
		pathName: '',
		exerciseName: '',
		exerciseDescription: '',
		aiPrompt: '',
	});
	const [submitting, setSubmitting] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.values(formData).every((item) => item !== '')) {
			console.log('all values');
			setSubmitting(true);
			try {
				const response = await fetch('/api/english/new', {
					method: 'POST',
					body: JSON.stringify({
						exerciseData: formData,
					}),
				});
				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.log(error);
			} finally {
				setSubmitting(false);
			}
		} else {
			console.log('missing values');
		}
		// Handle form submission, such as sending data to an API
		console.log(formData);
		// Reset the form after submission
		setFormData({
			pathName: '',
			exerciseName: '',
			exerciseDescription: '',
			aiPrompt: '',
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Path Name:
					<input
						type="text"
						name="pathName"
						value={formData.pathName}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Exercise Name:
					<input
						type="text"
						name="exerciseName"
						value={formData.exerciseName}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<label>
					Exercise Description:
					<input
						type="text"
						name="exerciseDescription"
						value={formData.exerciseDescription}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<label>
					AI Prompt:
					<input
						type="text"
						name="aiPrompt"
						value={formData.aiPrompt}
						onChange={handleInputChange}
					/>
				</label>
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default ExerciseFormComponent;
