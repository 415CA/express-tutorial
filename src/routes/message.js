import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/', (request, response) => response.send(Object.values(request.context.models.messages)));

router.get('/:messageId', (request, response) => response.send(request.context.models.messages[request.params.messageId]));

router.post('/', (request, response) => {
  const id = uuidv4();
  const message = {
    id,
    text: request.body.text,
    userId: request.context.me.id,
  };

  request.context.models.messages[id] = message;

  return response.send(message);
});

router.delete('/:messageId', (request, response) => {
  const {
    [request.params.messageId]: message,
    ...otherMessages
  } = request.context.models.messages;

  request.context.models.messages = otherMessages;

  return response.send(message);
});

export default router;
