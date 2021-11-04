import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import AboutMe from 'sections/aboutme';
import Testimonials from 'sections/testimonials';
import Customers from 'sections/customers';
import Dashboard from 'sections/dashboard';
import UltimateFeatures from 'sections/ultimate-features';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="CRM Software Landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <AboutMe />
        <Customers />
        {/*<Dashboard />
        <UltimateFeatures />*/}
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}