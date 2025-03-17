
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2 } from 'lucide-react';
import { useAIAssistant } from '@/hooks/use-synkris-brain';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AIChatAssistant = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage, isLoading } = useAIAssistant();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Sample suggested questions
  const suggestedQuestions = [
    "How much inventory do I need for 300 orders today?",
    "What are my most profitable menu items?",
    "Suggest an ingredient supplier with the lowest prices.",
    "Is there a trend in customer demand I should know about?",
    "When are my kitchen staff most productive?"
  ];
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-[600px] flex flex-col">
      <div className="p-4 border-b flex items-center bg-synkris-green/5">
        <Bot className="h-6 w-6 text-synkris-green mr-2" />
        <h3 className="font-semibold">Synkris Brain AI Assistant</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="space-y-4">
            <div className="bg-synkris-green/5 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">
                👋 Hello! I'm your Synkris Brain assistant. How can I help optimize your kitchen operations today?
              </p>
            </div>
            <div className="text-sm text-gray-500 mt-6 mb-2">Try asking me:</div>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="block text-left text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 w-full"
                  onClick={() => sendMessage(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.role === 'user' 
                      ? 'bg-synkris-green text-white' 
                      : 'bg-synkris-green/5'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="p-3 rounded-lg max-w-[80%] bg-gray-100 dark:bg-gray-700">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          type="text"
          placeholder="Ask me anything about your kitchen..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isLoading || !inputValue.trim()}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    </div>
  );
};

export default AIChatAssistant;
