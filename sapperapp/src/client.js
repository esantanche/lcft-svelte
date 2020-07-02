import * as sapper from '@sapper/app';
import * as Sentry from '@sentry/browser';

// FIXME TODO re-enable Sentry

//Sentry.init({ dsn: 'https://563be7e4991548638a88003e2a9ba25c@sentry.io/5182677' });

sapper.start({
	target: document.querySelector('#sapper')
});