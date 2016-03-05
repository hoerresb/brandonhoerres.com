import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

class Navbar extends Component {
    displayName = 'Navigation bar';

    static propTypes = {
        navStyle:  React.PropTypes.object,
        contStyle: React.PropTypes.object,
        children:  React.PropTypes.node
    };

    state = {
        collapseIn: false
    };

    getStyles = () => {
        return {
            navbar: {
                backgroundColor: '#333',
                border: '1px solid #333',
                borderRadius: '0px',
                position: 'relative',
                top: '0px',
                minHeight: '50px',
                marginBottom: '20px',
                display: 'block',
                boxSizing: 'border-box'
            },
            container: {
                paddingRight: '15px',
                paddingLeft: '15px',
                marginRight: 'auto',
                marginLeft: 'auto',
                boxSizing: 'border-box',

                '@media (min-width: 768px)': {
                    width: '750px'
                },
                '@media (min-width: 992px)': {
                    width: '970px'
                },
                '@media (min-width: 1200px)': {
                    width: '1170px'
                }
            },
            pseudoBefore: {
                display: 'table',
                content: ' ',
                boxSizing: 'border-box'
            },
            pseudoAfter: {
                clear: 'both',
                display: 'table',
                content: ' ',
                boxSizing: 'border-box'
            }
        };
    };

    renderChildren = () => {
        const {children} = this.props;
        return React.Children.map(children, (child) => {
            return React.cloneElement(child,
                {
                    navbarToggle: this.navbarToggle,
                    collapseIn: this.state.collapseIn
                }
            );
        });
    };

    navbarToggle = () => {
        this.setState({collapseIn: !this.state.collapseIn});
    };

    render() {
        const defStyle = this.getStyles();
        const {navStyle, contStyle} = this.props;
        return (
           <StyleRoot>
               <nav ref="navbar" style={[defStyle.navbar, navStyle && navStyle]}>
                   <span style={[defStyle.pseudoBefore]} />
                   <div ref="container" style={[defStyle.container, contStyle && contStyle]}>
                       <span style={[defStyle.pseudoBefore]} />
                       {this.renderChildren()}
                       <span style={[defStyle.pseudoAfter]} />
                   </div>
                   <span style={[defStyle.pseudoAfter]} />
               </nav>
           </StyleRoot>
        );
    }
}

export default Navbar;