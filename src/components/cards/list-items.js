/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Link as A } from 'theme-ui';
import Link from 'next/link';
import Play from 'components/icons/play';

const ListItems = ({ data, ...props }) => {
    return (
        <Box sx={styles.feature} {...props}>
            <Box 
                as="figure"
                p={2}
                sx={styles.icons}
            >
                <data.icon size="32px" color="#FF4D00" />
            </Box>
            <Box mt={4}>
                <Heading as="h4">{data?.title}</Heading>
                <Text as="p">{data?.description}</Text>
                <Link href={data.moreLink}>
                <A sx={styles.learnMore}>
                    <span>Saiba mais</span> <Play width={14} height={14} fill="#FF4D00" />
                </A>
                </Link>
            </Box>
        </Box>
    );
};

export default ListItems;

const styles = {
    feature: {
        maxWidth: 280,
        padding: '32px',
        backgroundColor: "#353437",
        border: '1px solid #3D3C42',
        borderRadius: '10px',
        display: [null, null, null, null, null, 'flex'],
        flexDirection: [null, null, null, null, null, 'column'],
        textAlign: ['center', null, null, null, null, 'left'],
        figure: {
            minWidth: [42, null, null, 70],
            mr: [null, null, null, null, null, 6],
            mb: [3, null, null, null, null, 0],
        },
        h4: {
            fontSize: [2, null, null, 3],
            fontWeight: 'bold',
            lineHeight: 1.68,
            color: '#E1E1E6',
            mb: 3,
        },
        p: {
            fontSize: [1, null, null, 2],
            lineHeight: 1.88,
            color: '#E1E1E6',
        },
    },
    learnMore: {
        color: '#FF4D00',
        cursor: 'pointer',
        fontSize: [1, null, null, '13px'],
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        letterSpacing: 1,
        lineHeight: 1,
        textTransform: 'uppercase',
        mt: 4,
        svg: {
        ml: 2,
        },
    },
    icons: {
        width: '65px',
        height: '65px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF4D004D',
        borderRadius: '100%'
    }
};
