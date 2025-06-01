<h1>🚀 Projeto Cypress JavaScript BDD + Page Objects + Cypress Cloud</h1>

<h2>🧩 Visão Geral</h2>
<p>
  Este repositório utiliza <strong>Cypress</strong> para automação de testes E2E no padrão <strong>BDD</strong> (Behavior Driven Development), implementando o padrão <strong>Page Objects</strong> e integração com o <strong>Cypress Cloud</strong>.<br>
  Pronto para execuções locais ou em CI/CD via <strong>GitHub Actions</strong>!
</p>

<hr>

<h2>📂 Estrutura do Projeto</h2>
<ul>
  <li><code>cypress/</code>
    <ul>
      <li><code>e2e/</code> ➡️ Features e step-definitions (BDD)</li>
      <li><code>pages/</code> ➡️ Page Objects (mapeamento de páginas/componentes)</li>
    </ul>
  </li>
</ul>

<hr>

<h2>🏗️ Page Objects</h2>
<p>Crie uma classe para cada página, facilitando manutenção e reuso dos testes.</p>
<pre><code class="language-javascript">
export class CadastroPage {
    cadastro = 'a.elementor-button';
}
</code></pre>

<hr>

<h2>💻 Execução Local</h2>
<p>Crie um arquivo chamado <strong>run-cypress-local.sh</strong> com o conteúdo abaixo:</p>

<h2>🚀 Script de execução Cypress local</h2>
<p>#!/bin/bash</p>
<pre><code class="language-bash">

# Instala as dependências sem opcionais
npm install --omit=optional

# Verifica se o Cypress está corretamente instalado
npx cypress verify

# Executa todos os testes (headless)
npx cypress run
</code></pre>

<p>Dê permissão para executar:</p>
<pre><code class="language-bash">
chmod +x run-cypress-local.sh
</code></pre>

<hr>


<h2>🏁 Outros comandos úteis</h2>
<p>Abrir Cypress GUI:</p>
<pre><code class="language-bash">
npx cypress open
</code></pre>

<hr>

<p>
  🚨 <strong>Em caso de dúvidas, consulte este README ou abra uma issue. Boas automações!</strong> 🚨
</p>

## Licença
Copyright (c) 2025 Michael Alba.
Todos os direitos reservados.
