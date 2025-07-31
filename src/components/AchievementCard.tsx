import React from 'react';
import { Star, Layers } from 'lucide-react';

const AchievementCard = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white mb-8 relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">120+</div>
            <div className="text-orange-100 text-sm">Completed Projects</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-orange-100 text-sm">Positive Reviews</div>
          </div>
        </div>
        
        <div className="relative">
          <Layers size={80} className="text-orange-300 opacity-50" />
          <div className="absolute top-4 left-4 w-12 h-8 bg-blue-400 rounded opacity-80"></div>
          <div className="absolute top-8 left-8 w-10 h-6 bg-pink-400 rounded opacity-80"></div>
          <div className="absolute top-2 left-12 w-8 h-8 bg-yellow-400 rounded opacity-80"></div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4">Glad to Help You!</h3>
      <p className="text-orange-100 max-w-md leading-relaxed">
        As an expert developer, I am ready to start and planning your project considering business requirements and provide you with amazing web development techniques.
      </p>
      
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-orange-400 rounded-full opacity-20"></div>
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-orange-400 rounded-full opacity-10"></div>
    </div>
  );
};

export default AchievementCard;