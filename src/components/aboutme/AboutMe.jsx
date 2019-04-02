import React, { Fragment } from 'react';
import Resume from './resume/Resume';
import Formation from './formation/Formation';
import Skills from './skills/Skills';
import SkillsResponsive from './skills/SkillsResponsive';
import Fade from 'react-reveal/Fade';
import { Responsive } from 'semantic-ui-react';
const AboutMe = () => {
  return (
    <Fragment>
      <Fade>
        <Resume />
      </Fade>
      <Responsive  minWidth={995}>
       <Fade>
          <Skills />
        </Fade>
      </Responsive>

      <Responsive maxWidth={994}>
        <Fade>
          <SkillsResponsive />
        </Fade>
      </Responsive>
      <Fade>
        <Formation />
      </Fade>
    </Fragment>
  );
};

export default AboutMe;