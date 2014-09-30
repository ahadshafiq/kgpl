'use strict';
// $(function () {
//     $('.menu-side').on('click', 'a', function () {
//        if($(this).closest('i').hasClass('current')) return; $('.current').not($(this).closest('i').addClass('current')).removeClass('current');
//         // fade out all open subcontents
//         $('.pbox:visible').hide(0);
//         // fade in new selected subcontent
//         $('.pbox[id=' + $(this).attr('data-id') + ']').show(0);
//     }).find('a:first').click();
// });
$(document).ready( function() {
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
    $('#loadTabs').on('click', function() {
        $('#explanation').load('../pages/theTabs.html');
    });
    $('#loadCar').on('click', function() {
        $('#explanation').load('../pages/theCarousel.html');
    });
});


                    