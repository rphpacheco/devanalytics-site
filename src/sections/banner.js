/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { rgba } from 'polished';
import { jsx, Flex, Container, Heading, Text, Button } from 'theme-ui';
import Image from 'components/image';
import Play from 'components/icons/play';
import dynamic from 'next/dynamic';
import ListItems from 'components/cards/list-items'
// import ModalVideo from 'react-modal-video';
import { BsCollectionPlay, BsCloud } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import { FaUserTie } from 'react-icons/fa'

const ModalVideo = dynamic(
  () => {
    return import('react-modal-video');
  },
  { ssr: false }
);
import banner from 'assets/images/banner.png';

import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';

const data = [
  {
    id: 1,
    icon: BsCollectionPlay,
    title: 'Cursos Online',
    description: `Disponibilizamos em nossa
    plataforma, uma gama de 
    cursos que vão do 
    desenvolvimento de
    softwares a análises e 
    visualização de dados.`,
    moreLink: '#',
  },
  {
    id: 2,
    icon: BiMoviePlay,
    title: 'Conteúdo Gratuito',
    description: `Inscreva-se em nosso canal 
    no YouTube, onde 
    constantemente estamos 
    disponibilizando muito 
    material de altíssima
    qualidade!.`,
    moreLink: '#',
  },
  {
    id: 3,
    icon: BsCloud,
    title: 'Soluções SaaS',
    description: `Disponibilizamos serviços 
    voltados a automação de 
    processos envolvendo 
    soluções de analytics
    tudo como Software as
    a Service.`,
    moreLink: '#',
  },
  {
    id: 4,
    icon: FaUserTie,
    title: 'Consultorias',
    description: `Prestamos serviços de 
    consultorias a empresas
    que estejam 
    procurando soluções em 
    projetos de visualização de
    dados.`,
    moreLink: '#',
  }
]

const Banner = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section id="home" sx={styles.section}>
      <Container sx={styles.container}>
        <div sx={styles.content}>
          <Heading as="h1">
            Domine a carreira de Análise e Visualização de Dados
          </Heading>
          <Text as="p">Chegue ao próximo nível através dos nossos cursos e conteúdos gratuito.
          Desde a extração, tranformação, modelagem, até a visualização. Você terá domínio
          pleno sobre as tecnologias mais usadas no mercado.
          Seja um profissional requisitado no merdado de dados!</Text>
          <Flex sx={styles.buttonGroup}>
            <Button variant="primary" sx={styles.btnPrimary}>
              Quero fazer parte disso!
            </Button>
            <Button
              variant="outlined"
              sx={styles.btnOutlined}
              onClick={handleClick}
            >
              Veja nossos conteúdos <Play fill="#FF4D00" />
            </Button>
            <ModalVideo
              channel="youtube"
              isOpen={videoOpen}
              videoId="ZNA9rmDsYVE"
              onClose={() => setVideoOpen(false)}
            />
          </Flex>
        </div>
        <Flex as="figure" sx={styles.illustration}>
          {/*<Image src={banner} alt="banner" />*/}
          <div sx={styles.wrapper}>
          {data.map(item => (
            <ListItems 
              key={item.id} 
              data={item}
            />
          ))}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundColor: '#212122',
    // pt: [8, null, null, null, 10, 14],
    // pb: [8, null, null, null, 10, 14],
    position: 'relative',
    zIndex: 0,
    '::before': {
      backgroundColor: 'white',
      content: `''`,
      position: 'absolute',
      height: [30, null, null, 70, 85, 120],
      bottom: 0,
      width: '100%',
      zIndex: -1,
    },
  },
  container: {
    minHeight: [null, null, null, null, null, '100vh'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  content: {
    maxWidth: [null, null, null, 570, 690],
    textAlign: 'center',
    marginTop: [18, null, null, 22, 180],
    h1: {
      color: 'white',
      fontSize: [7, null, null, 12, 14],
      lineHeight: 1.35,
    },
    p: {
      color: rgba('white', 0.8),
      fontSize: [1, null, null, 2],
      marginTop: [3, null, null, 6],
    },
  },
  wrapper: {
    mt: 6,
    gap: [6, null, null, '60px 20px'],
    display: 'flex',
    maxWidth: 1175,
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: [6, null, null, 8],
    position: 'relative',
    zIndex: 2,
    button: {
      px: ['12px', null, null, '18px'],
    },
  },
  btnPrimary: {
    backgroundColor: '#FF4D00'
  },
  btnOutlined: {
    borderColor: rgba('white', 0.25),
    color: 'white',
    ml: 3,
    svg: {
      ml: 2,
    },
    ':hover': {
      borderColor: "#FF4D00"
    },
  },
  illustration: {
    transform: ['scale(1.20)', null, null, 'scale(0.80)'],
    alignItems: 'center',
    display: 'flex',
    marginTop: [2, null, null, -4, -3]
  },
};
