"use client";
import { unstable_noStore as noStore } from 'next/cache';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

import ChatBotGold from "@/components/ChatBotGold/ChatBotGold"; // Adjust the path based on your structure
import ChatBotDiamond from "../../components/ChatBotDiamond/ChatBotDiamond";

export default function ChatPage() {
  noStore();
  return (
    <div className="min-h-screen bg-gray-100">
      <ChatBotDiamond />
    </div>
  );
}
