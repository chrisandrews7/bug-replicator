var async = require('async');
var scenarios = require('./scenarios');

exports.search = function() {
    async.map([
        {
            query: 'test',
            browser: 'chrome'
        },
        {
            query: 'testing',
            browser: 'firefox'
        }
    ], scenarios.search, function() {
        console.log('All search scripts complete');
    });
}
