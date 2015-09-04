var Plugin = require('markdown-it-regexp');

var MdVariables = function(dataFn) {
    return Plugin(
        /@(\w+)/,
        function(match, utils) {
            var data = dataFn();
            if(data[match[1]])
                return data[match[1]];
            else {
                console.warn('MdVariables: We couldn\'t find the variable from the data callback. (key, data)', match[1], data);
                return '';
            }
        }
    );
};

module.exports = MdVariables;
