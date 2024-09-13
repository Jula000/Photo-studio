"use client";
import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-1/2 p-4 border-t [&:nth-last-child(odd)]:border-l border-about-bg ">
      <div className="mb-4">
        <button
          onClick={onToggleOpen}
          className="flex justify-between w-full py-4 text-left focus:outline-none"
        >
          <span className="font-semibold">{question}</span>
          <span className="border border-about-bg rounded-full px-2.5 py-1">
            {isOpen ? "↑" : "↓"}
          </span>
        </button>
        {isOpen && (
          <div className="pl-4 text-zinc-400">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
