import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'
import './Skills.scss';
import responsive from '../../pictures/responsive.svg';
import adobe from '../../pictures/adobe.svg';

class Skills extends Component {
  render() {
    return (
      <div id="skills" >
        <div className="green-divider" />
        <Header as='h2' icon textAlign='center'>
          <Header.Content className="title-part">
            Mes compétences
            </Header.Content>
        </Header>

        <Grid>

          <span className="front-title" style={{ marginTop: '3em', fontWeight: 'bold', textTransform: 'uppercase' }}>front-end & wireframe</span>

          <Grid.Column mobile={16} textAlign='center' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div className="icon-skills">
              <Icon className="skills-icon" name='css3 large' style={{ fontSize: '3em' }} />
              <p className="text-skills">css3</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='less large' style={{ fontSize: '3em' }} />
              <p className="text-skills">less</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='sass large' style={{ fontSize: '3em' }} />
              <p className="text-skills">sass</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='react large' style={{ fontSize: '3em' }} />
              <p className="text-skills">react.js</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='html5 large' style={{ fontSize: '3em' }} />
              <p className="text-skills">html5</p>
            </div>

            <div className="icon-skills">
              <img alt='logo-adobe' src={adobe} style={{ width: '2.4em' }} />
              <p className="text-skills">adobe XD</p>
            </div>
            <div className="icon-skills">
              <img alt='responsive-logo' src={responsive} style={{ width: '2.4em' }} />
              <p className="text-skills">responsive design</p>
            </div>
          </Grid.Column>

          <span className="environ-title" textAlign='center' style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>environnement de travail</span>

          <Grid.Column mobile={16} textAlign='center' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div className="icon-skills">
              <Icon className="skills-icon" name='linux large' style={{ fontSize: '3em' }} />
              <p className="text-skills">ubuntu
              </p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='github large' style={{ fontSize: '3em' }} />
              <p className="text-skills">github</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='trello large' style={{ fontSize: '3em' }} />
              <p className="text-skills">trello</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='file code large' style={{ fontSize: '3em' }} />
              <p className="text-skills">vscode</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='redo large' style={{ fontSize: '3em' }} />
              <p className="text-skills">scrum & agile</p>
            </div>
            <div className="icon-skills">
              <Icon className="skills-icon" name='gitkraken large' style={{ fontSize: '3em' }} />
              <p className="text-skills">GitKraken</p>
            </div>
          </Grid.Column>
          <span className="rand-title" style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Random</span>

          <Grid.Column mobile={16} style={{}}>
            <ul>
              <li style={{ fontWeight: 'bold' }}>Langues :</li>
              Anglais : bonne compréhension<br />
              Espagnol : niveau scolaire
              </ul>
            <ul>
              <li style={{ fontWeight: 'bold' }}>Librairies React.js utilisés :</li>
              Semantic UI React, Ant Design, reactstrap, react-router-dom, Material-UI
              </ul>
            <ul>
              <li style={{ fontWeight: 'bold' }}>Pack Office :</li>
              Word, PowerPoint, Publisher
              </ul>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Skills;