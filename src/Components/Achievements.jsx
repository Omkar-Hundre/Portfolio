"use client";
import React from "react";
import ACHIEVEMENTS from "../data/Achievements";
import BlurFade from "./magicui/blur-fade";

const AchievementCard = ({ achievement }) => {
  const getPositionColor = (position) => {
    if (position.includes("1st") || position.includes("Winner")) return "text-yellow-600 bg-yellow-50";
    if (position.includes("4th") || position.includes("Finalist")) return "text-orange-600 bg-orange-50";
    if (position.includes("Top 10") || position.includes("Rank")) return "text-blue-600 bg-blue-50";
    if (position.includes("Minister") || position.includes("Government")) return "text-green-600 bg-green-50";
    return "text-gray-600 bg-gray-50";
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-gray-300">
      <div className="flex items-start gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={achievement.logoUrl}
            alt={achievement.organization}
            className="w-8 h-8 rounded-lg object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                {achievement.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                {achievement.organization}
              </p>
            </div>
            
            {/* Position Badge */}
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionColor(achievement.position)}`}>
              {achievement.position}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xs text-gray-700 mt-2 leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Highlight */}
          <div className="mt-2">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
              {achievement.highlight}
            </span>
          </div>
        </div>
        
        {/* Date */}
        <div className="flex-shrink-0 text-xs text-gray-500">
          {achievement.date}
        </div>
      </div>
    </div>
  );
};

export const Achievements = () => {
  return (
    <BlurFade>
      <div className="w-full my-8">
        <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-4">
          Competitions & Achievements
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </div>
      </div>
    </BlurFade>
  );
};
