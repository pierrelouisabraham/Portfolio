import React from 'react';
import CVLOGO from '../ressources/id-card-solid.svg'
import IDPHOTO from '../ressources/20180831_112906 (1).jpg'

function Cv() {
    return (
      <section className="main-cv" id="main-cv" >
        
        <div className='banner-body'>
            <div className='banner'>
                <div className='photo'>
                    <img className='id_photo' src={IDPHOTO}/>
                </div>
                <div className='nom'>
                    <h3>Pierre Abraham</h3>
                </div>
                <div className='info'>
                <h3>  INFOS</h3>
                    <span>53 rue du rempart des voiliers La Rochelle</span>
                    <span>06 63 56 89 67</span>
                    <span>pierrelouis.abraham@gmail.com</span>
                    <span>36 ans, né le 30/12/1987</span>
                </div>
                <div className='courses'>
                <h3> FORMATION</h3>
                    <span>
                    2023-2024  
                    </span>
                    <span>Développeur d'application - JavaScript React </span>
                    <span>diplome niveau 6</span>
                    <span>2012-2014</span>
                    <span>Isart Digital</span>
                    <span>2006</span>
                    <span>Baccalauréat STT Comptabilité et Gestion</span>
                </div>
                <div className='languages'>
                <h3>LANGUES</h3>
                    <span>Anglais : courant C1</span>
                    <span>Espagnol : notions scolaires</span>
                    


                </div>
            </div>
            <div className='core'>
                <div className='skills-and-soft'>
                    <div className='skills'>
                    <h3>COMPÉTENCES INFORMATIQUES</h3>
                    <div className='skill'>
                        <span className='skill-title'>Maîtrise des langages</span>
                        <span className='skill-name'>C/C++/C#, Java SE 8,Javascript, Typescript</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>Métalanguages</span>
                        <span className='skill-name'>CSS3/HTML5, XML, SQL, MXML, JSON</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>Frameworks</span>
                        <span className='skill-name'>J2EE, Flex, JQUERY, Spring</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>SGBD</span>
                        <span className='skill-name'>MYSQL, ORACLE, SQLITE, H2, MangoDB</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>Modélisation</span>
                        <span className='skill-name'>UML, Mysql workbench, StarUML,
Access</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>IDE</span>
                        <span className='skill-name'>Eclipse, Visual Studio, Net Beans,
Notepad++, Code Block</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>Outils de versioning</span>
                        <span className='skill-name'>GIT, SVN</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>Gestion de projet</span>
                        <span className='skill-name'>AGILE, SCRUM, POO, MVC, Redmine,
DocuWiki, Bugzilla</span>
                    </div>
                    <div className='skill'>
                        <span className='skill-title'>Infrastructure</span>
                        <span className='skill-name'>Linux Debian, Windows XP/7/8.1/10,
Apache, Tomcat, IIS</span>
                    </div>
                    </div>
                    <div className='softs'>
                    <h3>LOGICIELS</h3>
                    <span className='soft'>Unreal engine 4 (jeux video)</span>
                    <span className='soft'>CMS joomla, phpmyadmin, prestashop</span>
                    <span className='soft'>Unity (Réalisation de jeux vidéo)</span>
                    <span className='soft'>Jenkins (administration et configuration
de pipelines)</span>
                    <span className='soft'>Gitlab (administration et configuration et
création de pipelines)</span>
                    </div>
                </div>
                <div className='experience'>
                    <div className='title-exp'>
                        <h3 className='title-job'>Développeur d'applications fullstack/Devops</h3>
                        <span className='company'>Harvest Groupe · CDI</span>
                        <span className='years'>sept. 2018 - août 2020 · 2 ans
Bagnolet, Île-de-France, France</span>
                    </div>
                    <div className='tech'>
                        <span className='title-tech'>Développeur</span>
                        <span>Transcription code Java vers Open API</span>
                        <span>Participation à la migration du logiciel lourd Big vers une application web (Typescript, AngularJs, Java 1.6, c++). </span>
                        <span>Développement d’une application Rest API</span>
                        <span>Réalisation d’écran en AngularJS</span>
                        <span>Branchement des données récupérées sur les écrans</span>
                        <span>Maintenance des moteurs en C++</span>
                        <span className='title-tech'>DevOps</span>
                            <span>Migration globale des projets svn vers git</span>
                            <span>Maintenance des CI/CD jenkins</span>
                            <span>Mise en place de VM : Docker</span>      
                            <span>Migration Jenkins</span>      
                            <span>Mise en place d’un grafana avec prometheus</span>      
                            <span>Mise en place de Sonar</span>      
                            <span>Mise en place de CI sous Gitlab</span>                          
                    </div>
                </div>
                <div className='experience'>
                <h3 className='title-job'>Développeur d'applications fullstack</h3>
                        <span className='company'>VII Future - ESN</span>
                        <span className='years'>2015-2017 VII Future - ESN · 2 ans Paris, France</span>
                    <div className='title-exp'>
                        <h3>Développeur Java - javascript</h3>
                    </div>
                    <div className='poste'>
                        <div className='tech'>
                        <h2 className='title-tech'>Développent Web et applicatifs TMA</h2>
                        <span>
                            Définition de la solution avec le client    
                        </span>
                        <span>Etude de faisabilité et proposition de solution</span>
                        <span>Proposition d’architecture logicielle</span>
                        <span>Engagement qualité et exécution du code</span>
                        <span>Calendrier, points d’avancement et délai livraison</span>
                        <span>Développement du portail</span>
                        <span>Mise en place de la base de données et coeur d’application php5</span>
                        <span>Développement d’une UI en HTML5 et CSS3</span>
                        <span>Développement de scripts JavaScript, Jquery et Ajax</span>
                        <span>Tests unitaires des fonctions développées et intégration du code</span>
                        <span>Débogage de l’application et rapport de bugs</span>
                        <span>Mise au point de protocoles de tests</span>
                        <span>Livraison de la solution</span>
                        </div>
                        
                        <div className='tech'>
                        <h2 className='title-tech'>TMA sur logiciel de gestion incident autoroute </h2>
                        <span>Analyse des composants existants et des usages de l’outils</span>
                        <span>Travail collaboratif au sein d’une équipe</span>
                        <span>Documentation</span>
                        <span>Mise à disposition du code SVN</span>
                        <span>Prise en charge des Tickets incidents et écolution (Bugzilla)</span>
                        <span>Résolution des incidents (Java SE 8, Flex, H2)</span>
                        <span>Création de triggers et requêtes sous Toad</span>
                        <span>Résolutions et ajout de contenu du Strut</span>
                        <span>Configuration des environemments (Eclipse, Maven)</span>
                        <span>Application de protocole de test</span>
                        <span>Livraison de la solution</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default Cv;