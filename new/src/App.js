import React, { Component }  from 'react';
import Navbar from './component/Navbar';
import './component/Nav.css'
import Index from './component/Index';
import Home from './component/Home';
// import Logo from './component/Logo';


// class App extends Component{
//          render(){
//             return
            // <div className='DivName'>
            //     <Hello name="kenia" Heroname="Strict Woman"/>
            //     <Hello name="Esther" Heroname="Wonder Woman"/>
            //     <Hello name="Bonte" Heroname="Strong Woman"/>
            //     <p>This is the child prop.</p>
            // </div>
           export default function App(){
                return(
                <React.Fragment>
                <Navbar />
                <div className="h1">
                    
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>CONTACT</li>
                </div>
                <Index />
            </React.Fragment>
                )
            }
 








