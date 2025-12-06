# tovah — bolos gelados feitos do bem

Site institucional da marca tovah, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Como rodar o projeto

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para produção

```bash
npm run build
npm start
```

## 📦 Deploy na Vercel

### Opção 1: Deploy via Git (Recomendado)

1. **Faça push do código para um repositório Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```

2. **Acesse [vercel.com](https://vercel.com)** e faça login com sua conta GitHub/GitLab/Bitbucket

3. **Clique em "Add New Project"** e importe o repositório

4. **A Vercel detectará automaticamente:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

5. **Clique em "Deploy"** e aguarde o build

6. **Pronto!** Seu site estará online em poucos minutos com uma URL automática

### Opção 2: Deploy via CLI da Vercel

1. **Instale a CLI da Vercel:**
   ```bash
   npm i -g vercel
   ```

2. **No diretório do projeto, execute:**
   ```bash
   vercel
   ```

3. **Siga as instruções no terminal**

### Configurações Automáticas

A Vercel detecta automaticamente:
- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Node.js 18+ (especificado no `package.json`)

Não é necessário criar arquivo `vercel.json` - a configuração padrão funciona perfeitamente!

## 🔧 Configurações importantes

### WhatsApp

Atualize o número do WhatsApp nos seguintes arquivos:
- `app/components/Header.tsx` (linha 5)
- `app/components/Hero.tsx` (linha 2)
- `app/components/BusinessSection.tsx` (linha 2)
- `app/components/Footer.tsx` (linha 4)

Substitua `5511999999999` pelo número real (formato: código do país + DDD + número, sem espaços ou caracteres especiais).

### Instagram

Atualize o handle do Instagram em:
- `app/components/Footer.tsx` (linha 5)

### Logo

Substitua o arquivo `public/logo-tovah.svg` pelo logo oficial da marca.

## 🎨 Cores do tema

- **Azul petróleo**: `#173F4F` (cor principal)
- **Creme**: `#F4E9D7`
- **Dourado suave**: `#C8A86E`
- **Branco**: `#FFFFFF`

## 📁 Estrutura do projeto

```
/app
  /components
    Header.tsx
    Hero.tsx
    SaboresSection.tsx
    HowItWorksSection.tsx
    QualitySection.tsx
    BusinessSection.tsx
    TestimonialsSection.tsx
    FAQSection.tsx
    AboutSection.tsx
    Footer.tsx
  layout.tsx
  page.tsx
  globals.css
/public
  logo-tovah.svg
```

## 🛠️ Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📝 Licença

Este projeto é privado e pertence à marca tovah.

