import axios from 'axios';
import 'dotenv/config';
import { Router } from 'express';

const router = Router();

router.get('/:query', async (request, response) => {
  axios(`http://hn.algolia.com/api/v1/search?query=${request.params.query}`)
    .then((search) => {
      response.send(search.data.hits);
    })
    .catch((error) => {
      response.send(error);
    });
});

export default router;
