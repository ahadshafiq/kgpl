'use strict';
$(document).ready( function() {
    $('#explanation').load('../pages/theBlankSlate.html');
    
    $('#loadNav').on('click', function() {
        $('#explanation').load('../pages/theNavigation.html');
    });
     $('#loadGrid').on('click', function() {
        $('#explanation').load('../pages/theGridSystem.html');
    });
    $('#loadTypo').on('click', function() {
        $('#explanation').load('../pages/theTypography.html');
    });
    $('#loadButtons').on('click', function() {
        $('#explanation').load('../pages/theButtons.html');
    });
    $('#loadForm').on('click', function() {
        $('#explanation').load('../pages/theForms.html');
    });
    $('#loadIcons').on('click', function() {
        $('#explanation').load('../pages/theIcons.html');
    });
    $('#loadFeedback').on('click', function() {
        $('#explanation').load('../pages/theFeedback.html');
    });
    $('#loadAnimations').on('click', function() {
        $('#explanation').load('../pages/theAnimations.html');
    });
    $('#loadCharts').on('click', function() {
        $('#explanation').load('../pages/theCharts.html');
    });

    // Button Animations
    $('#demo-animations').find('.demo-col').on('click', function() {
        var $this = $(this);
        $this.addClass('animated ' + $this.text());
    });

});


        

                    