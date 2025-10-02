"use client";
import React from "react";
import CLUBS from "../data/Clubs";
import MilestoneCard from "./MilestoneCard";
import BlurFade from "./magicui/blur-fade";

export const Clubs = () => {
  return (
    <BlurFade>
      <div className="w-full my-10">
        <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
          <div className="font-calistoga text-gray-900 text-md">Clubs & Roles</div>
        </div>
        <div className="">
          {CLUBS.map((club, index) => (
            <MilestoneCard
              key={club.id}
              logoUrl={club.logoUrl}
              altText={club.name}
              title={club.title}
              subtitle={club.organization}
              href={club.href}
              period={`${club.start} - ${club.end}`}
              description={club.description}
              achievements={club.achievements}
              technologies={club.technologies}
            />
          ))}
        </div>
      </div>
    </BlurFade>
  );
};
