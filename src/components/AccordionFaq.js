import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import animations from "./animations";

const faqs = [
  {
    question: "What frontend development services do you offer?",
    answer:
      "I provide a wide range of frontend development services, including responsive website design, single-page applications (SPAs), cross-browser compatibility, user interface (UI) design, and performance optimization.",
  },
  {
    question: "How can I contact you for your services?",
    answer:
      "You can reach me via email at mukeshsudhan359@gmail.com or call/WhatsApp me at +91 90251 30484.",
  },
  {
    question: "What is your typical turnaround time for projects?",
    answer:
      "The turnaround time depends on the complexity of the project. For most frontend projects, I typically deliver within 1-3 weeks.",
  },
  {
    question: "Do you offer revisions on your work?",
    answer:
      "Yes, I offer revisions to ensure the frontend design and functionality meet your expectations. The number of revisions will be specified in the project agreement.",
  },
  {
    question: "Can you work with my existing backend or APIs?",
    answer:
      "Absolutely! I can integrate the frontend with your existing backend or APIs seamlessly to ensure a smooth user experience.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "I’ll need a detailed description of your project requirements, design references (if any), and access to backend APIs or data endpoints. Sharing your preferred color schemes or style guides is also helpful.",
  },
  {
    question: "Do you ensure mobile responsiveness in your designs?",
    answer:
      "Yes, all my frontend projects are mobile-first and fully responsive, ensuring they look and perform well on all devices.",
  },
  {
    question: "Can you create custom animations or interactive elements?",
    answer:
      "Yes, I can create custom animations and interactive elements using technologies like CSS, JavaScript, and libraries such as GSAP or React Spring.",
  },
  {
    question: "Do you offer packages for long-term projects or multiple pages?",
    answer:
      "Yes, I offer discounted packages for long-term collaborations or multi-page applications. Contact me for a customized quote.",
  },
  {
    question: "How do I make payments for your services?",
    answer:
      "I accept payments via bank transfer, UPI, or any preferred payment method. Details will be shared once the project is finalized.",
  },
];

export default function AccordionFaq() {
  return (
    <div>
      {faqs.map((faq, index) => (
        <Accordion key={`question${index}`} sx={{ ...animations.slideDown }}>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls={`question${index}-content`}
            id={`question${index}-header`}
          >
            <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
