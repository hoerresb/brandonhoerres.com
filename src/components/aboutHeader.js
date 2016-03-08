import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';



class AboutHeader extends Component{
    constructor(props){
        super(props);
    }

    getStyles = () => {
        return{
            aboutBg:{
                WebkitTransition: '-webkit-transform 1s ease',
                transition: 'transform 1s ease',
                background: 'url(/img/brandonHoerresFace.png) no-repeat center center fixed',
                height:'400px'
            },
            preview:{
                position: 'relative',
                display: 'block',
                paddingBottom: '35%',
                overflow:'hidden'
            }
        }
    };


    render(){
        const defStyle = this.getStyles();
        return(
           <StyleRoot>
               <div className="aboutHeader" id="contact">
                   <div className="col-xs-12 col-ms-12 col-md-12 col-lg-12" style={[defStyle.preview]}>
                       <div className="bg" style={[defStyle.aboutBg]}></div>
                   </div>
               </div>
           </StyleRoot>
        )

    }
}

export default AboutHeader;