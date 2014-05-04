var fs = require('fs')
var settings = JSON.parse(fs.readFileSync(__dirname + '/../settings.json', 'utf8'))
var _ = require('underscore')
var request = require('request-json')
var client = request.newClient(settings.axeda.url) 

var params = {
  user: 'testUser',
  date: '2014-05-04 10:25:00',
  phone: '8024884621',
  message: 'Client is out now',
  model: 'nlr_rpi',
  asset: 'nlr__teamh6___01'
}

var serviceUrl = '/services/v1/rest/Scripto/execute/rfi_SystemTimer?username=' + settings.axeda.username + '&password=' + settings.axeda.password + ''

var parameterString = ''

_.each(params, function(value, key, list) {
  parameterString += '&' + key + '=' + value + ''
})

var url = serviceUrl + parameterString

console.log(url)
client.get(encodeURI(url), function(err, res, body) {
  //if (err) console.log(err)
  console.log(res.statusCode)
})
