import React, { useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import section1Ref from './Cv';
import section2Ref from './Project';



function Header() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }

  }
    return (
      
      <div className="header">
        <Link to={"/"}>Home</Link>
        <Link to="#" onClick={() => scrollToSection(section2Ref)}>Section 2</Link>
        <Link to="#" onClick={() => scrollToSection(section1Ref)}>Section 1</Link>
      </div>
     
    );
  }
  
  export default Header;