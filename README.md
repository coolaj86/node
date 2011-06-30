Node.JS libs for Browser (with ender.js)
====

This fork of Node.JS is exclusively for porting the Node.js libs
to the Browser as simply as possible and without polluting the 
global space or breaking node.js compatibility.

Currently Browserified:

  * events
  * util
  * assert
  * path
  * querystring
  * url

Usage
====

With `ender.js`:

    ender -b util assert path url # querystring events

Without `ender.js`:

see the [`require-kiss`](https://github.com/coolaj86/nodejs-libs-4-browser/tree/require-kiss) branch

Note: `events` and `querystring` are owned by a different user on `npm`, but I've requested the necessary changes.

    <head>
      <script src="/javascripts/ender.js"></script>
      <script src="/javascripts/events.js"></script>
      <script src="/javascripts/querystring.js"></script>
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

    "Requested module 'util' has not been defined."

If you plan to support legacy browsers you may also wish to include [`global-es5.js`](http://persevere-framework.googlecode.com/svn-history/r678/trunk/WEB-INF/narwhal/engines/default/lib/global-es5.js) from the [persevere framework](http://code.google.com/p/persevere-framework/), [`json2.js`](https://github.com/douglascrockford/JSON-js), etc.

How it's done
====

In most cases, what this entails in terms of changes to the node code is nothing more than this:

    (function () {
      "use strict";

    // NODE-MODULE ORIGINAL CODE

    }());

Each `git pull` the new modifications merge without conflict