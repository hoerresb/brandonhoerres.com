import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';


class Portfolio extends Component{
    constructor(props){
        super(props);
    };


    getStyles = () => {
        return{
            noPadding:{
                paddingLeft:'0',
                paddingRight:'0'
            },
            portfolioBg:{
                background: '#151515',
                paddingBottom: '28.1%',
                '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                    paddingBottom:'0%'
                }
            },
            overlay:{
                position: 'absolute',
                top:'50%',
                left:'0',
                right:'0',
                display:'block',
                overflow:'hidden',
                height:'100px',
                margin:'-56px auto 0',
                padding: '0 25px',
                fontSize:'40px',
                backgroundColor:'rgba(0,0,0,0.25)',
                zIndex:'2',
                color:'white',
                textAlign:'center',
                lineHeight:'88px'
            },
            span:{
                display:'block'
            },
            bg:{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                WebkitTransition: '-webkit-transform 1s ease',
                transition: 'transform 1s ease'
            },
            preview:{
                position: 'relative',
                display: 'block',
                paddingBottom: '35%',
                overflow:'hidden'
            },
            mutiny:{
                backgroundImage:'url(/img/mutinySite2.png)'
            },
            madera:{
                backgroundImage:'url(/img/madera2.png)'
            },
            scan:{
                backgroundImage:'url(/img/scanalyticsMobile.png)'
            },
            portfolioHeader:{
                color:'white',
                fontSize:'60px',
                marginTop:'10px',
                WebkitBoxShadow:'0px 10px 0px 0px #fff',
                MozBoxShadow:'0px 10px 0px 0px #fff',
                BoxShadow:'0px 5px 0px 0px #fff',
                '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                    textAlign:'center'
                }
            },
            portfolioText:{
                color:'white',
                fontWeight:'300',
                fontSize:'19px',
                marginTop:'30px',
                '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)':{
                    fontSize:'35px'
                }
            },
            comingSoon:{
                backgroundColor:'#333'
            },
            rowPadding:{
                marginLeft:'0',
                marginRight:'0'
            }

        }
    };



    render(){
        const defStyle = this.getStyles();
        return(
           <StyleRoot>
               <div className="portfolio row" id="portfolio" style={[defStyle.rowPadding]}>
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2" style={[defStyle.portfolioBg]}>
                       <h1 style={[defStyle.portfolioHeader]}>Portfolio</h1>
                       <p style={[defStyle.portfolioText]}>On the side, I helped some good friends create websites for their bike companies.
                           I regularly update and maintain <a href="http://mutinybikes.com" target="blank">Mutinybikes.com</a> and
                           <a href="http://maderabmx.net" target="blank"> Maderabmx.net</a>. In the near future,
                           Mutinybikes.com will be transitioning to wordpress for an ecommerce store, and ease of updating the site (without my help).
                       </p>
                       <p style={[defStyle.portfolioText]}>
                           For the last three years, I’ve been working for a small startup out of Milwaukee, WI called Scanalytics Inc.
                           I created unique data visualizations using <b>D3.js</b> and <b>Highcharts</b> on a large scale web application using <b>Laravel</b>, <b>MongoDB</b>, and <b>AngularJS</b>.
                           I was also tasked with creating a mobile app for android and ios that could connect a hardware device to the internet.
                           Using the hybrid mobile platform <b>Ionic</b> I was able to achieve this goal.
                       </p>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 demo" style={[defStyle.noPadding, defStyle.preview]}>
                       <a href="http://www.mutinybikes.com" target="blank">
                           <div className="overlay" style={[defStyle.overlay]}>
                               <span style={[defStyle.span]}>Mutiny Bikes</span>
                           </div>
                           <div className="bg" style={[defStyle.bg, defStyle.mutiny]}></div>
                       </a>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 demo" style={[defStyle.noPadding, defStyle.preview]}>
                       <a href="http://maderabmx.net" target="blank">
                           <div className="overlay" style={[defStyle.overlay]}>
                               <span style={[defStyle.span]}>Madera Bmx</span>
                           </div>
                           <div className="bg" style={[defStyle.bg, defStyle.madera]}></div>
                       </a>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 demo" style={[defStyle.noPadding, defStyle.preview]}>
                       <a href="https://play.google.com/store/apps/details?id=com.ionicframework.myapp123516&hl" target="blank">
                           <div className="overlay" style={[defStyle.overlay]}>
                               <span style={[defStyle.span]}>Scanalytics Mobile</span>
                           </div>
                           <div className="bg" style={[defStyle.bg, defStyle.scan]}></div>
                       </a>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 demo" style={[defStyle.noPadding, defStyle.preview]}>
                       <div style={[defStyle.overlay]}>
                           <span style={[defStyle.span]}>Coming Soon</span>
                       </div>
                       <div className="bg" style={[defStyle.bg, defStyle.comingSoon]}></div>
                   </div>
               </div>
           </StyleRoot>
        )
    }

}

export default Portfolio;