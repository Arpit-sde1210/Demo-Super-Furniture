import { useState } from 'react';
import '../styles/testimonials-faq-footer.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does the rental process work?',
      answer: 'Browse our furniture collection, select items you want to rent, choose your rental duration, and complete the booking. Our team will handle the delivery and setup at your convenience.'
    },
    {
      question: 'What is included in the rental price?',
      answer: 'The rental price includes the furniture, delivery, and basic maintenance. Damage waiver and insurance can be added as optional add-ons for complete peace of mind.'
    },
    {
      question: 'Can I change my rental items?',
      answer: 'Yes! You can upgrade, downgrade, or swap furniture items at any time. We can pick up the old items and deliver new ones within 2-3 business days.'
    },
    {
      question: 'What if the furniture gets damaged?',
      answer: 'We offer optional damage waiver coverage (nominal additional cost) that covers accidental damages. Normal wear and tear is covered under our standard protection plan.'
    },
    {
      question: 'Is there a minimum rental period?',
      answer: 'Our minimum rental period is 3 months. However, for special requests, we may consider shorter durations. Contact our support team for more information.'
    },
    {
      question: 'Do you deliver in my area?',
      answer: 'We currently deliver across major cities in India including Delhi, Mumbai, Bangalore, Hyderabad, and Pune. Check our service area or contact us to confirm delivery to your location.'
    },
    {
      question: 'How much is the delivery charge?',
      answer: 'Delivery is FREE for all rental orders across our service areas. For express delivery (next-day), there\'s a nominal charge of ₹500-1000 depending on your location.'
    },
    {
      question: 'Can I buy the furniture after renting?',
      answer: 'Absolutely! After 12 months of rental, you can purchase the furniture at a discounted price. We\'ll deduct 80% of the rental payments from the purchase price.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section section-spacing">
      <div className="container">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <p className="section-subheading">
          Find answers to common questions about our rental service
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={`faq-toggle ${openIndex === index ? 'active' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer active">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
