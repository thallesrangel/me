import React from 'react'

import { Container, Row, Col} from 'react-bootstrap';

import Header from '../components/Header';
import Links from '../components/Links';

import { BsGithub, BsLinkedin, BsInstagram, BsMailbox2 } from 'react-icons/bs';

function Home() {

  const list = [
    {id: 1, icon: <BsGithub/>, label: 'Github', link: 'https://github.com/thallesrangel'},
    {id: 2, icon: <BsLinkedin/>, label: 'Linkedin', link: 'https://www.linkedin.com/in/rangelthr/'},
    {id: 3, icon: <BsInstagram/>, label: 'Instagram', link: 'https://www.instagram.com/rangelthr/'},
    {id: 2, icon: <BsMailbox2/>, label: 'Email', link: 'mailto:rangelthr@gmail.com'}
  ]

  return (
    <>
      <Container className="center">
        <Row >
          <Col>
            <Header />
            <h3>Hi, 👋</h3>
            <h1>I’m Thalles Rangel</h1>
            <h4><span class="profession">Software Engineer</span> at Webera. <br/> Passionate about new challenges.</h4>

            {list && list.map((item) => (
            <Links
              key={item.id}
              icon={item.icon} 
              label={item.label} 
              link={item.link}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
