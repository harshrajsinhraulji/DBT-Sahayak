
"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, LightbulbOff, CheckCircle, XCircle, RotateCw, Share2 } from "lucide-react";
import { Progress } from "../ui/progress";

type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

export function MythBustersSection() {
  const { content } = useLanguage();
  const { myths } = content.mythBusters;
  const totalMyths = myths.length;

  const [currentMythIndex, setCurrentMythIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('unanswered');
  const [showResult, setShowResult] = useState(false);

  const currentMyth = myths[currentMythIndex];

  const handleAnswer = (isMyth: boolean) => {
    if (answerStatus !== 'unanswered') return;

    if (isMyth) {
      setAnswerStatus('correct');
      setScore(score + 1);
    } else {
      setAnswerStatus('incorrect');
    }

    setTimeout(() => {
      if (currentMythIndex < totalMyths - 1) {
        setCurrentMythIndex(currentMythIndex + 1);
        setAnswerStatus('unanswered');
      } else {
        setShowResult(true);
      }
    }, 2500);
  };

  const resetQuiz = () => {
    setCurrentMythIndex(0);
    setScore(0);
    setAnswerStatus('unanswered');
    setShowResult(false);
  };
  
  const shareScore = () => {
    const text = `I scored ${score}/${totalMyths} on the DBT MythBusters Challenge! Test your knowledge on DBT Sahayak.`;
    navigator.share({ title: 'DBT MythBusters Challenge', text: text, url: window.location.href });
  }

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
          <Card className="min-h-[380px] flex flex-col justify-between shadow-lg">
            <CardHeader>
              <CardTitle className="text-center font-headline text-2xl">The DBT Challenge!</CardTitle>
              <Progress value={((showResult ? totalMyths : currentMythIndex) / totalMyths) * 100} className="w-full mt-2" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center text-center p-6">
              {showResult ? (
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-2xl font-bold font-headline">Quiz Complete!</h3>
                  <p className="text-lg text-muted-foreground">You Scored</p>
                  <p className="text-5xl font-bold text-primary font-headline">{score} / {totalMyths}</p>
                  <p className="text-muted-foreground mt-2">You're now a certified Myth Buster!</p>
                </div>
              ) : (
                <>
                  <blockquote className="text-xl font-semibold mb-6">
                    “{currentMyth.myth}”
                  </blockquote>
                  {answerStatus === 'unanswered' ? (
                     <p className="text-muted-foreground font-semibold">Is this a Myth or a Fact?</p>
                  ) : (
                    <Card className={`w-full ${answerStatus === 'correct' ? 'bg-green-100 dark:bg-green-900 border-green-500' : 'bg-red-100 dark:bg-red-900 border-red-500'}`}>
                      <CardHeader className="flex-row items-center gap-4 p-4">
                        {answerStatus === 'correct' ? 
                          <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0" /> : 
                          <XCircle className="h-8 w-8 text-red-500 flex-shrink-0" />}
                        <div>
                          <h4 className="font-bold text-left">{answerStatus === 'correct' ? "Correct! It's a Myth." : "That's a common misconception."}</h4>
                          <p className="text-sm text-muted-foreground mt-1 text-left">{currentMyth.fact}</p>
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
                    onClick={() => handleAnswer(true)}
                    disabled={answerStatus !== 'unanswered'}
                    className="rounded-full px-6"
                  >
                    <LightbulbOff /> Myth
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => handleAnswer(false)}
                    disabled={answerStatus !== 'unanswered'}
                    className="rounded-full px-6"
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
