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
            }

        }
    };

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };
    handleNameChange = (e) => {
         this.setState({name: e.target.value});
    };
    handleTextArea = (e) => {
        this.setState({textArea: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.name);
        console.log(this.state.textArea);
    };


    render(){
        const defStyle = this.getStyles();
        return(
           <StyleRoot>
               <div className="page-center">
                   <div>
                       <h1 style={[defStyle.contactH1]}>Say Hello</h1>
                       <p>
                           Feel free to contact me through this form about contract work, coding questions, or to just say hi.
                       </p>

                   </div>
                   <form>
                       <input type="hidden"/>
                       <fieldset className="form-group">
                           <label>Name</label>
                           <input type="text" className="form-control"  placeholder="Enter Name" onChange={this.handleNameChange} />
                       </fieldset>
                       <fieldset className="form-group">
                           <label>Email address</label>
                           <input type="email" className="form-control"  placeholder="Enter email" onChange={this.handleEmailChange} />
                           <small className="text-muted">I'll never share your email with anyone else.</small>
                       </fieldset>
                       <fieldset className="form-group">
                           <label>Describe the nature of your inquiry</label>
                           <textarea className="form-control" rows="3" onChange={this.handleTextArea}></textarea>
                       </fieldset>
                       <button className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
                   </form>
               </div>
           </StyleRoot>
        );
    }

}

export default Contact;