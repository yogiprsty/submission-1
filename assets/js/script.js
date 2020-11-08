// home
$('#body-content .tabs a').click(function(e){
    $('#body-content .tabs a').removeClass('active');
    $(this).addClass('active');
    let target = e.target.getAttribute('data-target');
    $('.card-content div').css('display', 'none')
    $(target).css('display', 'block');
});

// order
