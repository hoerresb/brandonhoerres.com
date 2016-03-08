import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    getStyles = () => {

      return{
          fixedBG : {
              '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                  height:'30vh'
              },
              '@media (min-width: 768px)': {
                    height:'30vh'
              },
              '@media (min-width: 992px)': {
                  height: '100vh'
              }
          },
          h1Styles: {
              fontSize:'80px',
              color: 'white',
              marginBottom: '0',
              '@media (min-width: 768px)': {
                  fontSize: '50px',
                  textAlign: 'center'
              },
              '@media (min-width: 992px)': {
                  fontSize: '70px',
                  textAlign: 'left'
              },
              '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                  fontSize:'50px',
                  textAlign:'center'
              }

          },
          span:{
              fontSize:'30px',
              color:'white',
              '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                  textAlign:'center',
                  display:'block'
              },
              '@media (min-width: 768px)': {
                  display:'block',
                  textAlign: 'center'
              },
              '@media (min-width: 992px)': {
                  textAlign: 'left'
              }
          }
      }
    };


    render() {
        const defStyle = this.getStyles();
        return (
            <StyleRoot>
                <div className="fixed-bg main" style={[defStyle.fixedBG]}>
                    <div className="page-center">
                        <h1 style={[defStyle.h1Styles]}>Front End Web Developer</h1>
                        <span style={[defStyle.span]}>Professional Web Development and Design</span>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}
export default Main;