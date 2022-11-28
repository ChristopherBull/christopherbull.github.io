$(function () {

    // Add rel="me" to Social links, allowing social sites to verify ownership of sites
    $("ul.social-icons a[href]").each(function() {
        // Prepare to check current host
        var host = document.location.host;
        var re = new RegExp(host, "g");
        // Only choose external links
        // Performs fast check and skip if link starts with "/" (relative link), then checks if an absolute link goes to an external site.
        if (!this.href.startsWith("/") && !re.test(this.href)) {
            // Prepend "me" to rel attribute of links (NB: this is safe, if rel attr already exists)
            var curRel = $(this).attr("rel");
            $(this).attr("rel", "me " + curRel);
        }
    });
    
});