"use strict";

(function() {
    // IIFE - Immediately Invoked Function Expression or self-executing function
    console.log('App started...');
    
    // named function
    function replaceFirstParagraph() {
        var firstParagraph;
    
        firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.innerHTML = "My new paragraph Data";
        firstParagraph.className = "jumbotron";
    }

    // invoke named function
    replaceFirstParagraph();
})();