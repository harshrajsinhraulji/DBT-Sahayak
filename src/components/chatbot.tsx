
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, X, MessageSquare, User, HelpCircle, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { chatbotData } from "@/lib/chatbot-data";

interface Message {
  role: "user" | "bot";
  text: string;
  options?: { text: string; nextNodeId: string }[];
  isEnd?: boolean;
  isContact?: boolean;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { language } = useLanguage();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  };
  
  const resetChat = () => {
    const tree = chatbotData[language];
    const startNode = tree.start;
    setMessages([
      {
        role: "bot",
        text: startNode.text,
        options: startNode.options,
      },
    ]);
    setIsCompleted(false);
  };

  useEffect(() => {
    if (isOpen) {
      resetChat();
    }
  }, [isOpen, language]);

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);


  const handleOptionClick = (optionText: string, nextNodeId: string) => {
    const userMessage: Message = { role: "user", text: optionText };
    
    const tree = chatbotData[language];
    const nextNode = tree[nextNodeId];

    if (nextNode) {
      const botMessage: Message = {
        role: "bot",
        text: nextNode.text,
        options: nextNode.options,
        isEnd: nextNode.isEnd,
        isContact: nextNode.isContact,
      };
      setMessages((prev) => [...prev, userMessage, botMessage]);
      if(nextNode.isEnd || nextNode.isContact) {
        setIsCompleted(true);
      }
    }
  };

  const handleFeedback = (wasHelpful: boolean) => {
    let feedbackMessage: Message;
    if (wasHelpful) {
      feedbackMessage = { role: 'bot', text: 'Great! Glad I could help.' };
    } else {
      const contactNode = chatbotData[language].end_contact;
      feedbackMessage = { role: 'bot', text: contactNode.text, isContact: true };
    }
     setMessages((prev) => [...prev, feedbackMessage]);
     setIsCompleted(true);
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="lg" className="rounded-full w-16 h-16 shadow-lg">
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          <span className="sr-only">Toggle Chatbot</span>
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <Card className="w-80 h-[500px] flex flex-col shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <Bot className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-headline">Aadhaar Dost</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-y-auto">
              <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index}>
                        <div className={`flex items-start gap-2 ${message.role === 'user' ? 'justify-end' : ''}`}>
                          {message.role === 'bot' && <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
                          <div className={`rounded-lg px-3 py-2 text-sm ${
                              message.role === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            {message.text}
                          </div>
                          {message.role === 'user' && <User className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />}
                        </div>
                        
                        {index === messages.length - 1 && message.role === 'bot' && message.options && (
                          <div className="mt-2 flex flex-wrap gap-2 justify-start">
                            {message.options.map((opt, i) => (
                              <Button
                                key={i}
                                variant="outline"
                                size="sm"
                                onClick={() => handleOptionClick(opt.text, opt.nextNodeId)}
                              >
                                {opt.text}
                              </Button>
                            ))}
                          </div>
                        )}
                        
                        {index === messages.length - 1 && message.role === 'bot' && message.isEnd && (
                          <div className="mt-3 text-center border-t pt-3">
                            <p className="text-sm font-semibold mb-2">Was this helpful?</p>
                            <div className="flex justify-center gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleFeedback(true)}>Yes</Button>
                              <Button size="sm" variant="outline" onClick={() => handleFeedback(false)}>No</Button>
                            </div>
                          </div>
                        )}
                        
                        {index === messages.length - 1 && message.role === 'bot' && message.isContact && (
                          <div className="mt-2 text-center">
                              <a href="#contact" onClick={() => setIsOpen(false)}>
                                  <Button variant="secondary" size="sm">
                                      <Phone className="mr-2 h-4 w-4" /> Go to Contact Section
                                  </Button>
                              </a>
                          </div>
                        )}

                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
             <CardFooter className="border-t pt-4">
                <Button variant="ghost" size="sm" className="w-full" onClick={resetChat}>
                  <HelpCircle className="mr-2 h-4 w-4" /> Start Over
                </Button>
              </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
