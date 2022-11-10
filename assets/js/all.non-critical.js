$(function () {

    // Add rel="me" to Social links, allowing social sites to verify ownership of sites
    $("ul.social-icons a[href]").each(function() {
        // Only choose outgoing links
        var host = document.location.host;
        var re = new RegExp(host, "g");
        if ($(this).attr("href").match(/\/\//) && !$(this).attr("href").match(re)) {
            // Add rel="me" to a link
            $(this).attr("rel", "me");
        }
    });
    
});