"use strict";

(function() {
    var request = require('request');

    function Telegram(token) {
        var base_url = 'https://api.telegram.org/bot' + token + '/';
        return function(method, data) {
            return new Promise(function(resolve, reject) {
                request.post({
                    url: base_url + method,
                    formData: data
                }, function(err, resp, body) {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (data.ok) {
                        resolve(data);
                    }
                    else {
                        reject(data);
                    }
                });
            });
        };
    }
    
    module.exports = Telegram;
})();
