"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, RotateCcw, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface MessageItem {
  id: string;
  sender: "me" | "them";
  text: string;
  timestamp: string;
}

export function IMessageChat() {
  const { personal, contact } = portfolioData;

  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: "msg-1",
      sender: "them",
      text: contact.messagePrompt,
      timestamp: "9:41 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [delivered, setDelivered] = useState(false);

  const sendResponse = (userText: string, customReply?: string) => {
    if (!userText.trim()) return;

    const userMsg: MessageItem = {
      id: `usr-${Date.now()}`,
      sender: "me",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setDelivered(true);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const replyMsg: MessageItem = {
        id: `rep-${Date.now()}`,
        sender: "them",
        text:
          customReply ||
          `Thanks for sending that! Feel free to email me directly at ${personal.email} or use the compose card below so we can keep in touch.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 1100);
  };

  const handlePromptClick = (prompt: { label: string; message: string; reply: string }) => {
    sendResponse(prompt.message, prompt.reply);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "msg-1",
        sender: "them",
        text: contact.messagePrompt,
        timestamp: "9:41 AM",
      },
    ]);
    setDelivered(false);
    setIsTyping(false);
  };

  return (
    <section
      aria-labelledby="imessage-heading"
      className="rounded-3xl border border-neutral-200/90 bg-white shadow-card overflow-hidden flex flex-col"
    >
      {/* iMessage Top Bar */}
      <div className="bg-neutral-100/90 border-b border-neutral-200/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300">
            <Image
              src="/photos/avatar.jpg"
              alt={`${personal.name} avatar`}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 id="imessage-heading" className="text-xs font-semibold text-neutral-900 font-display">
                {personal.name}
              </h2>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-[10px] text-neutral-500 font-mono">
              iMessage • Typically replies fast
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-neutral-500">
          <button
            type="button"
            onClick={resetChat}
            className="p-1.5 rounded-full hover:bg-neutral-200/70 text-neutral-500 hover:text-neutral-900 transition-colors"
            title="Reset conversation"
            aria-label="Reset chat"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Message Thread Body */}
      <div className="p-4 sm:p-6 space-y-4 min-h-[220px] max-h-[380px] overflow-y-auto bg-neutral-50/50">
        <div className="text-center">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
            Today 9:41 AM
          </span>
        </div>

        {messages.map((msg) => {
          const isMe = msg.sender === "me";

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isMe ? "items-end" : "items-start"} space-y-1 animate-in fade-in duration-200`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[75%] px-4 py-2.5 text-sm leading-relaxed ${
                  isMe
                    ? "bg-[#007AFF] text-white rounded-2xl rounded-br-sm shadow-sm"
                    : "bg-[#E9E9EB] text-neutral-900 rounded-2xl rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
              {isMe && delivered && (
                <span className="text-[10px] font-mono text-neutral-400 pr-1 flex items-center gap-1">
                  <Check className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                  <span>Delivered</span>
                </span>
              )}
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-1.5 px-4 py-3 bg-[#E9E9EB] rounded-2xl rounded-bl-sm w-16">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:0.4s]"></span>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-200/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[11px] font-mono text-neutral-400 shrink-0">Prompts:</span>
        {contact.quickPrompts.map((prompt) => (
          <button
            key={prompt.label}
            type="button"
            onClick={() => handlePromptClick(prompt)}
            className="text-xs font-medium text-neutral-700 bg-white border border-neutral-200/90 hover:border-neutral-400 hover:bg-neutral-100/70 px-3 py-1 rounded-full whitespace-nowrap transition-colors shrink-0 active:scale-95"
          >
            {prompt.label}
          </button>
        ))}
      </div>

      {/* Custom Text Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendResponse(inputValue);
        }}
        className="p-3 bg-white border-t border-neutral-200/80 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type an iMessage..."
          className="flex-1 px-4 py-2 rounded-full bg-neutral-100 text-sm text-neutral-900 placeholder-neutral-400 border border-neutral-200/80 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#007AFF] transition-all"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="w-9 h-9 rounded-full bg-[#007AFF] text-white flex items-center justify-center hover:bg-[#0062CC] disabled:opacity-40 disabled:hover:bg-[#007AFF] transition-colors shrink-0"
          aria-label="Send message"
        >
          <Send className="w-4 h-4 ml-0.5" aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
