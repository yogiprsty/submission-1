$(document).ready(() => {
    $('.right a').click(function(e){
        $('.right a').removeClass('active');
        $(this).addClass('active');
        let page = e.target.getAttribute('href').substr(1);
        loadPage(page);
    });

    $('.botnav a').click(function(e){
        $('.botnav a').removeClass('active');
        $(this).addClass('active');
        let page = e.target.getAttribute('href').substr(1);
        loadPage(page);
    });

    let page = window.location.hash.substr(1)
    if (page == "") loadPage('home');

    function loadPage(_page){
        $.get("pages/" + _page + ".html",(data) => {
            $("#body-content").html(data);
        })
        .fail(()=> $("#body-content").html("<h2>halaman tidak dapat diakses</h2>"))
    }
});