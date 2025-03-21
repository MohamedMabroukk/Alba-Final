"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"

const quizQuestions = [
  {
    question: "If someone is unresponsive and not breathing normally, what should you do first?",
    options: ["Check for injuries.", "Begin CPR.", "Give them water.", "Wait to see if they wake up."],
    correctAnswer: 1,
  },
  {
    question: "What is the correct way to treat a minor burn?",
    options: [
      "Apply butter or oil.",
      "Run cool water over the burn.",
      "Cover it with a tight bandage.",
      "Pop any blisters.",
    ],
    correctAnswer: 1,
  },
  {
    question: "When someone is choking and cannot speak, what action should you take?",
    options: [
      "Pat them on the back lightly.",
      "Perform abdominal thrusts (Heimlich maneuver).",
      "Give them a drink of water.",
      "Leave them alone to cough.",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you control severe bleeding?",
    options: [
      "Apply a loose bandage.",
      "Apply direct pressure to the wound.",
      "Wash the wound with soap and water.",
      "Elevate the injured area if possible, and apply direct pressure.",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of the recovery position?",
    options: [
      "To prevent further injury.",
      "To help someone regain consciousness quickly.",
      "To keep the airway open in an unresponsive person who is breathing.",
      "To stop bleeding.",
    ],
    correctAnswer: 2,
  },
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const pricingSectionRef = useRef<HTMLDivElement>(null)

  const handleOptionSelect = (index: number) => {
    if (!showAnswer) {
      setSelectedOption(index)
    }
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    setShowAnswer(true)
    if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    setSelectedOption(null)
    setShowAnswer(false)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowAnswer(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (quizCompleted) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
          <CardDescription>
            You scored {score} out of {quizQuestions.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 bg-red-50 rounded-lg border border-red-100 text-center">
            <h3 className="text-xl font-bold mb-4">Anyone can save lives!</h3>
            <p className="mb-6">
              Now you have basic first aid knowledge, but it's not enough. Do you want to become more confident in
              emergency situations? Join us – together we make the world safer!
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={scrollToPricing}>
              Learn more
            </Button>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline" onClick={resetQuiz}>
              Take the Quiz Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">First Aid Knowledge Quiz</CardTitle>
        <CardDescription>
          Question {currentQuestion + 1} of {quizQuestions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-lg font-medium mb-4">{question.question}</div>
        <RadioGroup value={selectedOption?.toString()} className="space-y-3">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 rounded-lg border p-3 ${
                showAnswer && index === question.correctAnswer
                  ? "bg-green-50 border-green-200"
                  : showAnswer && selectedOption === index && index !== question.correctAnswer
                    ? "bg-red-50 border-red-200"
                    : ""
              }`}
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                onClick={() => handleOptionSelect(index)}
                disabled={showAnswer}
              />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                {option}
              </Label>
              {showAnswer && index === question.correctAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
              {showAnswer && selectedOption === index && index !== question.correctAnswer && (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>

        {showAnswer && (
          <div
            className={`p-4 rounded-lg ${
              selectedOption === question.correctAnswer ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            {selectedOption === question.correctAnswer
              ? "Correct! Well done."
              : `Incorrect. The correct answer is: ${question.options[question.correctAnswer]}`}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
        </div>
        <div>
          {!showAnswer ? (
            <Button
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="bg-red-500 hover:bg-red-600 text-white">
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

