const menus = {
    header: {
        "Home": "index.html",
        "Contacts": "contacts.html",
        "About": "about.html",
    },
    footer: ["Privacy Policy", "Terms of Service", "Help"],
    menuMaker: function(x) {
        return Object.entries(x).map(([key, value]) => `<a href="${value}">${key}</a>`).join(" | ");
    },
}