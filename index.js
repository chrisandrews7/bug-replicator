var args = process.argv.slice(2);
var scripts = require('./lib/scripts');

try {
    if (!scripts[args[0]]) {
        throw new Error('No script specified');
    }
    scripts[args[0]]();
}
catch (error) {
    console.error(error);
}
