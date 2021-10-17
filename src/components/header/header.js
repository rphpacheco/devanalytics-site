/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Button } from 'theme-ui';
import { useState } from 'react';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import Logo from 'components/logo';
import { NavLink } from 'components/link';

import menuItems from './header.data';

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };

  return (
    <DrawerProvider>
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <header
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
            <Logo isSticky={state.isSticky} sx={styles.logo} />
            <nav as="nav" sx={styles.navbar}>
              {menuItems.map(({ path, label }, i) => (
                <NavLink
                  key={i}
                  path={path}
                  label={label}
                  className={state.isSticky ? 'is-sticky' : ''}
                />
              ))}
            </nav>
            <div sx={styles.actions}>
            <Button variant="outlined" sx={styles.btnOutlined}>
              Cadastrar
            </Button>
            <div sx={styles.separated} />
            <Button variant="primary" sx={styles.button}>
              Entrar
            </Button>
            </div>
            <NavbarDrawer isSticky={state.isSticky} />
          </Container>
        </header>
      </Sticky>
    </DrawerProvider>
  );
}

const styles = {
  logo: {
    cursor: 'pointer',
    alignContent: 'left'
  },
  header: {
    backgroundColor: 'transparent',
    position: 'fixed',
    left: 0,
    right: 0,
    py: [5],
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
      py: [3],
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    a: {
      color: 'white',
      cursor: 'pointer',
      display: ['flex'],
      fontWeight: 400,
      padding: 0,
      paddingBottom: 2,
      marginTop: 2,
      borderBottom: "2px solid transparent",
      transition: 'all 0.3s ease-in-out 0s',
      ':hover': {
        borderColor: "#FF4D00"
      },
      '+ a': {
        ml: [null, null, null, null, 4, 7],
      },
    },
    '.is-sticky': {
      color: 'white',
    },
    '.active': {
      color: 'white',
      borderBottom: "2px solid #FF4D00"
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    display: ['none', null, null, null, 'inline-flex'],
    minHeight: 45,
    px: '18px',
    backgroundColor: 'transparent',
    border: '2px solid #FF4D00',
    marginLeft: '10px',
    marginRight: '10px',
    ':hover': {
      backgroundColor: "#FF4D00"
    },
  },
  btnOutlined: {
    display: ['none', null, null, null, 'inline-flex'],
    minHeight: 45,
    px: '18px',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginLeft: '10px',
    marginRight: '10px',
    color: 'white',
    ':hover': {
      borderColor: "#FF4D00"
    },
  },
  separated: {
    width: '1px',
    height: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    marginLeft: '10px',
    marginRight: '10px',
  }
};
