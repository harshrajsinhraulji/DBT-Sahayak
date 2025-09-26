"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, LoaderCircle, Send, X, MessageSquare, User } from "lucide-react";
import { aadhaarDostChatbot } from "@/ai";
import { useLanguage } from "@/hooks/use-language";
import type { Language } from "@/lib/types";

interface Message {
  role: "user" | "bot";
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const initialMessage: Record<Language, string> = {
    en: "Hello! I am Aadhaar Dost, your AI assistant. How can I help you today with DBT, Aadhaar seeding, or scholarships?",
    hi: "नमस्ते! मैं आधार दोस्त हूँ, आपका एआई सहायक। मैं आज डीबीटी, आधार सीडिंग, या छात्रवृत्ति के साथ आपकी कैसे मदद कर सकता हूँ?",
    gu: "નમસ્તે! હું આધાર દોસ્ત છું, તમારો એઆઈ સહાયક। હું આજે ડીબીટી, આધાર સીડીંગ, અથવા શિષ્યવૃત્તિ સાથે તમારી કેવી રીતે મદદ કરી શકું?",
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "bot", text: initialMessage[language] }]);
    }
  }, [isOpen, messages.length, language, initialMessage]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollArea_viewport.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }],
        }));

      const response = await aadhaarDostChatbot({
        history,
        query: input,
        language: language,
      });

      const botMessage: Message = { role: "bot", text: response.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        role: "bot",
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

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
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex items-start gap-2 ${message.role === 'user' ? 'justify-end' : ''}`}>
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
                  ))}
                   {isLoading && (
                    <div className="flex items-start gap-2">
                      <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div className="rounded-lg px-3 py-2 text-sm bg-muted">
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  autoComplete="off"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
