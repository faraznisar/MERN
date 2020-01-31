import React from 'react';
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'
import NavLinks from './NavLinks'
import './MainNavigation.css'

const MainNavigation = props => {
    return (
        <React.Fragment>
            <SideDrawer>
                <NavLinks />
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn">
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to='/'>
                        MyPlaces
                </Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation