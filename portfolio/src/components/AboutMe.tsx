import React from 'react';
import { Container, Header, Segment, Icon, List } from 'semantic-ui-react';
import './AboutMe.css'
interface AboutMeProps {
  // Defina as propriedades aqui, se necessário
}

const AboutMe = () => {
  return (
    <Segment vertical className='about-me-segment'>
      <Container text>
        <Header as="h2">
          <Icon name="user" className='about-me-icon' />
          <Header.Content className='about-me-header' >Sobre Mim</Header.Content>
        </Header>
        <p className='about-me-paragraph'>
          Sou um profissional versátil com uma formação em andamento em Engenharia de Mecatrônica e Desenvolvimento Full Stack com ampla experiência em manutenção de hardware e software, programação (incluindo C, C++, JavaScript, PHP, Python), e desenvolvimento de sistemas educacionais e administrativos.
          <br></br>
          Minha experiência abrange desde manutenção de equipamentos eletrônicos até projetos avançados de robótica e automação. Sou apaixonado por solucionar problemas e estou sempre motivado a aprender e contribuir em novos desafios.
          <br></br>
          Tenho experiência em ensino e trabalho voluntário em educação de robótica.
          <br></br>
          Além disso, sou musicista e entusiasta de tecnologia e em horas vagas gosto de assistir séries e jogar.
          <br></br>
          Estou aberto a oportunidades que me permitam aplicar meu conhecimento e paixão.  
        </p>

        <Header as="h3">
          <Icon name="graduation" className="about-me-icon"/>
          <Header.Content className="about-me-header">Educação</Header.Content>
        </Header>
        <List bulleted className="about-me-list">
          <List.Item className="about-me-list-item">[Universidade de Brasília] - [Engenheiro de Controle e Automação] em [Engenharia Mecatrônica] - [2015 - 2021 | Atualmente Cancelado]</List.Item>
          <List.Item className="about-me-list-item">[Explorer] - [Rocketseat] - [2023 - 2024]</List.Item>
          {/* Adicione mais itens conforme necessário */}
        </List>

        <Header as="h3">
          <Icon name="code" className="about-me-icon"/>
          <Header.Content className="about-me-header">Habilidades</Header.Content>
        </Header>
        <List horizontal>
          <List.Item className="about-me-horiz-list-item">[Linguagem de Programação 1]</List.Item>
          <List.Item className="about-me-horiz-list-item">[Linguagem de Programação 2]</List.Item>
          <List.Item className="about-me-horiz-list-item">[Biblioteca ou Framework 1]</List.Item>
          <List.Item className="about-me-horiz-list-item">[Biblioteca ou Framework 2]</List.Item>
          {/* Adicione mais habilidades conforme necessário */}
        </List>
      </Container>
    </Segment>
  );
};

export default AboutMe;
