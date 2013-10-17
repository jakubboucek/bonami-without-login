if (document.body.querySelectorAll) {
    var elements = document.body.querySelectorAll('body>div.overlay, body>div.loginOverlay-v2');
    for (var i = 0, j = elements.length; i < j; i++) {
        var element = elements[i];
        element.parentNode.removeChild(element);
    }
}
