import React, { Component } from 'react';
import Affix from 'react-overlays/lib/Affix';
import AutoAffix from 'react-overlays/lib/AutoAffix';
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
            {link: '#about', title: 'About'},
            {link: '#contact', title: 'Contact'}
        ];
        return (
           <div>
               <AutoAffix viewportOffsetTop={5} container={this}>
                   <Navbar>
                       <NavbarHeader href="#top" name="X"/>
                       <NavbarItems>
                           {navitems.map(item => {
                               return <NavItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
                           })}
                       </NavbarItems>
                   </Navbar>
               </AutoAffix>
           </div>
        );
    }
}




export default Header;