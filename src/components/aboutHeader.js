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
                background: 'url(/img/brandonHoerresFace.png) no-repeat 100% 50% fixed',
                height:'400px'
            },
            preview:{
                position: 'relative',
                display: 'block',
                overflow:'hidden'
            },
            overlayLeft:{
                position: 'absolute',
                top:'50%',
                left:'17%',
                display:'block',
                overflow:'hidden',
                height:'100px',
                margin:'-56px auto 0',
                padding: '0 25px',
                fontSize:'40px',
                zIndex:'2',
                color:'black',
                textAlign:'center',
                lineHeight:'88px'
            },
            overlayRight:{
                position: 'absolute',
                top:'20%',
                right:'17%',
                display:'block',
                overflow:'hidden',
                height:'100px',
                margin:'-56px auto 0',
                padding: '0 25px',
                fontSize:'40px',
                zIndex:'2',
                color:'black',
                textAlign:'center',
                lineHeight:'88px'
            },
            aboutH1:{
                fontSize:'70px',
                fontWeight:'300'
            }
        }
    };


    render(){
        const defStyle = this.getStyles();
        return(
           <StyleRoot>
               <div className="aboutHeader" id="contact">
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={[defStyle.preview]}>
                       <div className="bg" style={[defStyle.aboutBg]}></div>
                       <div style={[defStyle.overlayLeft]}>
                           <h1 style={[defStyle.aboutH1]}>Hi, I'm Brandon.</h1>
                       </div>
                   </div>
               </div>
           </StyleRoot>
        )

    }
}

export default AboutHeader;