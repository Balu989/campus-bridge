const badges = [
    { title: "Beginner Coder", icon: "🧑‍💻" },
    { title: "Completed First Course", icon: "🎓" },
    { title: "100 Points Earned", icon: "💯" },
  ];
  
  const BadgeDisplay = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {badges.map((badge, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow text-center">
            <div className="text-4xl">{badge.icon}</div>
            <p className="mt-2 font-semibold">{badge.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BadgeDisplay;
  