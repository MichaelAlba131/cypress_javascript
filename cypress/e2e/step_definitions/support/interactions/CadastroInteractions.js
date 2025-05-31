import {Functions} from '../utils/Functions.js';
import {CadastroPage} from '../pageObjects/CadastroPage.js';

export class CadastroInteractions {
    constructor() {
        this.el = new CadastroPage();
    }

    visitar() {
        cy.visit("https://www.visiumkms.com/?gdmcid=88099e26-2780-4129-ae3b-bc985f944f7b");
        cy.wait(3000);
    }

    clickCustormerPortal(){
        Functions.clicarElementoComTexto(this.el.cadastro, 'Discover the Best EHS Software for Your Business');
    }

    preencherNome(nome){
        Functions.preencherCampoPorLabel('Name', 'Michael');
    }
}

