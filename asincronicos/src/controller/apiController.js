
const fetch = require('node-fetch')
const path = require('path')

const listApi = (req, res) => {

    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => {
         // return res.json(data)
          return res.render('api', {data})
         })
        .catch(err => console.error(err));
    
    }
    

    module.exports = {
         listApi

       
    }