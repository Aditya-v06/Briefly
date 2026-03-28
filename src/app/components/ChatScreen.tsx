import { ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';

interface ChatScreenProps {
  onBack: () => void;
  topic: string;
}

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export function ChatScreen({ onBack, topic }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: "Hi! I'm here to help you understand the news about RBI interest rate increases. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');

  const quickButtons = [
    'Explain like I\'m 10',
    'Impact on India',
    'Compare with past'
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse: Message = {
        role: 'ai',
        content: 'This is a demo response. In production, this would call the backend API endpoint to get an AI-generated response based on your question.'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);
  };

  const handleQuickButton = (text: string) => {
    setInput(text);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h2 className="font-semibold">Chat about: {topic}</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}
            >
              {message.role === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-card border border-border'
                }`}
              >
                <p className="text-sm sm:text-base">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  👤
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleQuickButton(button)}
                className="px-3 py-1.5 text-sm bg-accent hover:bg-muted rounded-full transition-colors"
              >
                {button}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 px-4 py-3 bg-input-background rounded-lg outline-none focus:ring-2 focus:ring-blue-600 text-foreground"
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}