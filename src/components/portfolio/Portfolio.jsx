import React from 'react';
import './Portfolio.css';
import JPMC from '../../assests/jpmc.jpeg';
import ICANON from '../../assests/icanon.jpeg';

const projects = [
{ 
    id: 1,
    image: JPMC,
    title: 'JPMorgan Chase & Co.',
    position: 'Front-End Development Intern',
    date: 'July 2024 - September 2024',
    description: 'As a Front-End Developer, I engineered a dynamic and responsive User Interface for the Travel Management Start-Up platform named Rydeu, leveraging modern Frameworks and optimized Code Structures. I implemented advanced UX patterns, state management, and API integrations to enable seamless itinerary customization and efficient destination management for B2B travel agents and corporate users.'
},
{ 
    id: 2,
    image: ICANON,
    title: 'Khan Academy',
    position: 'Web-Content Developer and Strategizing Intern',
    date: 'May 2024 - July 2024',
    description: 'My responsibilities included reviewing existing content, crafting practice questions with solutions, and iterating on content based on feedback. Additionally, I analyzed content usage metrics to identify areas for improvement and optimized content strategy accordingly.'
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Experience</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;
