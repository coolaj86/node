Node.JS libs for Browser
====

This fork of Node.JS is exclusively for porting the Node.js libs
to the Browser as simply as possible and without polluting the global space.

Each of the Node.JS libs that can run in the Browser is wrapped, ever so gently,
as to be compatible [`require-kiss`](https://github.com/coolaj86/require-kiss-js).

Currently Browserified:

  * assert
  * events
  * path
  * querystring
  * url

Usage
====

All you have to do is this:

    <head>
      <script src="/javascripts/require-kiss.js"></script>
      <script src="/javascripts/events.js"></script>
      <script>
        (function () {
          "use strict";

          var EventEmitter = require("events").EventEmitter
            , events = new EventEmitter();

          event.on('say', function (thing) {
            alert(thing);
          });

          event.emit('say', "Hello World!");
        }());
      </script>
    </head>

If any modules are required other than the ones included you'll get a nifty message such as:

    `util.js` was required but not found. Try including <script src="./util.js"></script>.

If you plan to support legacy browsers you may also wish to include [`global-es5.js`](http://persevere-framework.googlecode.com/svn-history/r678/trunk/WEB-INF/narwhal/engines/default/lib/global-es5.js) from the [persevere framework](http://code.google.com/p/persevere-framework/), [`json2.js`](https://github.com/douglascrockford/JSON-js), etc.

How it's done
====

In most cases, what this entails in terms of changes to the node code is nothing more than this:

    (function () {
      "use strict";

      require('require-kiss');

    // NODE-MODULE ORIGINAL CODE

      provide('NODE-MODULE', module.exports);
    }());

Each `git pull` the new modifications merge without conflict
    
If you have a simpler methodology, I'd love to hear it.
