

import navbar from './components/navbar.js'

import {appendData} from './scripts/append.js'

let nav=document.getElementById('navbar');

nav.innerHTML= navbar();


const getData = async() => {


  let res = await fetch(`http://localhost:3000/posts`) ;

    let data= await res.json();


    console.log(data);

    let post=document.getElementById('posts');

    appendData(data,post);


}

getData();