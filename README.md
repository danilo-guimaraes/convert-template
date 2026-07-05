# 💱 Convert App — Rocketseat

O **Convert** é um conversor de moedas moderno e prático que transforma valores em Dólar (USD), Euro (EUR) e Libra Esterlina (GBP) para Real Brasileiro (BRL) em tempo real, utilizando taxas de câmbio fictícias estruturadas para o desafio.

Este projeto foi desenvolvido como um desafio prático durante o curso da **Rocketseat**. Utilizando a base e o design fornecidos pela instituição, apliquei conceitos sólidos de manipulação do DOM e, como diferencial de experiência do usuário (UX), implementei de forma 100% independente uma funcionalidade de **botões de sugestões rápidas**.

*   **Repositório Oficial do Desafio:** [rocketseat-education/convert-template](https://github.com/rocketseat-education/convert-template)
*   **Template Base Utilizado:** [danilo-guimaraes/convert-template](https://github.com/danilo-guimaraes/convert-template)

---

## 🚀 Funcionalidades

*   **Conversão Inteligente:** Processa e exibe instantaneamente o valor convertido formatado no padrão monetário brasileiro (`pt-BR`).
*   **Filtro de Entrada (Regex):** O campo de valor aceita apenas números, limpando automaticamente letras ou caracteres especiais digitados pelo usuário.
*   **⚡ Sugestões Rápidas (Minha Adição):** Botões no topo que preenchem valores comuns (5, 10, 50, 100) com apenas um clique, agilizando a experiência antes de disparar o formulário.
*   **Design Fluido:** Interface totalmente responsiva baseada no layout da Rocketseat, adaptando-se de computadores a telas de celulares pequenos (até 360px).
*   **Tratamento de Erros:** Sistema blindado com blocos `try/catch` para garantir que o app não trave de forma silenciosa.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando a trinca fundamental do Front-End:

*   **HTML5:** Estrutura semântica e acessível.
*   **CSS3:** Estilização avançada com variáveis CSS (`:root`), layouts flexíveis (`Flexbox`), efeitos de hover, transições suaves e responsividade total com `Media Queries`.
*   **JavaScript (ES6+):** Lógica de programação dinâmica e escuta de eventos em tempo real.

---

## 🧠 Aprendizados e Técnicas Consolidadas

Neste projeto guiado pela metodologia prática da Rocketseat, pude dominar conceitos cruciais para o mercado:

1.  **Manipulação de DOM Dinâmica:** Uso do `querySelector` para capturar e alterar estados e classes de elementos HTML no momento exato das ações.
2.  **Delegação de Eventos (Event Delegation):** Técnica aplicada no container de sugestões utilizando o método `.closest('button')`. Isso evita criar múltiplos ouvintes na página, centralizando a captura do clique no elemento pai de forma performática.
3.  **Controle de Classes CSS via JS:** Uso da propriedade `classList.add()` e `classList.remove()` para gerenciar a exibição do rodapé de resultados.
4.  **Formatação Internacional com `Intl`:** Uso do construtor nativo `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })` para formatação monetária impecável.
5.  **Expressões Regulares (Regex):** Uso do padrão `/\D+/g` (tudo que não for dígito) combinado com o método `.replace()` para higienizar o input do usuário enquanto ele digita.

---

## 📦 Como Executar o Projeto

1. Clone este repositório para a sua máquina local:
   ```bash
   git clone [https://github.com/SEU_USUARIO/convert-app.git](https://github.com/SEU_USUARIO/convert-app.git)
