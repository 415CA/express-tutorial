import axios from 'axios';
import 'dotenv/config';
import { Router } from 'express';

const router = Router();

const ENDPOINTS = {
  comic: 'https://gateway.marvel.com:443/v1/public/comics',
  comics: 'https://gateway.marvel.com:443/v1/public/comics',
  character: 'https://gateway.marvel.com:443/v1/public/characters',
  characters: 'https://gateway.marvel.com:443/v1/public/characters',
};

router.get('/', async (request, response) => {
  axios.get('https://api.kanye.rest')
    .then((kanye) => (
      response.send(kanye.data.quote)
    ));
});

router.get('/series', async (request, response) => {
  axios.get(ENDPOINTS.character, {
    headers: {
      apiKey: process.env.MARVEL,
    },
  })
    .then((data) => (
      console.log(data.data),
      response.send(data.data)
    ));
});

export default router;
