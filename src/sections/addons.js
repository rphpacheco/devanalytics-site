/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import addons from 'assets/images/addons.png';

const Addons = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <SectionHeading
            sx={styles.heading}
            title="Nossos Clientes"
            description="Estes são os clientes que confiaram no nosso trabalho e na forma de transformar dados em inteligência."
            //learnMore="Explore all add-on"
          />
          <Flex sx={styles.illustration}>
            {/* <Image src={addons} alt="addons" /> */}
          </Flex>
        </Box>
      </Container>
    </section>
  );
};

export default Addons;

const styles = {
  section: {
    pt: [6, null, null, 8, 10, 16],
    pb: [8, null, null, 12, null, 8],
  },
  grid: {
    display: 'grid',
    alignItems: 'center',
    gap: 6,
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '650px 1fr'],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    p: {
      color: '#C3C3C3',
    },
    h3: {
      fontSize: [3, null, null, 6, 11],
      color: 'white',
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: 'center',
  },
};
