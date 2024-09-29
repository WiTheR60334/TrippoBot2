import HomePage from "@/components/HomePage"; // Adjust the path based on your structure
import Footer from "@/components/footer"; // Adjust the path based on your structure

export default function ChatPage() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <HomePage />
    </div>
    <div style={{marginTop: "5rem", borderTop: "1px solid #000"}}>
        <Footer />
      </div>
    </>
  );
}
