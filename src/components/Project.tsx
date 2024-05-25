import { Link } from 'react-router-dom';
import Kasa from '../ressources/KasaPreview.jpg';
import Projects from './Projects';


interface projectProps  {
  source: string;
}

  const Project = () => {

 
    return (
      <div className="vignette">
        <Projects source={Kasa}></Projects>
      </div>
    );
  }

  
  export default Project;