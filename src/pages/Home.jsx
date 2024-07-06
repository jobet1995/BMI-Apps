import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [healthTip, setHealthTip] = useState(
    "Stay hydrated! Drink at least 8 glasses of water per day.",
  );

  useEffect(() => {
    const tips = [
      "Stay hydrated! Drink at least 8 glasses of water per day.",
      "Get at least 30 minutes of exercise daily.",
      "Eat a balanced diet with plenty of fruits and vegetables.",
      "Practice mindfulness and meditation.",
      "Take breaks and relaxation to recharge your batteries.",
      "Stay in touch with your loved ones and friends.",
      "Ensure you get enough sleep to support your physical and mental health.",
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setHealthTip(randomTip);
  }, []);
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 py-10 text-center">
      <h1 className="text-3xl font-bold text-gray-800">BMI Calculator App</h1>
    </div>
  );
}

export default Home;
