/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';

import StatItem from 'components/cards/stat-item';

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
};

const Customers = () => {
    return (
        <Grid sx={styles.statsGrid}>
            {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
                <StatItem stat={stat} />
            </TrackVisibility>
            ))}
        </Grid>
    )
}

export default Customers;

const styles = {
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