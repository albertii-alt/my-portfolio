import { useState } from 'react';
import { sendMessage as callClaude } from '../lib/claude';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);

  async function sendMessage() {
    const text = input.trim();
    if (!text || sessionCount >= 10) return;

    const userMessage: Message = { role: 'user', content: text };
    const updated = [...messages, userMessage];

    setMessages(updated);
    setInput('');
    setIsLoading(true);

    try {
      const reply = await callClaude(updated);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setSessionCount(prev => prev + 1);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Sorry, I couldn't reach Jay-ar's assistant right now. Try emailing albertoiidaro0@gmail.com directly." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, input, setInput, isLoading, sendMessage, sessionCount };
}
