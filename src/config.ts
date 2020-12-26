import { config } from 'dotenv';
import { resolve } from 'path';
import { toNumber } from 'lodash';

try {
    const c = config({ path: resolve(process.cwd(), '.env') });
    if (c.error) {
        throw c.error;
    }
} catch (e) {
    console.error(e);
}

export const port = toNumber(process.env.PORT) || 80;
export const hostName = process.env.HOST || '';
