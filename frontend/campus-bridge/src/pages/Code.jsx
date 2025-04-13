// /pages/Code.jsx
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CodeEditor from "../components/code/CodeEditor";
import AIAssistant from "../components/code/AIAssistant";
import GroupRoom from "../components/code/GroupRoom"; // 👈 Add this

function Code() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">💻 Code Playground</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 2/3 Editor + Group Room, 1/3 AI assistant */}
            <div className="lg:col-span-2 space-y-6">
              <CodeEditor />
              <GroupRoom /> {/* 👈 Group Code Room inserted here */}
            </div>
            <AIAssistant />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Code;
