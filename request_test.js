var request = require('ajax-request');

request({
    url: 'http://localhost:3001/service/home_list1',
    method: 'GET',
}, function (err, res, body) {
    console.log(body)

});