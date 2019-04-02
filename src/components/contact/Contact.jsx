import React, { Component } from 'react';
import { Icon, Grid, Header, Container } from 'semantic-ui-react';
import './Contacts.scss';

class Contact extends Component {
  render() {
    return (
      <Container text>
      <div id="contact" style={{ background: 'black', color: 'white' }}>

      <Header as='h2' icon textAlign='center'>
          <Header.Content className="title-part">
           Contactez-moi !
            </Header.Content>
        </Header>
        <Grid>
            <Grid.Column computer={8} mobile={16}  className="column-contact-left" >
              <div>
                <p className="phone-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="phone-icon" name='phone square large' />
                  Téléphone : 06 43 54 52 28
              </p>
                <p className="email-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="email-icon" name='mail square large' />
                  Mail : <a className="hover-link" style={{ color: 'inherit' }} href="mailto:lisaferrier@outlok.com">lisaferrier@outlook.com</a>
                </p>
              </div>
            </Grid.Column>
            <Grid.Column computer={8} mobile={16} className="column-contact-right" >
              <div>
                <p className="adress-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="adress-icon" name='map marker alternate large' />
                  Adresse : <a className="hover-link" style={{ color: 'inherit' }} href="https://goo.gl/maps/tcQ9BGKVfe42">1 rue Brueys, Aix-en-Provence</a>
                </p>
                <p className="linkedin-contact" style={{ fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '2px solid black' }}>
                  <Icon className="linkedin-icon" name='linkedin square large' />
                  LinkedIn : <a className="hover-link" style={{ color: 'inherit' }} href="https://www.linkedin.com/in/ferrierlisa/">Lisa Ferrier</a>
                </p>
              </div>
            </Grid.Column>
        </Grid>
      </div>
      </Container>
    );
  }
}

export default Contact;