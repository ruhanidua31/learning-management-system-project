# learing management system

## setup instructions

1. clone the project

2. move into directary 

<<<<<<< HEAD
3. install dependencies
=======
```
3. Install dependencies
```
   npm i

```
4. Run the server
```
   npm run dev
```

### Setup instructions for tailwind

[official tailwind setup docs] (https://tailwindcss.com/docs/installation)

1. Install tailwind
```
   npm install -D tailwindcss

```
2. Create tailwind config file
```
   npx tailwindcss init

```
3. Add extentions to tailwind config file
```
   "./src/**/*.{html,js}"

```
4. Add the Tailwind directives to main CSS file
```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

```

### Add dependencies & plugins

```
   npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```

### Configure auto import sort estlint

1. Install simple sort ore
```
   npm i -d eslint-plugin-simple-import-sort

```   

2. Add simple-import sort plugin & to rule in `.eslint.config.js`
```
   plugins: ["simple-import-sort"],
      "rules": {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
      },
      "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "latest"
      }

```

3. To enable auto import sort on file save in vs code
       - open `settings.jsn` & add following config:-
```
   "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }

```       
>>>>>>> 08c5ad9 (Configure auto import sort estlint)
