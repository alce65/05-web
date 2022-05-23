import { about } from './about.js';
import { index } from './index.js';

// IIFE
(() => {
    const path = location.pathname.split('/');

    if (
        path[path.length - 1] === '' ||
        path[path.length - 1] === 'index.html'
    ) {
        document.addEventListener('DOMContentLoaded', index);
    } else {
        document.addEventListener('DOMContentLoaded', about);
    }
})();
