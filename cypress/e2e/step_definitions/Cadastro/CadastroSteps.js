const {Given, When} = require('@badeball/cypress-cucumber-preprocessor');
import {CadastroInteractions} from '../support/interactions/CadastroInteractions';

const cadastro = new CadastroInteractions();

Given("que estou na página VisiumKMS", () => {
    cadastro.visitar();
});

When("clicar em Discover the Best EHS Software for Your Business", () => {
    cadastro.clickCustormerPortal();
});

When("preencher o nome {string}", (nome) => {
    cadastro.preencherNome(nome);
})
