import { useState } from 'react';
import '../styles/products-pricing.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 1999,
      annualPrice: 19990,
      description: 'Perfect for short-term rentals',
      features: [
        'Up to 2 furniture items',
        'Free basic delivery',
        'Standard support',
        'Monthly subscription',
        'Damage waiver (optional)'
      ]
    },
    {
      name: 'Premium',
      monthlyPrice: 4999,
      annualPrice: 49990,
      description: 'Best for furnished apartments',
      features: [
        'Up to 5 furniture items',
        'Free expedited delivery',
        'Priority support',
        'Flexible billing cycle',
        'Complimentary damage cover',
        'Annual furniture refresh'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 9999,
      annualPrice: 99990,
      description: 'For co-living spaces',
      features: [
        'Unlimited furniture items',
        'Free custom delivery',
        'Dedicated account manager',
        'Custom billing terms',
        'Premium damage cover',
        'Quarterly upgrades',
        'Corporate discounts'
      ]
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  return (
    <section className="pricing-section section-spacing" id="pricing">
      <div className="container">
        <h2 className="section-heading">Simple, Transparent Pricing</h2>
        <p className="section-subheading">
          Choose the plan that fits your needs perfectly
        </p>

        <div className="pricing-tabs">
          <button
            className={`pricing-tab ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly Billing
          </button>
          <button
            className={`pricing-tab ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual Billing (Save 17%)
          </button>
        </div>

        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">₹{getPrice(plan)}</div>
              <p className="pricing-period">{billingCycle === 'monthly' ? 'per month' : 'per year'}</p>
              <p className="pricing-description">{plan.description}</p>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button className={`pricing-cta ${plan.featured ? 'primary' : 'secondary'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
