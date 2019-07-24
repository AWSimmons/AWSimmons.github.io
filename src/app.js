require.config({
  baseUrl: '/',
  paths: {
    'text': 'lib/requirejs-text'
  }
});

import './header.js';
import './front-page.js';
import './personal-message.js';

ko.applyBindings({});
