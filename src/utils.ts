import {} from 'lodash';
import { METHOD } from './types';

export const sharedResponse = (controller: string, method: string = METHOD.GET, path: string = '/') => ({
    controller,
    path,
    method,
    timeString: new Date().toISOString(),
    timeInt: new Date().getTime(),
});
