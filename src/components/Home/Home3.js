import React from 'react';
import './Timeline.css';

const projects = [
  { id: 1, title: 'Site Metiers', subtitle: 'Description du métier UI et UX disigner.', description: '' },
  { id: 2, title: 'Gestion Admine des Site Metiers', subtitle: 'Premier site dinamique, création de la page admin.', description: '' },
  { id: 3, title: 'SpycoQuizz', subtitle: "Répondre aux besoins d'un client.", description: '' },
  { id: 4, title: '', subtitle: '', description: ''},
  { id: 5, title: 'ColiSimba', subtitle: '', description: ''},
  { id: 6, title: 'Oriflame', subtitle: '', description: ''},
  { id: 7, title: '', subtitle: '', description: ''},
];

const Timeline = () => {
  return (
    <div className="timeline">
      {projects.map(project => (
        <div key={project.id} className="timeline-item">
          <div className="timeline-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
