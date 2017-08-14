exports.config = {

    baseUrl: 'http://localhost:4502',

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: [ 'features/**/add_new_component.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
    },

    capabilities: {
        browserName: 'firefox',
        chromeOptions: {
            args: [
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
            ]
        }
    },
     onPrepare: function () {
    /**
     * If you are testing against a non-angular site - set ignoreSynchronization setting to true
     *
     * If true, Protractor will not attempt to synchronize with the page before
     * performing actions. This can be harmful because Protractor will not wait
     * until $timeouts and $http calls have been processed, which can cause
     * tests to become flaky. This should be used only when necessary, such as
     * when a page continuously polls an API using $timeout.
     *
     * @type {boolean}
     */
    browser.ignoreSynchronization = true;
  },

    // so that every tests starts with a system in a known state
    restartBrowserBetweenTests: true
};