/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Flex, Container, Heading, Text, Button, Link } from 'theme-ui';
import Image from 'components/image';
import Play from 'components/icons/play';
import aboutme from 'assets/images/aboutme.png';
import { BsLinkedin } from 'react-icons/bs'
import { GoMarkGithub } from 'react-icons/go';

const AboutMe = () => {
  return (
    <section id="about" sx={styles.section}>
      <Container sx={styles.container}>
        <Flex as="figure" sx={styles.illustration}>
          <Flex sx={styles.illustration.container}> 
            <Image src={aboutme} alt="aboutme" width="150px" />
            <Flex
              sx={styles.illustration.description}
            >
              <Heading as="h2">Raphael Pacheco</Heading>
              <Text>devAnalytics</Text>
            </Flex>
          </Flex>
          <Flex sx={styles.illustration.buttons}>
            <Link
              href="https://www.linkedin.com/in/raphael-pacheco-702a3b49/"
              target="_blank"
              alt="Raphael - LinkedIn"
              sx={styles.link}
            >
              <Button
                variant="outlined"
                sx={styles.btnOutlined}
              >
                LINKEDIN <BsLinkedin fill="#FF4D00" />
              </Button>
            </Link>
            <Link
              href="https://www.github.com/rphpacheco"
              target="_blank"
              alt="Raphael - GitHub"
              sx={styles.link}
            >
              <Button
                variant="outlined"
                sx={styles.btnOutlined}
              >
                GITHUB <GoMarkGithub fill="#FF4D00" />
              </Button>
            </Link>
          </Flex>
        </Flex>
        <div sx={styles.content}>
            <Heading as="h1">
              Fala pessoal, tudo bem?
            </Heading>
            <Text as="p">Raphael Pacheco é Analista de BI, FullStack Developer, consultor, músico  e 
            criador de conteúdo.
            Trabalha ná área de dados desde 2010, atuando em projetos para grandes
            empresas como Santander, BR Distribuidora, Volkswagen, Mercedes Benz,
            Algar Telecom, Thomson Reuters, Sebrae, Portobello e etc.
            Através do canal devAnalytics no YouTube, começou a compartilhar seu
            conhecimento adquirido em sua trajetória profissional e agora está 
            disponibilizando também cursos completos para quem quer atuar no ramo 
            de desenvolvolvimento de aplicações web e análise e visualização de dados.</Text>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;

const styles = {
  link: {
    textDecoration: "none"
  },
  section: {
    backgroundColor: '#131313',
    // pt: [8, null, null, null, 10, 14],
    // pb: [8, null, null, null, 10, 14],
    position: 'relative',
    zIndex: 0,
    '::before': {
      backgroundColor: 'white',
      content: `''`,
      position: 'absolute',
      height: [0, null, null, 0, 0, 0],
      bottom: 0,
      width: '100%',
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, null, null, '100vh'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  content: {
    maxWidth: [null, null, null, 470, 560],
    textAlign: 'center',
    marginTop: [0, null, null, 0, -20],
    h1: {
      color: 'white',
      fontSize: [7, null, null, 12, 14],
      lineHeight: 1.55,
    },
    p: {
      color: rgba('white', 0.8),
      fontSize: [1, null, null, 2],
      marginTop: [4, null, null, 3],
    },
  },
  btnOutlined: {
    width: '22vw',
    borderColor: rgba('white', 0.25),
    color: 'white',
    mt: 10,
    ml: 0,
    svg: {
        ml: 4,
    },
    ':hover': {
      borderColor: "#FF4D00"
    },
  },
  illustration: {
    transform: ['scale(1.20)', null, null, 'none'],
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    marginTop: [0, null, null, 0, -20],
    img: {
        borderRadius: '100%',
    },
    container: {
      alignItems: 'center'
    },
    buttons: {
      flexDirection: 'column',
      margin: 0
    },
    description: {
      margin: 6,
      flexDirection: 'column',
      h2: {
        color: '#999999'
      },
      color: '#666666'
    }
  },
};
