import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import rabbit1 from './rabbit1.png';
import rabbit2 from './rabbit2.jpg';
import rabbit3 from './rabbit3.jpg';
import rabbit4 from './rabbit4.png';
import rabbit5 from './rabbit5.jpg';




export default function App() {
	const questions = [
		{
			questionText: 'What animal is associated with the moon in many cultures?',
			answerOptions: [
				{ answerText: 'Cats', isCorrect: false },
				{ answerText: 'Dogs', isCorrect: false },
				{ answerText: 'Turtles', isCorrect: true },
				{ answerText: 'Rabbits', isCorrect: false },
			],
		},
		{
			questionText: 'Well done! Are you ready for another question?',
			questionPic: <img src={rabbit1} />,
			answerOptions: [
				{ answerText: 'Next', isCorrect: true },
			],
		},
		{
			questionText: 'What is the largest species of hare?',
			answerOptions: [
				{ answerText: 'Snowshoe Hare', isCorrect: false },
				{ answerText: 'Arctic Hare', isCorrect: false },
				{ answerText: 'American Desert Hare', isCorrect: false },
				{ answerText: 'European Brown Hare', isCorrect: true },
			],
		},
		{
			questionText: 'Well done! Are you ready for another question?',
			questionPic: <img src={rabbit2} />,
			answerOptions: [
				{ answerText: 'Next', isCorrect: true },
			],
		},
		{
			questionText: 'How many kits can a rabbit have per litter?',
			answerOptions: [
				{ answerText: '1-14', isCorrect: true },
				{ answerText: '2-6', isCorrect: false },
				{ answerText: '3-4', isCorrect: false },
				{ answerText: '4-8', isCorrect: false },
			],
		},
		{
			questionText: 'Well done! Are you ready for another question?',
			questionPic: <img src={rabbit3} />,
			answerOptions: [
				{ answerText: 'Next', isCorrect: true },
			],
		},
		{
			questionText: 'What is the smallest species of wild rabbit?',
			answerOptions: [
				{ answerText: 'Venezuelan lowland rabbit', isCorrect: false },
				{ answerText: 'Swamp Rabbit', isCorrect: false },
				{ answerText: 'Eastern Cottontail', isCorrect: false },
				{ answerText: 'Pygmy Rabbit', isCorrect: true },
			],
		},
		{
			questionText: 'Well done! Are you ready for another question?',
			questionPic: <img src={rabbit4} />,
			answerOptions: [
				{ answerText: 'Next', isCorrect: true },
			],
		},
		{
			questionText: 'What is the most common domestic rabbit breed?',
			answerOptions: [
				{ answerText: 'Mini Lop', isCorrect: false },
				{ answerText: 'Holland Lop', isCorrect: true },
				{ answerText: 'Lionhead', isCorrect: false },
				{ answerText: 'Californian', isCorrect: false },
			],
		},
		{
			questionText: 'Well done! Are you ready for the results?',
			questionPic: <img src={rabbit5} />,
			answerOptions: [
				{ answerText: 'Next', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score-5} out of {questions.length-5}!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question Quiz!</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div><br />
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div><br />
						<div className='question-pic'>{questions[currentQuestion].questionPic}</div>
				</>
			)}
		</div>
	);
}
