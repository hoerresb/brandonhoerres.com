import React, { Component } from 'react';
import Radium from 'radium';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getStyles = () => {

      return{
          fixedBG : {
              background: 'url(/img/riderBackground.png) no-repeat center center fixed'
          },
          h1Styles: {

          }
      }
    };


    render() {
        const defStyle = this.getStyles();
        return (
            <div className="fixed-bg main">
                <div className="page-center">
                    <h1>Front End Web Developer</h1>
                    <span>Professional Web Development and Design</span>
                </div>
            </div>
        );
    }
}

Main = Radium(Main);
export default Main;