`use strict`

const { default: axios } = require('axios');
const express = require('express');
const server = express();



const getJson = require('./data.json');
console.log(getJson);




const conData1 = new conData(getJson.title,getJson.poster_path,getJson.overview);



// http://localhost:3000/
server.get('/',(req,res)=>{
    res.send(conData1);
});


// http://localhost:3000/favorite
server.get('/favorite',(req,res)=>{
    res.send("Welcome to Favorite Page");
})

server.get('/trending',trendingHandler);


const axios = require('axios');
server.get('/newMovies',movieHandler);
require('dotenv').config();



function conData(title,poster_path,overview){
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
    return (this.title);
}

function handleError(req, res, par3) {
    return(`{ 
        "status": 404,
        "responseText": "page not found error" 
    }`);
}


function Movie(id ,title ,release_date ,poster_path ,overview){
    this.id = id;
    this.title = title;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.overview = overview;
}


function movieHandler(req,res){
    const APIKey= process.env.APIKey;
    const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=${APIKey}&language=en-US';
    
    let axiosMovie = axios.get(url);
    console.log(axiosMovie.data)
    .then((result)=>{
        let movResult =  result.data.recipes.map((item) => {
            let newMovie = new Movie(item.id, item.title, item.release_date, item.poster_path, item.overview);
            return newMovie;
        })
        res.send(movResult);
    })
}


function trendingHandler(req,res){
    let trending ; 
}



const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`running on port ${PORT}`);
});