/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import CustomersList from 'components/cards/customers_list';
import author1 from 'assets/images/clients/author1.png';
import author2 from 'assets/images/clients/author2.png';
import brefforts from 'assets/images/clients/brefforts.png';
import sancon from 'assets/images/clients/sancon.png';
import cassol from 'assets/images/clients/cassol.png';
import smartliv from 'assets/images/clients/smartliv.png';
import hempmeds from 'assets/images/clients/hempmeds.png';
import qualirede from 'assets/images/clients/qualirede.png';
import attoagricola from 'assets/images/clients/attoagricola.png';

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
  {
    id: 4,
    author: author2,
    logo: hempmeds,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 4,
    author: author2,
    logo: qualirede,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 4,
    author: author2,
    logo: attoagricola,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
];

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
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
            <CustomersList key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: "#3534374D",
    borderTop: '1px solid #3D3C42',
    borderBottom: '1px solid #3D3C42',
    pt: [12, null, null, null, 10, 6],
    pb: [8, null, null, null, 10, 8],
  },
  slider: {
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
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
        backgroundColor: '#FF4D00',
        //backgroundColor: rgba('#FFFFFF', 0.5),
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
        backgroundColor: rgba('#FF4D00', 0.15),
        width: 20,
      },
    },
  },
};
