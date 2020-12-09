import axios from 'axios';
import 'dotenv/config';
import { Router } from 'express';

const router = Router();

const API_KEY = process.env.NASA;

const config = {
  method: 'get',
  url: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  headers: { },
};

router.get('/', async (request, response) => {
  axios(config)
    .then((nasa) => {
      response.send(nasa.data);
    })
    .catch((error) => {
      console.log(error);
      response.send(error);
    });
});

export default router;
