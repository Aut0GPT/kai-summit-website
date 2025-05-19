# Guia de Integrau00e7u00e3o Wix + GitHub para o Kai Summit

Este guia detalha como configurar e usar a integrau00e7u00e3o entre GitHub e Wix para manter seu site do Kai Summit atualizado atravu00e9s de versionamento de cu00f3digo e automau00e7u00e3o.

## 1. Pru00e9-requisitos

- Uma conta Wix (Premium ou Business & eCommerce para usar Velo/API)
- Uma conta GitHub
- Node.js instalado no computador local
- Wix CLI instalado (`npm install -g @wix/cli`)

## 2. Conectando Wix ao GitHub

### 2.1 No Editor Wix

1. Entre no Editor Wix do seu site
2. Clique no u00edcone de cu00f3digo (chaves `{ }`) no painel lateral
3. Clique em "GitHub" e depois em "Connect to GitHub"
4. Fau00e7a login na sua conta GitHub
5. Nomeie seu repositu00f3rio como "kai-summit-website" ou similar
6. Clique em "Create" e depois "Install" para autorizar a conexu00e3o

### 2.2 Configurando a API Key

1. No Painel Wix, vu00e1 para "Settings" > "API Keys"
2. Clique em "Create New API Key"
3. Selecione "Wix CLI - Git Integration" nas permissu00f5es
4. Nomeie a chave (ex: "GitHub Integration")
5. Copie a chave gerada para usar mais tarde

## 3. Configurando o GitHub

### 3.1 Adicionando API Key ao GitHub

1. Vu00e1 para seu repositu00f3rio no GitHub
2. Navegue atu00e9 "Settings" > "Secrets" > "Actions"
3. Clique em "New repository secret"
4. Nomeie como `WIX_API_KEY`
5. Cole a API Key que vocu00ea copiou do Wix
6. Clique em "Add secret"

## 4. Estrutura de Conteu00fado

Seu site Kai Summit estu00e1 organizado por arquivos JSON na pasta `/content/`:

- `event-info.json`: Informau00e7u00f5es bu00e1sicas do evento (data, local, ingressos)
- `about.json`: Descriu00e7u00e3o e conceito do evento
- `pillars.json`: Os quatro pilares do evento
- `schedule.json`: Linha do tempo e palestrantes
- `benefits.json`: Benefu00edcios para os participantes
- `cta.json`: Botu00f5es e textos de chamada para au00e7u00e3o
- `partners.json`: Patrocinadores e apoio institucional

## 5. Processo de Atualizau00e7u00e3o de Conteu00fado

### 5.1 Atualizando Localmente

1. Clone o repositu00f3rio para sua mu00e1quina local
   ```
   git clone https://github.com/seu-usuario/kai-summit-website.git
   ```

2. Fau00e7a as alterau00e7u00f5es desejadas nos arquivos JSON da pasta `content/`

3. Commit e push das alterau00e7u00f5es:
   ```
   git add .
   git commit -m "Atualizado informau00e7u00f5es do evento"
   git push origin main
   ```

4. O GitHub Actions iru00e1 automaticamente atualizar seu site Wix com as novas informau00e7u00f5es

### 5.2 Atualizando via Interface do GitHub

1. Navegue atu00e9 seu repositu00f3rio no GitHub
2. Acesse a pasta `content/`
3. Selecione o arquivo que deseja editar
4. Clique no u00edcone de ediu00e7u00e3o (lu00e1pis)
5. Fau00e7a suas alterau00e7u00f5es no JSON
6. Adicione uma mensagem de commit e clique em "Commit changes"
7. O GitHub Actions iru00e1 automaticamente atualizar seu site Wix

## 6. Configurau00e7u00e3o do Site Wix

### 6.1 Criau00e7u00e3o de Coleu00e7u00f5es de Dados

No Editor Wix, vocu00ea precisa criar coleu00e7u00f5es de dados para armazenar as informau00e7u00f5es do seu site:

1. Vu00e1 para "Database" > "Collections" > "Add a Collection"
2. Crie as seguintes coleu00e7u00f5es conforme especificado no arquivo `wix-config/wix-cli-config.json`:
   - KaiEvent
   - KaiContent
   - KaiSchedule
   - KaiPartners

### 6.2 Criando Conexu00f5es de Dados

1. Nos elementos do seu site, conecte cada seu00e7u00e3o u00e0 coleu00e7u00e3o de dados correspondente
2. Use conexu00f5es dinu00e2micas para texto, imagens e botu00f5es

## 7. Personalizau00e7u00e3o da Automau00e7u00e3o

Para personalizar como os dados su00e3o atualizados no seu site, edite o arquivo `.github/workflows/wix-update.yml` adaptando os comandos para suas necessidades especu00edficas.

## 8. Soluu00e7u00e3o de Problemas

### A automau00e7u00e3o nu00e3o estu00e1 funcionando?

1. Verifique se sua API Key estu00e1 correta e nu00e3o expirou
2. Veja os logs de execuu00e7u00e3o no GitHub Actions
3. Certifique-se de que sua conta Wix tem as permissu00f5es necessu00e1rias

### Conflitos de conteu00fado?

1. Se vocu00ea editou o conteu00fado diretamente no Wix, use `wix pull` para atualizar seu repositu00f3rio local antes de fazer novas alterau00e7u00f5es

## 9. Recursos Adicionais

- [Documentau00e7u00e3o oficial do Wix CLI](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli/setting-up-git-integration-wix-cli)
- [GitHub Actions para Wix](https://dev.wix.com/docs/develop-websites/articles/workspace-tools/developer-tools/git-integration-wix-cli/set-up-git-hub-actions-to-work-with-the-wix-cli)
- [API do Wix para desenvolvedores](https://dev.wix.com/api/)
