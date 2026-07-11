# Site pra Naná 💛

Site de presente de aniversário, pronto pra subir no GitHub Pages.

## Antes de publicar — o que trocar

1. **Suas fotos**: substitua os arquivos em `images/foto1.jpg`, `foto2.jpg`, `foto3.jpg`, `foto4.jpg`
   pelas fotos de vocês (mantenha os mesmos nomes, ou troque o `src` no `index.html`
   dentro da seção `<!-- FOTOS -->`). Pode adicionar mais `<figure class="polaroid">`
   se quiser mais fotos.

2. **A carta**: abra `index.html`, procure por `id="carta-texto"` e troque o
   parágrafo pelo texto que você escrever. Se quiser mais de um parágrafo, é só
   duplicar a tag `<p>...</p>`.

3. **Confira o ano do contador**: em `script.js`, a constante `START_DATE` está
   como `new Date(2026, 4, 26)` (26 de maio de 2026). Se vocês estão juntos há
   mais tempo, troque o ano pelo correto.

4. A playlist já está com o link de vocês dois embedado.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `para-nana`).
2. Suba estes arquivos pra ele:
   ```
   git init
   git add .
   git commit -m "presente pra Naná"
   git branch -M main
   git remote add origin https://github.com/hypexxbr/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Branch", selecione `main` e a pasta `/ (root)`, depois **Save**.
5. Em alguns minutos o site estará no ar em:
   `https://hypexxbr.github.io/SEU-REPOSITORIO/`

Pronto — é só mandar o link pra ela no dia 15. 💛
