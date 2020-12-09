import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => response.send(Object.values(request.context.models.users)));

router.get('/:userId', (request, response) => response.send(request.context.models.users[request.params.userId]));

export default router;
