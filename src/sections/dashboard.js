/** @jsxRuntime classic */
/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Container, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import PieChart from 'components/icons/pie-chart';
import Cog from 'components/icons/cog';
import Currency from 'components/icons/currency';
import Briefcase from 'components/icons/briefcase';
import Play from 'components/icons/play';
import Analytics from 'components/icons/analytics';
import TabButton from 'components/tabs/tab-button';

import reports from 'assets/images/reports.png';
import apis from 'assets/images/apis.png';
import embedded from 'assets/images/embedded.png';
import consulting from 'assets/images/consulting.png';

const data = [
  {
    id: 1,
    title: 'Reports Customizados',
    description: 'Criamos relatórios personalizados com dados de sua empresa.',
    icon: <PieChart />,
    image: reports,
  },
  {
    id: 2,
    title: 'Consultas em APIs',
    description: 'Realizamos integrações de dados vindos de APIs externas ou internas.',
    icon: <Cog />,
    image: apis,
  },
  {
    id: 3,
    title: 'Power BI Embedded',
    description: 'Visualize seus reports em seu sistema interno com o Power BI Embedded.',
    icon: <Analytics />,
    image: embedded,
  },
  {
    id: 4,
    title: 'Consultorias',
    description: 'Realizamos consultorias na área de dados para empresas de todos os portes.',
    icon: <Briefcase />,
    image: consulting,
  },
];

const Dashboard = () => {
  return (
    <section sx={styles.section} id="services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Confira os nossos serviços"
          //description=""
        />
        <Tabs sx={styles.dashboardTabs} animated={{ tabPane: true }}>
          {data.map((tab) => (
            <TabPane key={tab.id} tab={<TabButton tab={tab} />}>
              <Text as="p" /* sx={styles.description} */>
                {tab.description}
              </Text>
              <Image src={tab.image} alt={tab.title} />
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: rgba('#212122', 0.03),
    pt: [8, null, null, 12],
    pb: [6, null, null, null, 12],
  },
  heading: {
    marginBottom: [6, null, null, 12],
    maxWidth: ['none', null, null, 565, null, 'none'],
    p: {
      color: rgba('white', 0.7),
      maxWidth: 445,
    },
  },
  dashboardTabs: {
    'p': {
      fontWeight: [400, null, null, 500],
      fontSize: 2,
      color: rgba('white', 0.7),
      textAlign: 'center',
      margin: 4,
    },
    border: 0,
    '.rc-tabs-nav-wrap': {
      justifyContent: 'center',
      marginBottom: 8,
      overflow: 'unset',
    },
    '.rc-tabs-ink-bar': {
      display: 'none',
    },
    '.rc-tabs-tabpane, .rc-tabs-tab-btn': {
      outline: 0,
    },
    '.rc-tabs-nav-list': {
      color: rgba('white', 0.8),
      flexWrap: ['wrap', null, null, 'unset'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      ':nth-of-type(1),:nth-of-type(2)': {
        mb: [4, null, null, 0],
      },
      ':nth-of-type(2)': {
        ml: [4, null, null, 0],
      },
      ':nth-of-type(4)': {
        ml: [2, null, null, 0],
      },
      '+ .rc-tabs-tab': {
        ml: [null, null, null, 4, 8],
      },
    },
    '.rc-tabs-tab-active': {
      color: 'textSecondary',
      backgroundColor: 'white',
      fontWeight: [400, null, null, 500],
      boxShadow: '0px 4px 6px rgba(125, 128, 170, 0.08)',
      borderRadius: 5,
      padding: ['10px 10px', null, null, '10px 18px'],
    },
  },
};
