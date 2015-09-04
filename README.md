# mdvariables
Allows the addition of variables in your markdown

npm install --save mdvariables

Usage:

````javascript
    var MdVariables = require('mdvariables');

    md.use(MdVariables(function() {
        return {title: $('title').val()};
    });
    //In your mark up add "@title" to replicate what is in your title input.
````

I personally use this so I only have to write the title of my blog once in the title, and reuse that value in the header markdown
