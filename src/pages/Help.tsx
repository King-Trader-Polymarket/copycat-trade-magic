
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
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text title-animation mb-4">
            Help Center
          </h1>
          <p className="text-muted-foreground">
            Find answers to commonly asked questions
          </p>
        </div>

        <Card className="glass p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions? Contact us through our social media channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
