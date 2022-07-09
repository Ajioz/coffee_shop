/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'ajioz-fsnd.eu', // the auth0 domain prefix
    audience: 'https://coffee/api/auth', // the audience set for the auth0 app
    clientId: 'zZbAveERtGR0KzuTPnfNpPG2DS6D9Gm9', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8080/response', // the base url of the running ionic application. 
  }
};