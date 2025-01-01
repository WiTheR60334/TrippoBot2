import PricingComponent from "@/components/PricingComponent/PrincingComponent"; // Adjust the path based on your structure

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <PricingComponent />
    </div>
  );
}