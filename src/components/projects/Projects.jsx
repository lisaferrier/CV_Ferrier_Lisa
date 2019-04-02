import React, { Component } from 'react';
import { Card, Header, Grid } from 'semantic-ui-react';
import cineasta from '../pictures/cineasta.gif';
import tbn from '../pictures/tbn.gif';
import excel from '../pictures/excel.gif';
import writerdays from '../pictures/writerdays.gif';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div id="projets">
        <div className="green-divider" />
        <Header as='h2' icon textAlign='center'>
          <Header.Content className="title-part">
            Projets
          </Header.Content>
        </Header>

        <Grid columns='two'>
          <Grid.Row >
            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card>
                <Card.Content>
                  <Card.Header textAlign='center'>Importateur Excel </Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, Less, Redux, GitHub</Card.Meta>
                  <img src={excel} style={{ widht: '100%' }} className="picture-projects" alt='preview-excel' />
                  <Card.Description>Objectif : réaliser un importateur de données Excel, un outil qui servira en interne chez Smart Sailors. Login utilisateur, checks permissions, upload Excel, verification des données pour chaques onglets
                    </Card.Description>
                  <Card.Meta>
                    Durée 3 mois, équipe : duo
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='http://terroirbioetnaturel.com/'>
                <Card.Content>
                  <Card.Header textAlign='center'>Terroir Bio et Naturel</Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, SCSS, Node.js / mySQL, GitHub</Card.Meta>
                  <img src={tbn} style={{ widht: '100%' }} className="picture-projects" alt='preview-terroirbioetnaturel' />
                  <Card.Description>Objectif : réaliser un site web responsive avec un back-office pour une cliente</Card.Description>
                  <Card.Meta>Durée : 3 mois (novembre - janvier 2019) / équipe : 4 personnes</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='https://writerdays.herokuapp.com/'>
                <Card.Content>
                  <Card.Header textAlign='center'>Writer Days (mobile)</Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, CSS, GitHub, Heroku</Card.Meta>
                  <img src={writerdays} style={{ widht: '100%' }} className="picture-projects" alt='preview-writerdays' />
                  <Card.Description>Site mobile réalisé durant le hackathon (3 jours) de la 5ième édition de la Spartan Week visant à mettre en relation les street-artistes et les particuliers, 2ième place remporté !</Card.Description>
                  <Card.Meta>Durée : 72h (hackathon) (décembre 2018) / équipe : duo</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column computer={8} mobile={16} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card href='github.com'>
                <Card.Content>
                  <Card.Header textAlign='center'>Cineasta</Card.Header>
                  <Card.Meta textAlign='center'>Environnement technique : React.js, CSS, GitHub, Heroku</Card.Meta>
                  <img src={cineasta} style={{ widht: '100%' }} className="picture-projects" alt='preview-cineasta' />
                  <Card.Description>Création d'un site web responsive en utilisant l'API TMDb qui permet de rechercher la fiche d'un film rapidement (Bonus : et dans n'importe quelle langue!)
                    <ul>
                      <li>
                        <a href="https://github.com/WildCodeSchool/marseille_0918_moviedb">Repo Git</a></li></ul> </Card.Description>
                  <Card.Meta>Durée : 1 mois (octobre 2018)/ équipe : 4 personnes</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Projects;