document.addEventListener("DOMContentLoaded", () => {
    // Add rel="me" to Social links (especially on all page footers),
    // allowing social sites to verify ownership of sites
    const host = document.location.host;
    const re = new RegExp(host, "g");
    document.querySelectorAll("ul.social-icons a[href]").forEach(link => {
        // Prepend "me" to rel attribute of links (NB: this is safe, if rel attr already exists)
        // Only choose external links and perform fast check and skip if link starts with "/" (relative link)
        if (!link.href.startsWith("/") && !re.test(link.href)) {
            link.rel = `me ${link.rel || ""}`.trim();
        }
    });
});