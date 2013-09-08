// ==UserScript==
// @name       Ask Ubuntu Style
// @version    0.1
// @match      http://askubuntu.com/*
// @copyright  2013+, Radu Rădeanu
// @resource	askubuntu_style https://gist.github.com/radu-radeanu/6375547/raw/eaef503d50b718092efdf4955f1b965d5dde42fc/askubuntu_style.css
// ==/UserScript==

$("head").append('<style type="text/css">' + GM_getResourceText("askubuntu_style") + '</style>');

// --- add "tools" link in front of "review" link 
var reviewLink         = document.querySelector ("a[href='/review']");
var toolsLink          = document.createElement ();
toolsLink.innerHTML    = '<a href="/tools">tools</a>&nbsp;<span class="lsep">|</span>&nbsp;';

reviewLink.parentNode.insertBefore(toolsLink, reviewLink);
