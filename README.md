# Project 6

## Testing the feed reader with Jasmine

To start the app open the index.html in your browser. IMPORTANT: It has got to Google Chrome. The app DOES NOT work in Firefox.

At the bottom of the page you will find four Jasmine test suites:
* RSS Feeds
* The menu
* Initial Entries
* New Feed Selection

The first two are straightforward, synchronous tests. The last two are asynchronous tests.

Especially interesting is the "New Feed Selection" test: There are two async calls of loadFeed - one in the beforeEach-construction, the other in the it-declaration. In the first step an async call of the first feed is simulated, in the second step an async call of the second feed. This is to test if the content of the feed-division really changes if the user calls another feed.
