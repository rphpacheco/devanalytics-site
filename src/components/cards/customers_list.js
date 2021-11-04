/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';

const Testimonial = ({ data }) => {
    return (
        <Box sx={styles.container}>
            <Image src={data.logo} alt={data.authorName} />
        </Box>
    );
};

export default Testimonial;

const styles = {
    container: {
        width: '300px',
        width: '220px',
        color: '#c3c3c3',
        display: [null, null, null, 'flex'],
        px: [null, null, null, 10, 0],
        mr: [null, null, null, null, 4, 0],
        p: {
            fontSize: [2, null, null, 3],
            lineHeight: 1.94,
            letterSpacing: 'heading',
            color: 'white',
        },
        h4: {
            color: 'heading',
            mt: 4,
        },
        span: {
            display: 'inline-flex',
            mt: '8px',
        },
    },
};
