import React from 'react';
import Image from 'next/image';
//= Fonts
import { montserrat_font } from '@/utils/fonts';
//= Data
import servicesData from '../../Home/Services/data.json';
//= Styles
import classes from './service.module.scss';

function Service({ title }: { title: string; }) {
  const service = servicesData.find(s => s.title.toLowerCase() === title);

  if (!service) return <strong>Service Not Found</strong>;

  return (
    <section className={`${classes.service} ${montserrat_font}`}>
      <div className="container">
        <h2>
          <Image src={service.icon} width={64} height={64} alt='icon' />
          {service.title}
        </h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy  collaborative thinking to further  overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <p>Capitalize on low hanging fruit to identify a ballpark value added  to beta test.Override the digital divide with additional clickthrough&lsquo;s from of workflows to establish a framework DevOps.</p>
        <h3>The perfect Health for all</h3>
        <p>Appropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.</p>
        <ul>
          <li>Comprehensive annual physicals</li>
          <li>Vaccinations</li>
          <li>Online Bill Payment</li>
          <li>Healthcare Research</li>
          <li>Professional Medical Services</li>
          <li>Free Consulting</li>
          <li>Preventive and wellness care</li>
          <li>Chronic Disease Management</li>
        </ul>
        <Image src="/images/doctorandpatients.jpg" width={1080} height={450} alt='doctor with patient' className={classes.image} />
        <h3>People trust Pharma</h3>
        <blockquote>
          “Crowdsource term sheet freemium beta stealth responsive web design niche market rock star channels. Supply chain market graphical user interface assets.”
        </blockquote>
        <h4>Feel Like Home With Best Service</h4>
        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
        <ol>
          <li>Leverage agile frameworks to provide a robust</li>
          <li>Synopsis for high level overviews.</li>
          <li>Provide a robust synopsis for high level overviews.</li>
          <li>Heading towards a streamlined cloud solution</li>
        </ol>
        <p>Doctor are choosing from our diverse pool of health specialists. Discover better health & wellness by using our doctor ratings & reviews to make your choice. Once the family has reached a decision, the team informs the relevant parties so final arrangements can begin. Emergency staff who are available 24 hours a day, seven days a week. These staff members are trained professionals.</p>
      </div>
    </section>
  )
}

export default Service