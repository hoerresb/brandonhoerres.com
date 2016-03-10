import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import NavbarHeader from './navbar/NavbarHeader';
import NavbarItems from './navbar/NavbarItems';
import NavItem from './navbar/NavItem';

class Header extends Component {
    constructor(props){
        super(props);
    }
    render() {

        const navitems = [
            {link: '#portfolio', title: 'Portfolio'},
            {link: '#contact', title: 'Contact'}
        ];
        return (
           <div>
               <Navbar>
                   <NavbarHeader href="#top" name="X"/>
                   <NavbarItems>
                       {navitems.map(item => {
                           return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
                       })}
                   </NavbarItems>
               </Navbar>
           </div>
        );
    }
}




export default Header;