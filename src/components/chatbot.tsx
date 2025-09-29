
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, X, MessageSquare, User, Send, LoaderCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Input } from "./ui/input";
import { chat } from "@/ai/flows/chat-flow";

interface Message {
  role: "user" | "model";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setMessages([
      {
        role: "model",
        content: "Hello! I am Aadhaar Dost. How can I help you with DBT, Aadhaar seeding, or scholarships?",
      },
    ]);
  };

  useEffect(() => {
    if (isOpen) {
      resetChat();
    }
  }, [isOpen]);

  useEffect(() => {
    resetChat();
  }, [language]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);


  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const stream = await chat({ history: newMessages, language });
      let fullResponse = "";

      // Add a placeholder for the bot's response
      setMessages(prev => [...prev, { role: 'model', content: '' }]);

      const reader = stream.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;

        // Update the last message (the bot's placeholder) with the streaming content
        setMessages(prev => {
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1] = { role: 'model', content: fullResponse };
          return updatedMessages;
        });
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', content: "Sorry, I'm having trouble connecting. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="lg" className="rounded-full w-16 h-16 shadow-lg">
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
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
                      <div key={index} className={`flex items-start gap-2.5 ${message.role === 'user' ? 'justify-end' : ''}`}>
                         {message.role === 'model' && <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />}
                          <div className={`rounded-lg px-3 py-2 text-sm max-w-[80%] break-words ${
                              message.role === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            {message.content}
                          </div>
                         {message.role === 'user' && <User className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />}
                      </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-2.5">
                            <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <div className="rounded-lg px-3 py-2 text-sm bg-muted flex items-center">
                                <LoaderCircle className="h-4 w-4 animate-spin"/>
                            </div>
                        </div>
                    )}
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
             <CardFooter className="border-t p-2">
                <div className="flex items-center w-full gap-2">
                    <Input 
                        placeholder="Ask a question..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={isLoading}
                    />
                    <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
                        <Send />
                    </Button>
                </div>
              </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
