
import React from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I purchase a supercar from your website?",
      answer: "Browse our collection, select your desired vehicle, and add it to cart. Complete the checkout process with your details and payment information. Our team will then contact you within 24 hours to finalize the purchase and arrange delivery."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers, credit cards, and financing options. For high-value purchases, we also accept cryptocurrency and can arrange specialized financing through our banking partners."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we partner with leading banks and financial institutions to offer competitive financing rates. Our finance team can help you secure loans with attractive interest rates and flexible repayment terms."
    },
    {
      question: "What is included in the warranty?",
      answer: "All our supercars come with manufacturer's warranty that varies by brand. Typically, this includes 2-3 years comprehensive coverage. We also offer extended warranty options and maintenance packages."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery time depends on the vehicle and location. Cars in stock can be delivered within 1-2 weeks. Custom orders or rare models may take 3-6 months. We provide regular updates throughout the process."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we primarily serve the Indian market. However, we can arrange international shipping for select customers. Contact our team to discuss specific requirements and shipping costs."
    },
    {
      question: "Can I trade in my current vehicle?",
      answer: "Yes, we accept trade-ins for luxury and exotic vehicles. Our appraisal team will evaluate your vehicle and provide a competitive trade-in value that can be applied toward your new purchase."
    },
    {
      question: "Do you provide maintenance services?",
      answer: "We have authorized service centers and certified technicians for all brands we sell. We offer regular maintenance, repairs, and genuine parts. Annual maintenance packages are also available."
    },
    {
      question: "What documentation is required for purchase?",
      answer: "You'll need valid ID proof, address proof, PAN card, and income verification. For high-value purchases, additional documentation may be required as per regulatory guidelines."
    },
    {
      question: "Can I schedule a test drive?",
      answer: "Yes, test drives can be arranged for serious buyers. Contact our showroom to schedule an appointment. Some restrictions may apply based on the vehicle's value and availability."
    },
    {
      question: "What is your return policy?",
      answer: "Due to the nature of luxury vehicles, returns are handled case-by-case. We offer a 7-day inspection period where any undisclosed issues can be addressed. Custom orders are generally non-returnable."
    },
    {
      question: "Do you offer insurance assistance?",
      answer: "Yes, we work with leading insurance providers to help you secure comprehensive coverage for your supercar. Our team can assist with policy selection and claims processing."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about purchasing luxury supercars
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our expert team is here to help you with any additional questions
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
