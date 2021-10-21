/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import Testimonial from 'components/cards/testimonial';
import author1 from 'assets/images/clients/author1.png';
import author2 from 'assets/images/clients/author2.png';
import logo1 from 'assets/images/clients/logo1.png';
import logo2 from 'assets/images/clients/logo2.png';
import brefforts from 'assets/images/clients/brefforts.png';
import sancon from 'assets/images/clients/sancon.png';
import cassol from 'assets/images/clients/cassol.png';
import smartliv from 'assets/images/clients/smartliv.png';
import { rgba } from 'polished';

const data = [
  {
    id: 1,
    author: author1,
    logo: brefforts,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 2,
    author: author2,
    logo: sancon,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 3,
    author: author1,
    logo: cassol,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 4,
    author: author2,
    logo: smartliv,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
];

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: '#212122',
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
  },
  slider: {
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: 'flex',
      },
      button: {
        backgroundColor: rgba('#FFFFFF', 0.5),
        borderRadius: 50,
        border: 0,
        cursor: 'pointer',
        padding: 1,
        overflow: 'hidden',
        textIndent: '-9999em',
        width: 16,
        height: 10,
        outline: 0,
        margin: 1,
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: rgba('#2D3D50', 0.4),
        width: 20,
      },
    },
  },
};
