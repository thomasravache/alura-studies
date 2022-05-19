# Documentação

[Site da documentação create-react-app](https://create-react-app.dev/docs/getting-started)

# Comando para criar uma aplicação React com Typescript

```bash
npx create-react-app nome-do-app --template typescript
```

utilizar o `--use-npm` para reforçar que está usando npm e não yarn como gerenciador de pacotes

# Comando para instalar Sass

```bash
npm install --save-dev sass
```

# CSS Modules

Serve para criar classes únicas mesmo com o nome sendo genérico, evitando sobreposição de classes nos elementos

## Usar typescript-plugin-css-modules

Link do npm: [typescript-plugin-css-modules](https://www.npmjs.com/package/typescript-plugin-css-modules)

```bash
npm install -D typescript-plugin-css-modules
```


Adicionar ao seu `tsconfig.json`:
```json
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

## Formas de utilizar o CSS modules nos components

Se houver algum caractere que o javascript não entenda (por exemplo "-"), utilizar a implementação da classe de estilo da forma abaixo:

```html
<div className={style["inputContainer"]}></div>
```

Senão:

```html
<div className={style.inputContainer}></div>
```
