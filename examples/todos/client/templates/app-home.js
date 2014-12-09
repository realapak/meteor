

// (client-side)
Template.home.created = function() {
    if (Accounts._verifyEmailToken) {
        Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
            if (err != null) {
                if (err.message = 'Verify email link expired [403]') {
                    console.log('Sorry this verification link has expired.')
                }
            } else {
                console.log('Thank you! Your email address has been confirmed.')
            }
        });
    }
};


Template.home.rendered = function() {
    window.scrollReveal.init();


    /* --- Modal overlay (used for signup form) ------------------- */
    function signupOverlay() {
        var container = document.querySelector( 'div.container' ),
            triggerBttn = document.getElementsByClassName( 'signup' ),
            overlay = document.querySelector( 'div#signup' ),
            closeBttn = overlay.querySelector( 'button.overlay-close' );
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            support = { transitions : Modernizr.csstransitions };

        function toggleOverlay() {
            if( classie.has( overlay, 'open' ) ) {
                classie.remove( overlay, 'open' );
                classie.remove( container, 'overlay-open' );
                classie.add( overlay, 'close-me' );
                var onEndTransitionFn = function( ev ) {
                    if( support.transitions ) {
                        if( ev.propertyName !== 'visibility' ) return;
                        this.removeEventListener( transEndEventName, onEndTransitionFn );
                    }
                    classie.remove( overlay, 'close-me' );
                };
                if( support.transitions ) {
                    overlay.addEventListener( transEndEventName, onEndTransitionFn );
                }
                else {
                    onEndTransitionFn();
                }
            }
            else if( !classie.has( overlay, 'close-me' ) ) {
                classie.add( overlay, 'open' );
                classie.add( container, 'overlay-open' );
            }
        }

        for (i = 0; i < triggerBttn.length; i++) {
            triggerBttn[i].addEventListener( 'click', toggleOverlay );
        }
        closeBttn.addEventListener( 'click', toggleOverlay );

        $('.signup').click(function(e) {
            e.preventDefault();
        });
    }

    /* --- Modal overlay (used for login form) ------------------- */
    function loginOverlay() {
        var container = document.querySelector( 'div.container' ),
            triggerBttn = document.querySelector( '.login' ),
            overlay = document.querySelector( 'div#login' ),
            closeBttn = overlay.querySelector( 'button.overlay-close' );
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            support = { transitions : Modernizr.csstransitions };

        function toggleOverlay() {
            if( classie.has( overlay, 'open' ) ) {
                classie.remove( overlay, 'open' );
                classie.remove( container, 'overlay-open' );
                classie.add( overlay, 'close-me' );
                var onEndTransitionFn = function( ev ) {
                    if( support.transitions ) {
                        if( ev.propertyName !== 'visibility' ) return;
                        this.removeEventListener( transEndEventName, onEndTransitionFn );
                    }
                    classie.remove( overlay, 'close-me' );
                };
                if( support.transitions ) {
                    overlay.addEventListener( transEndEventName, onEndTransitionFn );
                }
                else {
                    onEndTransitionFn();
                }
            }
            else if( !classie.has( overlay, 'close-me' ) ) {
                classie.add( overlay, 'open' );
                classie.add( container, 'overlay-open' );
            }
        }

        triggerBttn.addEventListener( 'click', toggleOverlay );
        closeBttn.addEventListener( 'click', toggleOverlay );

        $('.login').click(function(e) {
            e.preventDefault();
        });
    }

    /* --- Full Screen Container ------------- */

    function fullScreenContainer() {

        // Set Initial Screen Dimensions

        var screenWidth = $(window).width() + "px";
        var screenHeight = $(window).height() + "px";

        $("#intro, #intro .item, #intro-video").css({
            width: screenWidth,
            height: screenHeight
        });

        // Every time the window is resized...

        $(window).resize( function () {

            // Fetch Screen Dimensions
            console.log("Acertou");
            var screenWidth = $(window).width() + "px";
            var screenHeight = $(window).height() + "px";

            // Set Slides to new Screen Dimensions

            $("#intro, #intro .item, #intro-video, #intro-video .item").css({
                width: screenWidth,
                height: screenHeight
            });

        });

    }

    fullScreenContainer();
    signupOverlay();
    loginOverlay();
};