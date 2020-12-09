import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => response.send(request.context.models.users[request.context.me.id]));

export default router;
