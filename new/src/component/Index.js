import React from "react"
import './Nav.css'
import '../App.css';
// import Logo from "./Logo";
const Index = () => {
    return React.createElement('div', {id:'container',className:'container'},
    React.createElement('div', {id:'lip1', className:'lip1'}),
    React.createElement('div', {id:'lip2', className:'lip2'}),
    React.createElement('div', {id:'lip3', className:'lip3'}),
    React.createElement('div', {id:'lip4', className:'lip4'}),
    React.createElement('div', {id:'lip5', className:'lip5'}))
}
export default Index;