import instajax from 'instajax';
const lang = document.querySelector('html').getAttribute('lang');
instajax({
    errorHTML: `url("/${lang}/error")`
})