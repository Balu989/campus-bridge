import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const dummyData = [
  { name: "Alice", points: 92 },
  { name: "Bob", points: 85 },
  { name: "Charlie", points: 78 },
];

function Leaderboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6 text-indigo-600">🏆 Leaderboard</h2>
          <div className="space-y-4">
            {dummyData.map((user, idx) => (
              <div
                key={idx}
                className="flex justify-between bg-white shadow-md p-4 rounded-lg"
              >
                <span className="font-semibold">{idx + 1}. {user.name}</span>
                <span className="text-blue-600 font-bold">{user.points} pts</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Leaderboard;
