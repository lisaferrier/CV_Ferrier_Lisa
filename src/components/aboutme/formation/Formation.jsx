import React, { Component } from 'react';
import { Header, Grid, Icon } from 'semantic-ui-react';
import smartSailors from '../../pictures/smartsailors.png';

class Formation extends Component {
  render() {
    return (
      <div id="formation">
        <div className="green-divider" />
        <Grid>
          <Grid.Row >
            <Grid.Column computer={8} mobile={16} >
              <Header as='h2' icon textAlign='center'>
                <Header.Content className="title-part">
                  Formation
                 </Header.Content>
              </Header>
              <Grid >
                <Grid.Row>
                  <Grid.Column computer={3} mobile={16} textAlign='center' >
                   <a href="https://wildcodeschool.fr/marseille/">
                    <img src="https://wildcodeschool.fr/wp-content/uploads/2019/01/logo_pink_176x60.png" className="logo-wcs" alt="logo-wcs" />
                  </a>
                  </Grid.Column>
                  <Grid.Column computer={13} mobile={16} >
                    <p> 
                      <span className="wcs-title" style={{ fontWeight: 'bold' }}> SEPTEMBRE 2018 – FÉVRIER 2019 : WILD CODE SCHOOL / MARSEILLE</span>
                      <br />
                      Formation au développement web et mobile. Préparation du titre de Développeur Logiciel (niveau III, équivalent Bac+2)
                    <ul>
                        <li>Projet client / durée : 3 mois / équipe : 4 personnes</li>
                        <li>Projet fictif / durée : 1 mois / équipe : 4 personnes</li>
                        <li>Animation d’ateliers code : initiation et découverte du code HTML et CSS à une classe du Lycée St-Exupéry, Marseille 15</li>
                        <li>2 hackathons : spartan week prix </li>
                      </ul>
                    </p>
                    <p>
                      <span className="bac-title" style={{ fontWeight: 'bold' }}>JUIN 2016 : BACCALAURÉAT LITTÉRAIRE, SPÉCIALITÉ HISTOIRE DE L’ART LYCÉE VAUVENARGUES, AIX-EN-PROVENCE </span>
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} >
              <Header as='h2' icon textAlign='center'>
                <Header.Content className="title-part">
                  Expérience
                </Header.Content>
              </Header>
              <Grid >
                <Grid.Row>
                  <Grid.Column computer={3} mobile={16} textAlign='center'>
                    <a href="http://smartsailors.net/">
                    <img src={smartSailors} className="logo-smartsailors" alt="logo-smartsailors" />
                    </a>
                  </Grid.Column>
                  <Grid.Column computer={13} mobile={16} >
                    <p>
                      <span className="ss-title" style={{ fontWeight: 'bold' }}>FÉVRIER À MAI 2019 : STAGE DÉVELOPPEUSE FRONT-END JUNIOR @ SMART SAILORS / ZEBOX - MARSEILLE</span>
                      <ul>
                        <li>Mission : coder un importateur de données Excel qui sera utilisé en interne, et redesign avec Adobe XD de certaines parties de l'application de base
                     <br />
                          Environnement technique : React.js, Redux, Less
                    </li>
                      </ul>
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Formation;