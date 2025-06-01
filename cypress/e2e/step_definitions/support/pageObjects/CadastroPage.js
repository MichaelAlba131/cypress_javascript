export class CadastroPage {
    cadastroSelector = 'a.elementor-button';

    cadastro() {
        return cy.get(this.cadastroSelector);
    }
}
