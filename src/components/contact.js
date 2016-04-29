import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {};
    };


    getStyles = () =>{
        return{
            contactH1:{
                fontWeight:'300'
            },
            contactParagraph:{
                '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                    fontSize:'26px'
                },
                '@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)': {
                    fontSize:'26px'
                }
            }
        }
    };


    render(){
        const defStyle = this.getStyles();
        return(
           <StyleRoot>
               <div className="page-center">
                   <div>
                       <h1 style={[defStyle.contactH1]}>Say Hello</h1>
                       <a style={[defStyle.contactParagraph]} href="mailto:brandonhoerres@gmail.com" className="btn btn-default btn-lg btn-block contact-button hvr-icon-wobble-horizontal">Send</a>

                   </div>
               </div>
           </StyleRoot>
        );
    }

}

export default Contact;