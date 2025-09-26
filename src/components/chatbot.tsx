"use client";

import { useState, useRef, useEffect, useTransition } from 'react';
import { Bot, Send, User, X, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { aadhaarDostChatbot } from '@/ai/flows/aadhaar-dost-chatbot';
import { useLanguage } from '@/hooks/use-language';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const { content } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: content.chatbot.initialMessage,
    },
  ]);

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  
  useEffect(() => {
    setMessages([{ role: 'assistant', content: content.chatbot.initialMessage }]);
  }, [content.chatbot.initialMessage]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    const query = input;
    setInput('');

    startTransition(async () => {
      try {
        const result = await aadhaarDostChatbot({ query });
        setMessages((prev) => [...prev, { role: 'assistant', content: result.response }]);
      } catch (error) {
        console.error("Chatbot error:", error);
        setMessages((prev) => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please try again." }]);
      }
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm">
          <Card className="flex flex-col h-[60vh] shadow-2xl rounded-2xl border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-headline text-primary">{content.chatbot.title}</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="md:hidden">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <ScrollArea className="h-full" ref={scrollAreaRef}>
                <div className="p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <Bot size={20} />
                      </div>
                    )}
                    <div
                      className={cn(
                        'p-3 rounded-lg max-w-[80%]',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                     {message.role === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                        <User size={20} />
                      </div>
                    )}
                  </div>
                ))}
                {isPending && (
                  <div className="flex items-start gap-3 justify-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Bot size={20} />
                    </div>
                    <div className="p-3 rounded-lg bg-muted text-muted-foreground">
                      <LoaderCircle className="animate-spin" />
                    </div>
                  </div>
                )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={content.chatbot.placeholder}
                  disabled={isPending}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
                  {isPending ? <LoaderCircle className="animate-spin"/> : <Send />}
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
