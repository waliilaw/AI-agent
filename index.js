import OpenAI from "openai";

const OPEN_API_KEY = process.env.OPEN_API_KEY






function getWeatherDeatils(city = ''){
    if(city.toLowerCase() === 'delhi') return '12 C'
     if(city.toLowerCase() === 'gaya') return '11 C'
      if(city.toLowerCase() === 'bihar') return '1 C'
       if(city.toLowerCase() === 'india') return '15 C'
    }