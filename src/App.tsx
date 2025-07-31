import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import AchievementCard from './components/AchievementCard';
import WhyHireMe from './components/WhyHireMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <Hero />
          <AchievementCard />
          <WhyHireMe />
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;