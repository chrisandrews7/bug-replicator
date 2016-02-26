var webdriverio = require('webdriverio');
var TIMEOUT = 7000;

function generateNewClient(options) {
    return webdriverio.remote(options);
}

exports.search = function(options, callback) {
    var browser = generateNewClient({
        desiredCapabilities: {
            browserName: options.browser
        }
    });

    browser
        .init()
        .url('http://www.bbc.co.uk/')
        .setValue('#orb-search-q', options.query)
        .click('#orb-search-button')
        .end()
        .then(callback);
}
