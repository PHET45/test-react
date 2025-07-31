import React from 'react';
import { MessageSquare, Award, Users, Heart } from 'lucide-react';

const WhyHireMe = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Communicative',
      description: 'Great clients need to know about good people. So they can find projects more easily.'
    },
    {
      icon: Award,
      title: 'Professional',
      description: 'Great clients need to know about good people. So they can find projects more easily.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Great clients need to know about good people. So they can find projects more easily.'
    },
    {
      icon: Heart,
      title: "Client's Favourite",
      description: 'Great clients need to know about good people. So they can find projects more easily.'
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Why Hire Me?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon size={24} className="text-gray-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyHireMe;