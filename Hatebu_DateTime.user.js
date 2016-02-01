// ==UserScript==
// @name       Hatebu DateTime
// @namespace  http://aycabta.github.io/
// @version    0.1.0
// @description  a
// @include    /http:\/\/b\.hatena\.ne\.jp\/[a-zA-Z][-_a-zA-Z0-9]{2,14}\//
// @copyright  2016+, Code Ass
// ==/UserScript==

(function() {
    var intervalID = setInterval(function() {
        var entries = document.querySelector('.main-entry-list');
        if (entries !== null) {
            var timestamps = entries.querySelectorAll('.timestamp:not(.datetime)');
            for (var i = 0; i < timestamps.length; i++) {
                var timestamp = timestamps[i];
        try {
                var epoch = parseInt(timestamp.parentNode.parentNode.dataset.epoch, 10);
                var date = new Date(epoch * 1000);
                var dateString = date.getFullYear() + '-' + ('00' + (date.getMonth() + 1)).substr(-2) + '-' + ('00' + date.getDate()).substr(-2);
                dateString += ' ' + ('00' + date.getHours()).substr(-2) + ':' + ('00' + date.getMinutes()).substr(-2) + ':' + ('00' + date.getSeconds()).substr(-2);
                timestamp.innerHTML = dateString;
                timestamp.classList.add('datetime');
        } catch(err) {
            console.log(err);
        }
            }
        }
    }, 800);
})();

