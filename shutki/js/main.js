/**
 * "Rules of Optimization:
 *     Rule 1: Don't do it.
 *     Rule 2 (for experts only): Don't do it yet.”
 *
 * ~ Michael A. Jackson
 */

(function () {
    require.config({
        baseUrl: 'js',
        paths: {
            jquery: 'vendor/jquery/jquery.min',
            fullpage: 'vendor/fullpage/fullpage.min',
            custombox: 'vendor/custombox/custombox.min',
            isotope: 'vendor/isotope/isotope.min',
            lightbox: 'vendor/lightbox/lightbox.min',
            text: 'vendor/requirejs/text',
            underscore: 'vendor/underscore/underscore.min',
            auto_image_resize: 'app/auto_image_resize',
            gen_uniq_id: 'app/gen_uniq_id'
        },
        shim: {
        	fullpage: {
        		deps: [
        			'jquery'
        		]
        	}
        }
    });

    require([
    	'jquery', 'fullpage', 'custombox', 'isotope', 'lightbox', 'text', 'underscore',
    	'auto_image_resize', 'gen_uniq_id'
    ], function ($) {
        $.noConflict();

        require(['js/app/main_page.js']);
    });
}).call(this);
