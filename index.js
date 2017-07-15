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
                    try {
                        var json = JSON.parse(body);
                        if (json.ok) {
                            resolve(json);
                        }
                        else {
                            reject(json);
                        }
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        };
    }
    
    module.exports = Telegram;
})();
