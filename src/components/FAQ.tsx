"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is this nickname generator really free?",
    answer:
      "Yes, 100% FREE! Our AI nickname generator is completely free to use with unlimited generations. No signup, no credit card, no hidden fees. Generate as many nicknames as you want at zero cost!",
  },
  {
    question: "How does the free AI nickname generator work?",
    answer:
      "Our free AI-powered nickname generator analyzes your input and creates unique, personalized nicknames based on your preferences. Simply describe what kind of nickname you want, and our AI will generate creative options instantly - all for free!",
  },
  {
    question: "Are the AI-generated nicknames unique?",
    answer:
      "Yes! Our free AI generator creates unique combinations each time. While some popular nicknames may appear across different generations, our AI ensures variety by mixing different styles, themes, and creative elements.",
  },
  {
    question: "Can I use these free nicknames for gaming?",
    answer:
      "Absolutely! Our free nicknames are perfect for gaming platforms like Steam, Discord, Xbox, PlayStation, and games like League of Legends, Fortnite, Valorant, Minecraft, and more. Just check availability on your specific platform.",
  },
  {
    question: "How do I copy a nickname?",
    answer:
      "Simply click on any nickname card and it will be automatically copied to your clipboard. You will see a Copied! confirmation message when successful. Its quick and easy!",
  },
  {
    question: "Is there a limit to how many nicknames I can generate?",
    answer:
      "No limits at all! Click Refresh or Regenerate to get unlimited new batches of AI-generated nicknames. Our free service has no daily limits, no registration requirements, and no restrictions.",
  },
  {
    question: "What categories of free nicknames do you offer?",
    answer:
      "We offer free AI-generated nicknames for gaming (with sub-categories for specific games like LoL, Fortnite, Valorant), boyfriend nicknames, girlfriend nicknames, cute nicknames, cool nicknames, and funny nicknames.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl text-center text-white mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Everything you need to know about our free AI nickname generator
        </p>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white pr-4">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neon-purple flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 animate-fade-in">
                  <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
