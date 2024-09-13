import React from "react";
import FaqItem from "../../common/FaqItem";

interface FaqItemData {
  question: string;
  answer: string;
}

const faqData: FaqItemData[] = [
  {
    question: "WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?",
    answer:
      "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
  },
  {
    question: "HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?",
    answer:
      "To book a session, please visit our booking page or contact us directly.",
  },
  {
    question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
    answer:
      "I use a variety of professional photography equipment including cameras, lenses, and lighting gear.",
  },
  {
    question: "WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?",
    answer:
      "I use a variety of professional photography equipment including cameras, lenses, and lighting gear.",
  },
  {
    question: "WHAT IS YOUR EDITING PROCESS LIKE?",
    answer:
      "Our editing process involves careful selection and enhancement of photos to ensure the highest quality.",
  },
  {
    question: "ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?",
    answer: "Yes, digital files are included in all our photography packages.",
  },
  {
    question: "DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?",
    answer:
      "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing.",
  },
  {
    question:
      "HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?",
    answer:
      "The edited photos are typically delivered within 2-3 weeks after the session.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <div className="text-white container self-center p-6 md:p-0">
      <h1 className="uppercase text-base text-zinc-400 self-start">Journey</h1>
      <h1 className="text-3xl font-bold mb-6 self-start">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="flex flex-wrap">
        {faqData.map((faq, index) => (
          <FaqItem key={index} answer={faq.answer} question={faq.question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
