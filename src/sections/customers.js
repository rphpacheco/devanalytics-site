/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';

import Testimonials from 'sections/testimonials';
import StatItem from 'components/cards/stat-item';
import SectionHeading from 'components/section-heading';

const data = {
  stats: [
      {
          id: 1,
          value: 7,
          suffix: '',
          title: 'Clientes',
      },
      {
          id: 2,
          value: 15,
          suffix: '',
          title: 'Projetos Entregues',
      },
      {
          id: 3,
          value: 5,
          suffix: 'K',
          title: 'Inscritos no Canal',
      },
      {
          id: 4,
          value: 150,
          suffix: 'K',
          title: 'Visualizações',
      },
  ],
  statsGrid: {
    backgroundColor: '#212122',
    gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
    justifyContent: 'center',
    gridTemplateColumns: [
        'repeat(2, 120px)',
        null,
        null,
        'repeat(4, 130px)',
        'repeat(4, 150px)',
    ],
    mt: [60],
    mb: [0],
},
};

const Customers = () => {
  return (
    <section id="customers" sx={styles.section}>
      <Container>
        <Box sx={styles.metrics}>
          <SectionHeading
            sx={styles.heading}
            title="Nossos Números"
          />
          <Box sx={styles.numbers}>
            {data.stats.map((stat) => (
              <TrackVisibility key={stat.id} once>
                  <StatItem stat={stat} />
              </TrackVisibility>
            ))}
          </Box>
        </Box>
        <Box sx={styles.grid}>
          <SectionHeading
            sx={styles.heading}
            title="Nossos Clientes"
            description="Estes são os clientes que confiaram no nosso trabalho e na forma de transformar dados em inteligência."
            //learnMore="Explore all add-on"
          />
        </Box>
      </Container>
      <Testimonials />
    </section>
  );
};

export default Customers;

const styles = {
  grid: {
    paddingTop: 4,
    paddingBottom: 6,
  },
  metrics: {
    paddingBottom: 4
  },
  numbers: {
    paddingTop: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  section: {
    pt: [6, null, null, 8, 10, 10],
    pb: [8, null, null, 12, null, 14],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    p: {
      color: '#C3C3C3',
    },
    h3: {
      fontSize: [3, null, null, 6, 8],
      color: 'white',
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
  },
};
