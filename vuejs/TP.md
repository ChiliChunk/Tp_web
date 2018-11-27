# Installer vue cli 

```bash
npm install -g @vue/cli
npx @vue-cli
```

# creation du projet vuejs-tp

=> pour ce tp  => git clone https://github.com/caro3801/vuejs-tpbase.git vuejs-tp

sinon : 
https://cli.vuejs.org/guide/creating-a-project.html#vue-create

`vue create vuejs-tp`
( options : babel, eslint, sass)

`cd vuejs-tp`

(prof : montrer `vue ui`)

`git init `
...


# start development server
```bash
npm run serve
```
->localhost:8080

in vscode: lint on save (prettier)

1108 package / 360 secs + add deps 122 packages / 113s

# sourcemap
Dans `vue.config.js` 
```js
module.exports = {
  configureWebpack: {
    devtool: "source-map"
  }
};
```

# Utiliser bootstrap-vue
vue add bootstrap-vue

# extensions vs code
* prettier
* vetur
* chrome debugger
# extensions chrome
* vue devtools

# settings eslint
```json
{
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
    "editor.detectIndentation": false,
    "prettier.tabWidth": 4,
    "markdown.preview.breaks": true,
    "prettier.eslintIntegration": true,
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "eslint.validate": [
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "javascript",
            "autoFix": true
        }
    ]
}
```
