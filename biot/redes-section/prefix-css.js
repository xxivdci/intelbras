const fs = require('fs');
const postcss = require('postcss');
const prefixer = require('postcss-prefixer');

const css = fs.readFileSync('section-redes.css', 'utf-8');

postcss([prefixer({ prefix: 'net-' })])
  .process(css, { from: 'section-redes.css', to: 'output.css' })
  .then(result => {
    fs.writeFileSync('output.css', result.css);
    if ( result.map ) fs.writeFileSync('output.css.map', result.map.toString());
  });