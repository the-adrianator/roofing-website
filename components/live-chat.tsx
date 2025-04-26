"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can we help you with your roofing project today?", isUser: false },
  ])
  const [newMessage, setNewMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    setMessages([...messages, { text: newMessage, isUser: true }])
    setNewMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message. One of our roofing specialists will respond shortly. For immediate assistance, please call us at 020 1234 5678.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 left-6 z-40 rounded-full h-14 w-14 flex items-center justify-center shadow-lg",
          isOpen ? "bg-[#2C3338] hover:bg-gray-800" : "bg-[#456F8C] hover:bg-[#385a73]",
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 left-6 z-40 bg-white rounded-lg shadow-xl w-80 sm:w-96 transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none",
        )}
      >
        {/* Chat Header */}
        <div className="bg-[#456F8C] text-white p-4 rounded-t-lg">
          <h3 className="font-bold">Live Chat</h3>
          <p className="text-sm text-white/80">We typically reply within minutes</p>
        </div>

        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.isUser ? "bg-[#456F8C]/10 ml-auto rounded-tr-none" : "bg-gray-100 rounded-tl-none",
              )}
            >
              <p className={message.isUser ? "text-[#2C3338]" : "text-gray-700"}>{message.text}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              className="bg-[#456F8C] hover:bg-[#385a73]"
              disabled={newMessage.trim() === ""}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LiveChat
