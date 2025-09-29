
"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, LightbulbOff, CheckCircle, XCircle, RotateCw, Share2, PartyPopper } from "lucide-react";
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

// Sound URLs from the public directory
const SOUND_URLS = {
  correct: "/sounds/correct.mp3",
  incorrect: "/sounds/incorrect.mp3",
  complete: "/sounds/complete.mp3"
};

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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = useCallback((type: 'correct' | 'incorrect' | 'complete') => {
    if (audioRef.current) {
        audioRef.current.src = SOUND_URLS[type];
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
  }, []);

  const resetQuiz = useCallback(() => {
    const totalAvailableQuestions = allQuestions.length;
    const questionsToTake = Math.min(QUIZ_LENGTH, totalAvailableQuestions);
    setQuizQuestions(shuffleArray(allQuestions).slice(0, questionsToTake));
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswerStatus('unanswered');
    setShowResult(false);
  }, [allQuestions]);

  useEffect(() => {
    resetQuiz();
    // Initialize audio element on the client
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
    }
  }, [resetQuiz]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;

  const handleAnswer = (userAnswer: QuestionType) => {
    if (answerStatus !== 'unanswered' || !currentQuestion) return;

    if (userAnswer === currentQuestion.type) {
      setAnswerStatus('correct');
      setScore(score + 1);
      playSound('correct');
    } else {
      setAnswerStatus('incorrect');
      playSound('incorrect');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswerStatus('unanswered');
    } else {
      setShowResult(true);
      playSound('complete');
    }
  };
  
  const shareScore = async () => {
    const text = `I scored ${score}/${totalQuestions} on the DBT Myth Busters Challenge! Test your knowledge on DBT Sahayak.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'DBT Myth Busters Challenge', text: text, url: window.location.href });
      } catch (error) {
        console.error('Sharing failed:', error);
        // This catch block prevents the app from crashing if the user cancels the share or if the API is blocked.
      }
    }
  }
  
  if(!currentQuestion) {
      return null;
  }

  const getCardClass = () => {
      if(showResult) return 'bg-background';
      switch(answerStatus) {
          case 'correct': return 'bg-green-500/10 dark:bg-green-900/30';
          case 'incorrect': return 'bg-red-500/10 dark:bg-red-900/30';
          default: return 'bg-background';
      }
  }
  
  const progressPercentage = (showResult ? totalQuestions : currentQuestionIndex) / totalQuestions * 100;

  return (
    <section id="myths" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
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
          <Card className={cn("min-h-[450px] flex flex-col justify-between shadow-lg transition-colors duration-500", getCardClass())}>
            <CardHeader>
              <CardTitle className="text-center font-headline text-2xl">{content.mythBusters.title}</CardTitle>
              <div className="flex items-center gap-4 pt-2">
                <Progress value={progressPercentage} className="w-full" />
                <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">{currentQuestionIndex + 1} / {totalQuestions}</span>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col items-center justify-center text-center p-6">
              {showResult ? (
                <div className="flex flex-col items-center gap-4 animate-in fade-in duration-500">
                  <PartyPopper className="h-20 w-20 text-primary" />
                  <h3 className="text-3xl font-bold font-headline">Quiz Complete!</h3>
                  <p className="text-xl text-muted-foreground">You Scored</p>
                  <p className="text-6xl font-bold text-primary font-headline">{score} / {totalQuestions}</p>
                  <p className="text-muted-foreground mt-2">{content.mythBusters.resultText}</p>
                </div>
              ) : (
                <>
                  <blockquote className="text-xl md:text-2xl font-semibold mb-8">
                    “{currentQuestion.statement}”
                  </blockquote>
                  
                  {answerStatus === 'unanswered' ? (
                     <p className="text-muted-foreground font-semibold">Is this a Myth or a Fact?</p>
                  ) : (
                    <div className="w-full space-y-4">
                      <Card className={cn(
                        "w-full animate-in fade-in zoom-in-95 duration-500",
                        answerStatus === 'correct' ? 'bg-green-100 dark:bg-green-900/50 border-green-500' : 'bg-red-100 dark:bg-red-900/50 border-red-500'
                      )}>
                        <CardHeader className="flex-row items-center gap-4 p-4">
                          {answerStatus === 'correct' ? 
                            <CheckCircle className="h-10 w-10 text-green-500 flex-shrink-0" /> : 
                            <XCircle className="h-10 w-10 text-red-500 flex-shrink-0" />}
                          <div>
                            <h4 className="font-bold text-left text-lg">{answerStatus === 'correct' ? "Correct!" : "That's Incorrect."} It's a {currentQuestion.type}.</h4>
                            <p className="text-sm text-muted-foreground mt-1 text-left">{currentQuestion.explanation}</p>
                          </div>
                        </CardHeader>
                      </Card>
                      <Button onClick={handleNextQuestion} className="w-full" size="lg">
                        {currentQuestionIndex < totalQuestions - 1 ? "Next Question" : "Finish Quiz"}
                      </Button>
                    </div>
                  )}
                </>
              )}
            </CardContent>

            <CardFooter className="flex justify-center gap-4 p-6">
              {showResult ? (
                <div className="flex gap-4">
                    <Button onClick={resetQuiz} variant="outline" size="lg"><RotateCw className="mr-2" /> Play Again</Button>
                    <Button onClick={shareScore} size="lg"><Share2 className="mr-2" /> Share Score</Button>
                </div>
              ) : (
                 <div className="flex justify-center gap-4 p-6">
                    <Button
                        size="lg"
                        variant="destructive"
                        onClick={() => handleAnswer('myth')}
                        disabled={answerStatus !== 'unanswered'}
                        className="rounded-full px-8 py-6 text-lg"
                    >
                        <LightbulbOff className="mr-2" /> Myth
                    </Button>
                    <Button
                        size="lg"
                        onClick={() => handleAnswer('fact')}
                        disabled={answerStatus !== 'unanswered'}
                        className="rounded-full px-8 py-6 text-lg bg-green-600 hover:bg-green-700"
                    >
                        <Lightbulb className="mr-2" /> Fact
                    </Button>
                 </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

