import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Header from '../Header';
import Footer from '../Footer';





const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
        <Header />
            {/* Might want to put your header bar here... */}
        </div>
        <div className="appContent">
            {children}
        </div>
        <Footer />
        {/* And a footer here, but not on the login route... */}
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
