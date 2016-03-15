# Project 6

## Testing the feed reader with Jasmine

To start the app open the index.html in your browser. IMPORTANT: It has got to Google Chrome. The app DOES NOT work in Firefox.

At the bottom of the page you will find the results of four Jasmine test suites:
* RSS Feeds
* The menu
* Initial Entries
* New Feed Selection

To find out what these tests suites do in detail you have to check jasmine/spec/feedreader.js.

The first two tests are straightforward, synchronous tests. The last two are asynchronous tests.

Especially interesting is the "New Feed Selection" test: There are two async calls of the loadFeed-function in app.js - one in the beforeEach-construction, the other in the it-declaration. In the first step an async call of the first feed is simulated, in the second step an async call of the second feed. This is to test if the content of the feed-div really changes if the user calls another feed.

### Future test
The new test suite Language Filtering contains a possible future test that makes sure only feed entries in English are displayed.