import React, { Component } from 'react';
import Header from './header/header';
import Banner from './banner/banner';
import Navigation from './navigation';
import FooterTop from './footer/footer_top';
import FooterBottom from './footer/footer_bottom';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Navigation />

                <div className="homeWrapper">
                    <div className="container">
                        Home
                    </div>
                </div>

                <div className="footer">
                    <FooterTop />
                    <FooterBottom />
                </div>
            </div>
        );
    }
}

export default Home;