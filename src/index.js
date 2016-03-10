import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import Portfolio from './components/portfolio';
import AboutHeader from './components/aboutHeader';
import Contact from './components/contact';
// Create a new component. This component should produce some HTML
// const is an es6 piece of syntax
// const is similar to var
// const -> constant. It's never going to change
// App is a class
// it produces instances
class App extends Component{ // fat arrow is es6 syntax. Same as using 'function()'
   constructor(props){
       super(props);
   };


    render(){
       return (
           <div>
               <Main />
               <Header />
               <Portfolio />
               <AboutHeader />
               <Contact />
           </div>
       );// this is jsx. Looks like HTML but is really just javascript.
   }
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.main'));