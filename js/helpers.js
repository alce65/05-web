import { footerTemplate, headerTemplate, headTemplate } from './templates.js';

export function renderCommon(title) {
    document.querySelector('head meta').outerHTML = headTemplate(title);
    document.querySelector('header').innerHTML = headerTemplate;
    document.querySelector('footer').innerHTML = footerTemplate;
}
