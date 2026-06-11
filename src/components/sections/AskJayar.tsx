import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../../hooks/useChat';

const SUGGESTIONS = [
  'What projects have you built?',
  'Can you build a POS for my business?',
  'What is your tech stack?',
  'Are you available for freelance?',
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-bg-elevated rounded-lg w-fit">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

export default function AskJayar() {
  const { messages, input, setInput, isLoading, sendMessage, sessionCount } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <section id="ask" className="pt-10 pb-20 px-6">
      <div className="mx-auto" style={{ maxWidth: '680px' }}>
        {/* Header */}
        <p className="text-text-muted font-display text-sm uppercase tracking-widest mb-2">
          Ask Jay-ar
        </p>
        <p className="text-text-muted text-sm mb-8">
          Powered by Gemini · Knows my work, stack, and availability
        </p>

        {/* Chat history */}
        <div className="min-h-[300px] bg-bg-surface border border-border rounded-lg p-4 overflow-y-auto flex flex-col gap-3 mb-3">
          {messages.length === 0 && !isLoading ? (
            <div className="flex flex-col gap-3 m-auto w-full">
              <p className="text-text-muted text-sm text-center mb-2">Ask me anything about Jay-ar</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="text-sm text-text-secondary border border-border rounded-full px-4 py-1.5 hover:border-border-active hover:text-text-primary transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <span className="font-display text-accent text-xs">J</span>
                    </div>
                  )}
                  <div
                    className={`rounded-lg px-4 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent text-bg-base max-w-xs'
                        : 'bg-bg-elevated text-text-primary max-w-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <span className="font-display text-accent text-xs">J</span>
                  </div>
                  <TypingIndicator />
                </div>
              )}
            </>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            className="flex-1 bg-bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-border-active transition-colors"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading || sessionCount >= 10}
            className="bg-accent text-bg-base px-4 py-2.5 rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
        {sessionCount >= 10 && (
          <p className="text-text-muted text-xs mt-2">
            Session limit reached. Refresh to start a new conversation.
          </p>
        )}
      </div>
    </section>
  );
}
