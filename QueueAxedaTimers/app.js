var fs = require('fs')
var settings = JSON.parse(fs.readFileSync(__dirname + '/../settings.json', 'utf8'))
var _ = require('underscore')
var request = require('request-json')
var client = request.newClient(settings.axeda.url) 
var nano = require('nano')(settings.database.url)
var aidNetDb = nano.use('aidnet')


aidNetDb.view('api', 'timerSetIsFalse', {include_docs:true}, function(err, results) {

  if (err) console.log(err)
  if (results.rows.length > 0) {
    console.log(results.rows)

    results.rows.forEach(function(row) {
      
      var serviceUrl = '/services/v1/rest/Scripto/execute/rfi_SystemTimer?username=' + settings.axeda.username + '&password=' + settings.axeda.password + ''

      var params = {
        user: row.doc.user,
        date: row.doc.date,
        phone: row.doc.phone,
        message: row.doc.message,
        model: row.doc.model,
        asset: row.doc.asset 
      }

      _.each(params, function(value, key, list) {
        serviceUrl += '&' + key + '=' + value + ''
      })

      console.log(serviceUrl)
      client.get(serviceUrl, function(err, res, body) {
        if (err) console.log(err)
        console.log(res.statusCode)
        row.doc.timerSet = true
        aidNetDb.insert(row.doc, function(err, newDoc) {
          if(err) console.log(err)
          else console.log('Yay!')
        })
      })

    })

  }
})

