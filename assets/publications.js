const list=document.querySelector('#publication-list');
const search=document.querySelector('#search');
const year=document.querySelector('#year');
function filter(){let n=0; for(const el of list.children){const visible=(!search.value||el.textContent.toLowerCase().includes(search.value.toLowerCase()))&&(year.value==='all'||el.dataset.year===year.value); el.hidden=!visible; if(visible)n++} document.querySelector('#results').textContent=n+' publication'+(n===1?'':'s'); document.querySelector('#empty').hidden=n!==0;}
search.addEventListener('input',filter);year.addEventListener('change',filter);filter();
