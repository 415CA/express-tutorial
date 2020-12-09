import axios from 'axios';
import 'dotenv/config';
import { Router } from 'express';

const router = Router();

router.get('/:search', async (request, response) => {
  axios(`http://hn.algolia.com/api/v1/search?query=${request.params.search}`)
    .then((results) => {
      response.send(results.data.hits);
    })
    .catch((error) => {
      response.send(error);
    });
});

export default router;
