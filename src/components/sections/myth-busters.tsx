
"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, LightbulbOff, CheckCircle, XCircle, RotateCw, Share2 } from "lucide-react";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

type QuestionType = 'myth' | 'fact';

interface Question {
  statement: string;
  explanation: string;
  type: QuestionType;
}

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const QUIZ_LENGTH = 8;

export function MythBustersSection() {
  const { content } = useLanguage();
  const allQuestions: Question[] = useMemo(() => [
    ...content.mythBusters.myths.map(m => ({ statement: m.myth, explanation: m.fact, type: 'myth' as QuestionType })),
    ...content.mythBusters.facts.map(f => ({ statement: f.fact, explanation: f.explanation, type: 'fact' as QuestionType }))
  ], [content]);

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('unanswered');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    resetQuiz();
  }, [allQuestions]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleAnswer = (userAnswer: QuestionType) => {
    if (answerStatus !== 'unanswered') return;

    if (userAnswer === currentQuestion.type) {
      setAnswerStatus('correct');
      setScore(score + 1);
    } else {
      setAnswerStatus('incorrect');
    }

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerStatus('unanswered');
      } else {
        setShowResult(true);
      }
    }, 3000);
  };

  const resetQuiz = () => {
    const totalAvailableQuestions = allQuestions.length;
    const questionsToTake = Math.min(QUIZ_LENGTH, totalAvailableQuestions);
    setQuizQuestions(shuffleArray(allQuestions).slice(0, questionsToTake));
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerStatus('unanswered');
    setShowResult(false);
  };
  
  const shareScore = () => {
    const text = `I scored ${score}/${totalQuestions} on the DBT Myth Busters Challenge! Test your knowledge on DBT Sahayak.`;
    if (navigator.share) {
      navigator.share({ title: 'DBT Myth Busters Challenge', text: text, url: window.location.href });
    }
  }
  
  if(!currentQuestion) {
      return null;
  }

  return (
    <section id="myths" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              {content.mythBusters.title}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.mythBusters.subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-12">
          <Card className="min-h-[420px] flex flex-col justify-between shadow-lg">
            <CardHeader>
              <CardTitle className="text-center font-headline text-2xl">{content.mythBusters.title}</CardTitle>
              <Progress value={((showResult ? totalQuestions : currentQuestionIndex) / totalQuestions) * 100} className="w-full mt-2" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center text-center p-6">
              {showResult ? (
                <div className="flex flex-col items-center gap-4 animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold font-headline">Quiz Complete!</h3>
                  <p className="text-lg text-muted-foreground">You Scored</p>
                  <p className="text-5xl font-bold text-primary font-headline">{score} / {totalQuestions}</p>
                  <p className="text-muted-foreground mt-2">{content.mythBusters.resultText}</p>
                </div>
              ) : (
                <>
                  <blockquote className="text-xl font-semibold mb-6">
                    “{currentQuestion.statement}”
                  </blockquote>
                  {answerStatus === 'unanswered' ? (
                     <p className="text-muted-foreground font-semibold">Is this a Myth or a Fact?</p>
                  ) : (
                    <Card className={cn(
                      "w-full animate-in fade-in duration-500",
                      answerStatus === 'correct' ? 'bg-green-100 dark:bg-green-900 border-green-500' : 'bg-red-100 dark:bg-red-900 border-red-500'
                    )}>
                      <CardHeader className="flex-row items-center gap-4 p-4">
                        {answerStatus === 'correct' ? 
                          <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" /> : 
                          <XCircle className="h-8 w-8 text-red-500 flex-shrink-0" />}
                        <div>
                          <h4 className="font-bold text-left">{answerStatus === 'correct' ? "Correct!" : "That's Incorrect."} It's a {currentQuestion.type}.</h4>
                          <p className="text-sm text-muted-foreground mt-1 text-left">{currentQuestion.explanation}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  )}
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-center gap-4 p-6">
              {showResult ? (
                <>
                    <Button onClick={resetQuiz} variant="outline"><RotateCw /> Play Again</Button>
                    <Button onClick={shareScore}><Share2 /> Share Score</Button>
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    variant="destructive"
                    onClick={() => handleAnswer('myth')}
                    disabled={answerStatus !== 'unanswered'}
                    className="rounded-full px-6"
                  >
                    <LightbulbOff /> Myth
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => handleAnswer('fact')}
                    disabled={answerStatus !== 'unanswered'}
                    className="rounded-full px-6 bg-green-600 hover:bg-green-700"
                  >
                    <Lightbulb /> Fact
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

    