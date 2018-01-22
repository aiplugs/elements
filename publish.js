const fs = require('fs');
const theme = fs.readFileSync(`./src/theme.html`);
const elements = fs.readdirSync('./src/elements')
                   .map(file => fs.readFileSync(`./src/elements/${file}`))
                   .join('');

if (!fs.existsSync('./dist'))
  fs.mkdirSync('./dist');

fs.writeFileSync('./dist/elements.html', elements)
fs.writeFileSync('./dist/theme.html', theme)
