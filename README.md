# Portifolio.com — Kauã Silva 🛡️

Site pessoal em HTML + CSS + JavaScript puro, com visual inspirado em
"prancheta técnica de engenharia" (marcas de corte, tabela de revisões,
grid de fundo). Reúne experiência profissional, formação, áreas de
atuação em Segurança da Informação / GRC / LGPD e os projetos técnicos
do autor.

![status](https://img.shields.io/badge/status-online-2F7D5C)
![html](https://img.shields.io/badge/html-5-e34f26)
![css](https://img.shields.io/badge/css-3-1572b6)
![js](https://img.shields.io/badge/javascript-vanilla-f7df1e)
![deps](https://img.shields.io/badge/depend%C3%AAncias-nenhuma-success)

---

## ✨ O que o site traz

| Seção | O que mostra |
|---|---|
| Hero | Nome, cargo, área de atuação e status atual, em formato de "bloco de título" técnico |
| Sobre | Resumo da trajetória, foco em GRC/LGPD e idiomas |
| Áreas de atuação | Legenda com GRC & Compliance, Segurança e Certificações |
| Experiência | Tabela de "revisões" (A, B, C) com período, descrição e empresa |
| Formação | Cards de instituições de ensino, com logos |
| Projetos técnicos | Cards filtráveis por tecnologia (HTML, CSS, JavaScript, Python, GitHub Actions) |
| Contato | Ícones de redes sociais (e-mail, GitHub, LinkedIn, Instagram, Stack Overflow) |

Recursos de interface:

- **Tema claro/escuro** com botão no topo, salvo em `localStorage` e
  respeitando `prefers-color-scheme` na primeira visita.
- **Filtro de projetos** por tecnologia, sem reload de página.
- **Marcas de corte** (crop marks) e grid de fundo, dando a identidade
  visual de "prancheta"/documento técnico.
- Totalmente responsivo (breakpoint em 760px).

---

## 🖥️ Como rodar

Não há build, servidor ou dependências — é HTML/CSS/JS estático.

```bash
# Opção 1: abrir direto no navegador
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Opção 2: servir localmente (recomendado, evita problemas de CORS/caminho)
python -m http.server 8000
# depois acesse http://localhost:8000
```

---

## 🗂️ Estrutura do projeto

```
.
├── index.html      # estrutura e conteúdo de todas as seções
├── styles.css       # tema (claro/escuro), layout, componentes e responsividade
├── script.js         # tema, filtro de projetos e efeito de hover nos ícones
└── img/               # logos de empresas/instituições, ícones de projetos e avatar
    ├── adoro.png
    ├── anchieta.webp
    ├── aws.png
    ├── escoladanuvem.png
    ├── guardinha.png
    ├── heart.png
    ├── mario.jpg
    ├── nuvem.png
    ├── portifolio.png
    └── sequencial.png
```

- **`index.html`** — cada seção é identificada por `id` (`#sobre`,
  `#atuacao`, `#experiencia`, `#formacao`, `#projetos`, `#contato`),
  usados também pelo menu de navegação.
- **`styles.css`** — variáveis CSS (`:root`) controlam cores, fontes e
  espaçamentos; o tema escuro apenas remapeia essas variáveis dentro de
  `html[data-theme="dark"]`, sem duplicar regras estruturais.
- **`script.js`** — três responsabilidades independentes: alternância de
  tema, filtro de projetos por `data-filter` / `data-tags`, e um
  pequeno efeito de rotação nos ícones dos cards ao passar o mouse.

---

## 🔧 Personalizando

- **Cores e tipografia** — editar as variáveis no topo de `styles.css`
  (`--bg`, `--accent`, `--ink`, `--mono`, `--display`, `--body` etc.),
  tanto no tema claro (`:root`) quanto no escuro
  (`html[data-theme="dark"]`).
- **Experiência** — adicionar/editar linhas dentro de
  `table.revisions` em `index.html`; cada linha usa uma letra em
  `.rev-tag` (A, B, C...) como identificador visual de revisão.
- **Formação** — duplicar um `.edu-card` dentro de `.edu-grid` e trocar
  título, instituição, logo e período.
- **Projetos** — duplicar um `.proj-card` dentro de `.proj-grid`,
  ajustando `data-tags` (usado pelo filtro) e as `.proj-tags` visíveis.
  Novas tecnologias exigem também um novo botão em `.proj-filter` com o
  `data-filter` correspondente.
- **Redes sociais** — adicionar/remover links dentro de `.social-icons`
  no rodapé, usando ícones do Font Awesome já carregado via CDN.

---

## 🐞 Solução de problemas

- **Ícone da aba (favicon) não aparece** — confira se o `href` do
  `<link rel="icon">` no `<head>` bate exatamente com o nome do arquivo
  em `img/` (atenção a acentos e maiúsculas/minúsculas).
- **Logo ou ícone de projeto não carrega** — verifique se o caminho em
  `src="img/..."` corresponde a um arquivo existente na pasta `img/`.
- **Tabela de experiência com layout quebrado** — geralmente é uma tag
  `<td>` ou `</tr>` não fechada em alguma linha de `table.revisions`;
  valide o HTML com o inspetor do navegador (F12 → Elements).
- **Tema não muda ao clicar no botão** — confirme que `script.js` está
  sendo carregado (tag `<script src="script.js">` antes do fechamento
  de `</body>`) e que o `id="themeToggle"` existe no botão.

---

