import "core-js/es/array";
import "core-js/modules/es.promise";
import App from './App.svelte';

const app = new App({
	target: document.body,
});

window.app = app;

export default app;