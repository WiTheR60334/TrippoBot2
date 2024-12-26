export const maxDuration = 60;
export const dynamic = 'force-dynamic';

import ChatBotGold from "@/components/ChatBotGold/ChatBotGold"; // Adjust the path based on your structure
import ChatBotDiamond from "../../components/ChatBotDiamond/ChatBotDiamond";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ChatBotDiamond />
    </div>
  );
}
