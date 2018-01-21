const fs = require('fs');
const ignores = ['monaco-iframe.html']
const theme = fs.readFileSync(`./src/theme.html`);
const monacoIframe = fs.readFileSync(`./src/elements/monaco-iframe.html`);
const elements = fs.readdirSync('./src/elements')
                   .filter(file => ignores.indexOf(file) == -1)
                   .map(file => fs.readFileSync(`./src/elements/${file}`))
                   .join('');

if (!fs.existsSync('./dist'))
  fs.mkdirSync('./dist');

fs.writeFileSync('./dist/elements.html', elements)
fs.writeFileSync('./dist/theme.html', theme)
fs.writeFileSync('./dist/monaco-iframe.html', monacoIframe)
