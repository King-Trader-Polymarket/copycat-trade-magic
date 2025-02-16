
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  const faqs = [
    {
      question: "What is Polymarket Copy Trading?",
      answer:
        "Polymarket Copy Trading is an automated system that allows you to replicate the trades of successful traders on the Polymarket platform.",
    },
    {
      question: "How does the slippage setting work?",
      answer:
        "Slippage is the difference between the expected price and the actual price at which a trade is executed. Setting a slippage percentage helps protect your trades from excessive price movements.",
    },
    {
      question: "Is my investment safe?",
      answer:
        "We implement strict security measures and smart contract audits to ensure the safety of your funds. However, all trading carries inherent risks.",
    },
    {
      question: "How do I start copy trading?",
      answer:
        "Enter the address of the trader you want to copy, set your acceptable slippage, and click the Start button. The bot will automatically copy their trades.",
    },
  ];

  return (
    <div className="page-background help-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text title-animation mb-4">
            Help Center
          </h1>
          <p className="text-muted-foreground">
            Find answers to commonly asked questions
          </p>
        </div>

        <div className="glass p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 glass p-8">
          <h2 className="text-2xl font-semibold gradient-text mb-6 text-center">
            Still Need Help?
          </h2>
          <p className="text-muted-foreground text-center">
            Our support team is available 24/7 to assist you with any questions or concerns.
            Reach out to us through any of our social media channels or email support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
