import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message && err.message.includes('at <unknown> (https://www.santander.com.br/')) {
        return false;
    }
    if (err.message.includes('angular is not defined')) {
        return false;
    }
});

