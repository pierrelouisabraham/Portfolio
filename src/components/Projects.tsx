import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface projectProps  {
  source: string;
}

  const Projects: React.FC<projectProps> = ({source}) => {

 
    return (
      <section className="vignette" id='vignette'>
        <img className='img-poject' src={source}/>
      </section>
    );
  }

  
  export default Projects;