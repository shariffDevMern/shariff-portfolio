import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import animations from "./animations";

const faqs = [
    {
      question: "What graphic design services do you offer?",
      answer: "I provide a wide range of graphic design services, including logo design, branding, social media graphics, business cards, brochures, flyers, website designs, and more."
    },
    {
      question: "How can I contact you for your services?",
      answer: "You can reach me via email at mukeshsudhan359@gmail.com or call/WhatsApp me at +91 90251 30484."
    },
    {
      question: "What is your typical turnaround time for projects?",
      answer: "The turnaround time depends on the complexity of the project. For most designs, I typically deliver within 3-7 business days."
    },
    {
      question: "Do you offer revisions on your designs?",
      answer: "Yes, I offer revisions to ensure the design meets your expectations. The number of revisions will be specified in the project agreement."
    },
    {
      question: "Can you work with my existing brand guidelines?",
      answer: "Absolutely! I can adapt my designs to align perfectly with your existing brand guidelines or help you create new ones."
    },
    {
      question: "What do you need from me to get started?",
      answer: "I’ll need a brief description of your requirements, any reference material, and your preferred styles or color schemes. Sharing brand assets, if any, is also helpful."
    },
    {
      question: "Do you provide files in multiple formats?",
      answer: "Yes, I deliver the final design in various formats such as PNG, JPEG, PDF, and editable source files (AI, PSD, etc.) upon request."
    },
    {
      question: "Can you create custom illustrations or animations?",
      answer: "Yes, I can create custom illustrations and basic animations depending on your project’s requirements."
    },
    {
      question: "Do you offer packages for long-term projects or multiple designs?",
      answer: "Yes, I offer discounted packages for long-term collaborations or bulk design projects. Contact me for a customized quote."
    },
    {
      question: "How do I make payments for your services?",
      answer: "I accept payments via bank transfer, UPI, or any preferred payment method. Details will be shared once the project is finalized."
    }
  ];
  

export default function AccordionFaq() {
  return (
    <div>
      {faqs.map((faq,index)=>
        <Accordion key={`question${index}`} sx={{...animations.slideDown}}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={`question${index}-content`}
          id={`question${index}-header`}
        >
          <Typography sx={{fontWeight:'bold'}}>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )}  
    </div>
  );
}
