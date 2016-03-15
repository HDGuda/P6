/* 
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('each feed url is defined and not empty', function() {
            for (var testfeed in allFeeds) {
                expect(allFeeds[testfeed].url).toBeDefined();
                expect(allFeeds[testfeed].url).not.toBe('');
            }
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('each feed has a name that is not empty', function() {
            allFeeds.forEach(function(val) {
            	expect(val.name).toBeDefined();
                expect(val.name).not.toBe('');
            });
        });


    });

    describe('The menu', function() {
 
        /* This is a test that ensures the menu element is
         * hidden by default. 
         */

        it('menu element is hidden by default', function() {
            $(document).ready(function() {
                expect($('body').hasClass('menu-hidden')).toBeTruthy();
            });
        });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
        it('menu changes visibility when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();                        
        });

    });
        
    describe('Initial Entries', function() {
        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('should at least contain one entry', function() {
            expect($('.entry-link').length).toBeGreaterThan(0);
         });

    });

    describe('New Feed Selection', function() {
        var firstFeedContent,
        newFeedContent;

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */ 
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeedContent = $('.feed').html();
                done();
            });
        });

        it('feed-div changes content when a new feed is loaded', function(done){
            loadFeed(1, function(){
                newFeedContent = $('.feed').html(); 
                expect(firstFeedContent).not.toEqual(newFeedContent);
                done();
            });
        });
    });    

    describe('Language Filtering', function() {
    	/* This is a possible future test suite
    	 * that tests if really only feed content in English
    	 * is displayed on screen
    	 */

    	/* To do: write an async function loadFilteredFeed that loads entry-links
    	 * only if the linked page has the tag <html lang="en">
    	 */ 
    	beforeEach(function(done) {
            loadFilteredFeed(0, done);
        });

    	/* when the async function loadFilteredFeed is implemented 
    	 * this test checks if entry-links have been filtered correctly 
    	 */
        xit('feed entries only contain links to html-pages in English', function(){
        	for (var i = 0; i < ($('.entry-link').length); i++) {
    			expect($('.entry-link')[i].hasClass("en"));
			};
        });
    })

}());