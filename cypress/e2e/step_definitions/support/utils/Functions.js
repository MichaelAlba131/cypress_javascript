export class Functions {

    /**
     * Método dinâmico para preencher campos em qualquer selector
     * @param {string} seletor - Seletor CSS para o campo
     * @param {string} valor - Valor a ser preenchido
     */
    static preencherCampo(seletor, valor) {
        cy.get(seletor)
            .should('be.visible')
            .clear()
            .type(valor);
    }

    /**
     * Método dinâmico para clicar em qualquer elemento via seletor
     * @param {string} seletor - Seletor CSS para o elemento
     */
    static clicarElemento(seletor) {
        cy.get(seletor, { timeout: 10000 }) // espera até 10s se necessário
            .should('exist')
            .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
    }

    /**
     * Método dinâmico para clicar em um elemento contendo texto específico
     * @param {string} seletor - Ex: 'button', 'a', 'div'
     * @param {string} texto - Texto visível
     * @param {object} options - Opções extras do cypress (opcional)
     */
    static clicarElementoComTexto(seletor, texto, options = {}) {
        cy.contains(seletor, texto, options)
            .click({ force: true });
    }

    static preencherCampoPorLabel(label, valor) {
        cy.contains('label', label).then(() => {
            cy.get('label')
                .filter((i, el) => el.innerText.includes(label)) // garante que o texto é parcial
                .last() // pega o último label encontrado
                .invoke('attr', 'for')
                .then((id) => {
                    cy.get(`input#${id}`)
                        .last()// garante que é um input com o id do for
                        .scrollIntoView()
                        .should('be.visible')
                        .clear()
                        .type(valor);
                });
        });
    }
}

