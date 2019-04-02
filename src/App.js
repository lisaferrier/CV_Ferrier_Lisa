import React, { Component, Fragment } from 'react';
import './App.scss';
import Headers from './components/header/Headers';
import AboutMe from './components/aboutme/AboutMe';
import Contact from './components/contact/Contact';
import CvDownload from './components/cvdownload/CvDownload';
import { Container, Grid, Icon } from 'semantic-ui-react';
import Projects from './components/projects/Projects';
import Fade from 'react-reveal/Fade';
import {
  Divider,
  Dropdown,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav fixed="top" textAlign="right">
         <p className="nav-text">
            <a href="#resume" className="link-nav">à propos de moi</a>
            <a href="#skills" className="link-nav">compétences</a>
            <a href="#formation" className="link-nav">expérience & formation</a>
            <a href="#projets" className="link-nav">projets</a>
            <a href="#contact" className="link-nav">contact</a>
            <a href="#download-cv" className="link-nav">télécharger mon c.v.</a>
            </p>
        </nav>

        <div className="burger-menu">
          <a href="#resume" className="link-nav">à propos de moi</a><br />
          <a href="#skills" className="link-nav">compétences</a><br />
          <a href="#formation" className="link-nav">expérience & formation</a><br />
          <a href="#projets" className="link-nav">projets</a><br />
          <a href="#contact" className="link-nav">contact</a><br />
          <a href="#download-cv" className="link-nav">télécharger mon c.v.</a>
        </div>

        <Fade>
        </Fade>
        <Fade>
          <Headers />
        </Fade>
        <Container>
          <AboutMe />
          <Fade>
            <Projects />
          </Fade>
        </Container>
        <Container className="container-bottom" style={{ background: 'black', color: 'white', widht: '100vw' }}>
          <Fade>
            <Contact />
          </Fade>
          <Fade>
            <CvDownload />
          </Fade>
          <Grid>
            <Grid.Column className="column-git" floated='right' mobile={16} computer={6} textAlign='right' style={{ background: 'black', color: 'white' }}>
              <a href="https://github.com/lisaferrier/CV_Lisa" style={{ color: 'greenyellow' }}>
                <Icon className="github-icon" name='github large' style={{ fontSize: '2em' }} />
                Voir le repo du site
              </a>
            </Grid.Column>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default App;
