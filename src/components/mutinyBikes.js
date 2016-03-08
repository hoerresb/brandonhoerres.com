import React,  { Component } from 'react';

class Mutiny extends Component {
    constructor(props){
        super(props);
    }

    getStyles = () => {
      return{
          font:{
              color:'#333',
              textAlign:'center'
          },
          imgPadding:{
              paddingLeft:'0px'
          }
      }
    };

    render() {
        const defStyle = this.getStyles();
        return (
            <div id="portfolio">
               <div style={defStyle.imgPadding} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                   <img src="/img/mutinysite2.png" alt="Mutiny Bikes Website"/>
               </div>
            </div>
        );
    }
}

export default Mutiny;