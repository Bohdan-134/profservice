window.addEventListener('DOMContentLoaded', function() {
    const child = document.querySelector('.text-content-in-border');    
    const parent = document.querySelector('.block-text-content-in-border');
    parent.style.height = getComputedStyle(child).height;
    parent.style.maxWidth = getComputedStyle(child).width;
});