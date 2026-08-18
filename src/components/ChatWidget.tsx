'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am Cortexa’s AI Assistant. How can I help you automate workflows, scale operations, or build AI applications today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || loading) return;

    const userMessage: Message = { role: 'user', content: query };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();

      if (data.reply) {
        setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([
          ...updatedMessages,
          { role: 'assistant', content: 'Sorry, I ran into an error. Please try again.' }
        ]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages([
        ...updatedMessages,
        { role: 'assistant', content: 'Network error. Please check your connection.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to render **bold** text as React <strong> elements
  const renderFormattedText = (text: string, isUser: boolean) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong
            key={i}
            style={{
              fontWeight: 700,
              color: isUser ? '#010101' : '#ffffff'
            }}
          >
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const suggestions = [
    "What services does Cortexa offer?",
    "How long does AI automation take?",
    "Can you build a custom RAG bot?"
  ];

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 99999 }}>
      
      {/* Floating Trigger Button with pulsing shadow and hover scaling */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#090b10',
            border: '2px solid rgba(16, 185, 129, 0.5)',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease'
          }}
          className="hover:scale-110 chat-floating-btn hover-card-glow"
          aria-label="Open AI Assistant"
        >
          <div style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            boxShadow: '0 0 12px #10b981'
          }} />
          <img src="/images/asset_53_6858f95b4522ba945ca91454_Logo-markv2.svg" alt="Cortexa AI" width={28} height={28} />
        </button>
      )}

      {/* Glassmorphism Chat Window */}
      {isOpen && (
        <div style={{
          width: '380px',
          maxWidth: 'calc(100vw - 40px)',
          height: '580px',
          maxHeight: 'calc(100vh - 100px)',
          backgroundColor: 'rgba(9, 11, 16, 0.82)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          position: 'relative'
        }}>
          
          {/* Ambient Glow at the top left */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />

          {/* Header */}
          <div style={{
            padding: '18px 24px',
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={18} color="#10b981" />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                  Cortexa AI
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>
                    Powered by Cortexa Brain
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease, color 0.2s'
              }}
              className="hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages List Area */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            position: 'relative',
            zIndex: 1
          }} className="scroll-expand--scroller">
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {msg.role === 'assistant' && (
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <img src="/images/asset_53_6858f95b4522ba945ca91454_Logo-markv2.svg" alt="Cortexa" width={16} height={16} />
                  </div>
                )}

                <div style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  backgroundColor: msg.role === 'user' ? '#10b981' : 'rgba(255, 255, 255, 0.04)',
                  border: msg.role === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                  color: msg.role === 'user' ? '#010101' : '#e2e8f0',
                  fontSize: '14px',
                  lineHeight: 1.5,
                  fontWeight: msg.role === 'user' ? 600 : 400,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                  {renderFormattedText(msg.content, msg.role === 'user')}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {loading && (
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img src="/images/asset_53_6858f95b4522ba945ca91454_Logo-markv2.svg" alt="Cortexa" width={16} height={16} />
                </div>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '12px 16px',
                  borderRadius: '18px 18px 18px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#94a3b8',
                  fontSize: '13px'
                }}>
                  <Loader2 size={16} className="animate-spin" color="#10b981" />
                  Formulating...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips (when 1 message) */}
          {messages.length === 1 && !loading && (
            <div style={{ padding: '0 20px 16px 20px', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Suggested Questions
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    style={{
                      textAlign: 'left',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '10px',
                      padding: '10px 14px',
                      fontSize: '12px',
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontWeight: 500
                    }}
                    className="hover:bg-white/10 hover:border-white/15"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <div style={{
            padding: '14px 16px',
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            position: 'relative',
            zIndex: 1
          }}>
            <input
              type="text"
              placeholder="Ask Cortexa AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '100px',
                padding: '11px 18px',
                fontSize: '13px',
                color: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              className="focus:border-emerald-500/50"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: input.trim() && !loading ? '#10b981' : 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s ease, transform 0.1s'
              }}
              className={input.trim() && !loading ? 'hover:scale-105 active:scale-95' : ''}
            >
              <Send size={16} color={input.trim() && !loading ? '#010101' : '#64748b'} />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
