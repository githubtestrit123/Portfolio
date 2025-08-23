"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const achievementsList = [
  { metric: "Projects", value: 100, postfix: "+" },
  { prefix: "~", metric: "Users", value: 1000 },
  { metric: "Awards", value: 4 },
  { metric: "Years", value: 3 },
];

const Achievements = () => {
  return (
    <div className="py-6 sm:py-12 px-4 xl:px-16 bg-black text-white">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={() => ({
                  mass: 1,
                  friction: 100,
                  tension: 140, // 'tension' (not 'tensions')
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
