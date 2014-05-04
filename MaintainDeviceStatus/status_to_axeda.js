fs = require('fs')
request = require('request-json')
var client = request.newClient('http://iotboston.com');

var status = 'in'

setInterval(function() {
	var lines = require('fs').readFileSync(__dirname + '/status', 'utf8').split('\n')	
	var currentStatus = lines[lines.length-2]
	if (currentStatus !== status) {
		status = currentStatus
		console.log(status) 
		var data = {
			"alarms":[],
			"events":[],
			"data":[
				{"dataItems":
					{"status": status}
				}
			],
			"locations": []
		}
		client.post('/ammp/data/1/nlr_rpi!nlr__teamh6___01', data, function(err, res, body) {
			return console.log(res.statusCode);
		})
	}
}, 500)
