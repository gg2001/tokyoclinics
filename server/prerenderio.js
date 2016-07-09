// Use Prerender with your token
var prerenderio = Npm.require('prerender-node').set('prerenderToken', '0C4aTra5tVjBY3euTfyy'); 
// Feed it to middleware (app.use)
WebApp.connectHandlers.use(prerenderio);