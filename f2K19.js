;(function() {
var SCROLL_HEIGHT = 1e20;

function scrollToBottom(el, cb) {
    // Scroll to the bottom of target el
    var x = setInterval(function() {
        console.log('Scrolling to bottom!');
        var isScrolledToBottom = el.scrollHeight - el.clientHeight <= el.scrollTop + 1;
        el.scrollTop = SCROLL_HEIGHT;
        if (isScrolledToBottom) {
            clearInterval(x);
            if (cb && typeof cb === 'function') cb();
        }
    }, 1000);
}

function sendInvitations() {
    var button = document.getElementsByClassName('layerConfirm');
    for (var i = 0; i < button.length; i++) {
        if (button[i].innerHTML.indexOf('nvitations') > -1) {
            button[i].click();
            setTimeout(function() {
                alert("Thanks for making Felicity Awesome!");
            }, 400);
            return;
        }
    }
}

var form = document.getElementsByClassName('_s');
if (form && form.length) {
    form = form[0];
    var listView = form.getElementsByClassName('scrollable');
    for (var i = 0; i < listView.length; i++) {
        var x = listView[i].innerHTML.match(/Friends \([0-9]+\)/ig);
        if (x !== null) {
            console.log('Found listView:', i);
            listView = listView[i];
            break;
        }
    }
    var box = listView.closest('.uiScrollableAreaWrap.scrollable');
    if (box) {
        setTimeout(function() {
            scrollToBottom(box, function() {
                var MAX_INVITES = 400;
                var friendsList = document.getElementsByClassName('_1pt_ _1pu0');
                var i = 0;
                var x = setInterval(function() {
                    if (i > friendsList.length || i > MAX_INVITES) {
                        clearInterval(x);
                        sendInvitations();
                    } else {
                        if (friendsList[i].innerHTML.indexOf('invited') === -1) {
                            friendsList[i].click();
                        }
                        i++;
                    }
                }, 50);
            });
        }, 1000);
    }
}
})();
// credits : Aalekh Jain