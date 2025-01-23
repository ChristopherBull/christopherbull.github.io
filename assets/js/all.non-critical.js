document.addEventListener("DOMContentLoaded", function () {
    // Add rel="me" to Social links (especially on all page footers), allowing social sites to verify ownership of sites
    document.querySelectorAll("ul.social-icons a[href]").forEach(function(link) {
        // Prepare to check current host
        const host = document.location.host;
        const re = new RegExp(host, "g");
        // Only choose external links
        // Performs fast check and skip if link starts with "/" (relative link), then checks if an absolute link goes to an external site.
        if (!link.href.startsWith("/") && !re.test(link.href)) {
            // Prepend "me" to rel attribute of links (NB: this is safe, if rel attr already exists)
            const curRel = link.getAttribute("rel");
            link.setAttribute("rel", "me " + curRel);
        }
    });
});