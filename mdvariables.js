var Plugin = require('markdown-it-regexp');

var MdVariables = function(dataFn) {
    var timeout;
    return Plugin(
        /@(\w+)/,
        function(match, utils) {
            var data = dataFn();
            if(data[match[1]])
                return data[match[1]];
            else {
                if(timeout)
                    clearTimeout(timeout);
                timeout = setTimeout(function() {
                    console.warn('MdVariables: We couldn\'t find the variable from the data callback. (key, data)', match[1], data);
                }, 500);
                return '';
            }
        }
    );
};

module.exports = MdVariables;
