import React, { Component } from 'react';
import { Header, Image, Grid, Popup, Container, Icon } from 'semantic-ui-react';
import Moi from '../../pictures/moi.jpg';
import hackathon from '../../pictures/hackathon.jpg';
import './Resume.scss';

class Resume extends Component {
  render() {
    return (
      <div id="resume" >
        <Header as='h2' icon textAlign='center'>
          <Header.Content className="title-part">
            À propos de moi
          </Header.Content>
        </Header>
        <Grid >
          <Grid.Column computer={4} mobile={16} >
            <Image src={Moi} circular style={{ border: '10px solid greenyellow' }} />
          </Grid.Column>
          <Grid.Column computer={12} mobile={16}>
            <Container text>
              <p>
              Depuis petite j’ai toujours été attirée par le monde du web, mais ayant un baccalauréat littéraire cela ne m’était pas possible d’entrer dans une formation de ce secteur-là. Mais en septembre 2018, à la suite d’entretiens et d’exercices, j’ai été acceptée à la Wild Code School de Marseille, une formation pour débutant pour se former au métier de développeur web et mobile (React.js), le tout en 5 mois intensifs. 
Cette formation m’a permis de connaître le secteur du web. J'y ai appris à travailler en équipe à l’aide de la méthode agile/scrum avec des outils comme Trello et GitHub. 
J’ai pu apprendre à coder, et à coder en connaissance de certaines normes, notamment à l’aide d’ESlint avec la norme AirBnb, permettant de garder un code cohérent dans des projets groupés, ou au sein d’une entreprise. 
J’ai découvert les lignes de commande/le terminal sur linux-ubuntu. 
J'ai aussi appris à maquetter un site web à l’aide de logiciel comme adobe xd et axure. 
Et utiliser un gestionnaire de paquet (npm) qui permet d’ajouter des librairies aux projets (comme reactstrap, ant design, react-router-dom, react semantic-ui etc...)
Pour pouvoir passer le titre professionnel de niveau III en juin prochain, je devais faire un stage validant. Je suis donc actuellement au sein de la start-up Smart Sailors, en tant que stagiaire développeuse front-end pour une durée de 3 mois. 

                  </p>
            </Container>
          </Grid.Column>
        </Grid>
        <div className="triangle" style={{ height: '3em', width: '10vw' }}></div>

        <p>
          <Icon className="birthday-icon" name='birthday cake' />
          22 mai 1998
        </p>
        <p>
          <Popup
            content='Add users to your feed'
          />
          <Popup trigger={<p style={{ fontWeight: 'bold' }}>2ième place du hackathon de la 5ième édition de la Spartan Week </p>}>
            <Popup.Content>
              <img src={hackathon} alt="photo_hackathon" style={{ width: '20vw' }} />
            </Popup.Content>
          </Popup>
        </p>
      </div>
    );
  }
}

export default Resume;