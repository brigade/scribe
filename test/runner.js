var Mocha = require('mocha');
var createRunner = require('./create-runner');

var mocha = new Mocha();

/**
 * FIXME: We have to set a ridiculous timeout (20 minutes) because Travis’
 * concurrent builds will sometimes exceed Sauce Labs’ concurrency. We should
 * track the following issue to add an option to Travis for limiting
 * concurrency: https://github.com/travis-ci/travis-ci/issues/1366
 */
mocha.timeout(1200000);
mocha.reporter('spec');
mocha.addFile(__dirname + '/plugins/curly-quotes-plugin.spec.js');
mocha.addFile(__dirname + '/plugins/smart-lists-plugin.spec.js');
mocha.addFile(__dirname + '/plugins/toolbar-plugin.spec.js');
mocha.addFile(__dirname + '/block-mode.spec.js');
mocha.addFile(__dirname + '/commands.spec.js');
mocha.addFile(__dirname + '/formatters.spec.js');
mocha.addFile(__dirname + '/inline-elements-mode.spec.js');
mocha.addFile(__dirname + '/patches.spec.js');
mocha.addFile(__dirname + '/undo-manager.spec.js');

createRunner(mocha);