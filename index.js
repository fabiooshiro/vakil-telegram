"use strict";

(function() {
    var axios = require('axios');

    function Telegram(token) {
        var base_url = 'https://api.telegram.org/bot' + token + '/';
        return function(method, data) {
            return new Promise(function(resolve, reject) {
                axios.post(base_url + method, data).then(function(result) {
                    var data = result.data;
                    if (data.ok) {
                        resolve(data);
                    }
                    else {
                        reject(data);
                    }
                }).catch(function(error) {
                    reject(error);
                });
            });
        };
    }
    
    module.exports = Telegram;
})();
