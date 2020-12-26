import express from 'express';
import { isEmpty, isNil, toLower, toUpper } from 'lodash';
import { sharedResponse } from '../utils';
import { METHOD } from '../types';
const router = express.Router();
export const controller = 'echo';

const echoHandler = (controller: string, path: string = '/') => (req: express.Request, res: express.Response) => {
    const { method, query, body } = req;
    const isGet = toUpper(method) === METHOD.GET;
    const content = isGet ? query : body;
    if (isEmpty(content)) return res.json(sharedResponse(controller, toUpper(method), path));
    res.json({ ...sharedResponse(controller), ...content });
};

router.get('/', echoHandler(controller));
router.post('/', echoHandler(controller));
router.delete('/', echoHandler(controller));
router.put('/', echoHandler(controller));

export default router;
