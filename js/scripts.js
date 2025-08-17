const menus = {
    header: {
        "Home": "index.html",
        "Contacts": "contacts.html",
        "About": "about.html",
    },
    footer: {
        "О проекте": "about.html",
        "Контакты": "contacts.html",
        "Политика конфиденциальности": "privacy.html",
        "Условия использования": "terms.html",
        "Глоссарий": "glossary.html",
        "Помощь": "help.html"
    },
    menuMaker: function(x) {
        return Object.entries(x).map(([key, value]) => `<a href="${value}">${key}</a>`).join(" | ");
    },
}