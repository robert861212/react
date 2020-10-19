/*
This file is the main dom rendering file
*/
// import '@babel/polyfill';
import React from 'react'
import { render } from 'react-dom'
import App from './App'

const root = document.getElementById("app")

render(<App/>, root)
