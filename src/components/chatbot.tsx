
"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, User, Sparkles, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Logo } from "./logo";
import { chatbotData, type ChatNode } from "@/lib/chatbot-data";
import Link from "next/link";

interface Message {
  role: "user" | "model";
  text: string;
  options?: { text: string; nextNodeId: string }[];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");
  const { language } = useLanguage();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
      }
    }, 100);
  };
  
  const resetChat = () => {
    const chatTree = chatbotData[language];
    const startNode = chatTree.start;
    setMessages([{ role: "model", text: startNode.text, options: startNode.options }]);
    setCurrentNodeId("start");
  };

  useEffect(() => {
    if (isOpen) {
      resetChat();
    }
  }, [isOpen]);

  // Reset chat when language changes
  useEffect(() => {
    resetChat();
  }, [language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (nextNodeId: string, optionText: string) => {
    // Add user's choice to messages
    setMessages(prev => [...prev, { role: "user", text: optionText }]);

    // Find the next node in the chat tree
    const chatTree = chatbotData[language];
    const nextNode: ChatNode | undefined = chatTree[nextNodeId];

    if (nextNode) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "model", text: nextNode.text, options: nextNode.options }]);
        setCurrentNodeId(nextNodeId);
        
        // If the next node is an end node without options, offer to restart
        if (nextNode.isEnd && !nextNode.options) {
             setTimeout(() => {
                const finalNode = chatTree['end_contact'];
                setMessages(prev => [...prev, { role: "model", text: finalNode.text, options: [{text: "Start Over", nextNodeId: 'start'}] }]);
             }, 1500);
        }

      }, 500);
    }
  };


  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="lg" className="rounded-full w-16 h-16 shadow-lg">
          {isOpen ? <X className="h-8 w-8" /> : <BrainCircuit className="h-8 w-8" />}
          <span className="sr-only">Toggle Chatbot</span>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <Card className="w-80 h-[500px] flex flex-col shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-headline">Aadhaar Dost</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-y-auto">
              <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <Fragment key={index}>
                        <div className={`flex items-start gap-2.5 ${message.role === 'user' ? 'justify-end' : ''}`}>
                          {message.role === 'model' && <Logo className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
                            <div className={`rounded-lg px-3 py-2 text-sm max-w-[80%] break-words ${
                                message.role === 'user'
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted'
                              }`}
                            >
                              {message.text}
                            </div>
                          {message.role === 'user' && <User className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />}
                        </div>
                        
                        {message.role === 'model' && message.options && messages.length - 1 === index && (
                          <div className="flex flex-col items-start gap-2 pt-2 pl-8">
                               {message.options.map((option, i) => (
                                <Button
                                    key={i}
                                    variant="outline"
                                    size="sm"
                                    className="text-xs h-auto py-1"
                                    onClick={() => option.nextNodeId === 'start' ? resetChat() : handleOptionClick(option.nextNodeId, option.text)}
                                >
                                    {option.text}
                                </Button>
                            ))}
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t p-2 text-center text-xs text-muted-foreground">
                <p>This is a rule-based assistant. For complex queries, please check our <Link href="/#faq" className="underline" onClick={() => setIsOpen(false)}>FAQ</Link> or <Link href="/#contact" className="underline" onClick={() => setIsOpen(false)}>contact</Link> section.</p>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
