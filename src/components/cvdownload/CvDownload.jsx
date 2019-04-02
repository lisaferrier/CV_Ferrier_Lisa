import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './CvDowload.scss';
import CV from '../FerrierLisaCv.pdf';


class CvDownload extends Component {
  render() {
    return (
      <div id="download-cv" style={{ background: 'black', color: 'white' }} >
        <Grid centered columns={2}>
          <Grid.Column textAlign='center'>
            <a href={CV}
              download="FERRIER_Lisa_CV">
              <Button>Télécharger mon CV en pdf</Button>
            </a>
          </Grid.Column>
        </Grid>


      </div>
    );
  }
}

export default CvDownload;