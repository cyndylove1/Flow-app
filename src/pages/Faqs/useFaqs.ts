import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  isOpen: boolean;
}



const useFaqs = () => {
  const [accordion, setAccordion] = useState<AccordionItem[]>([
    {
      id: 1,
      title: "How Do I Start Receiving My Drivers Income Payout?",
      isOpen: false,
    },
    {
      id: 2,
      title: "What Is Drivers Income Payout (DIP)?",
      isOpen: false,
    },
    {
      id: 3,
      title: "Is Flow An Investment Platform?",
      isOpen: false,
    },
    {
      id: 4,
      title: "Why Is KYC Required, And How Does It Work?",
      isOpen: false,
    },
    {
      id: 5,
      title: "How Frequently Will I Receive My Drivers Income Payout?",
      isOpen: false,
    },
  ]);

  const handleAccordionClick = (index: number) => {
    setAccordion((prevAccordion) =>
      prevAccordion.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };
  return { accordion, handleAccordionClick };
}
export default useFaqs;