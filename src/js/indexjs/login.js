(function(){
    "use strict";
    window.onload = function(){
        let nobox = document.querySelector('.no-box');
        let tab = document.querySelector('.navtab-link');
        let nav = document.querySelector('.navtab');
        nav.onclick = function(){
            nobox.style.display = nobox.style.display === 'none' ? 'block' : 'none';
        }
        tab.onclick = function(){
            nobox.style.display = nobox.style.display === 'block' ? 'none': 'block';
        }
    }
    
})();