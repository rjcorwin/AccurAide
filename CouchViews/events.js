 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = { _id:'_design/api' }

ddoc.views = {
  
  EventsNotQueued: {
    map: function(doc) {
    	if(doc.queued == false){ 
    	  emit(doc._id, true)
    	}
    }
  }

};

module.exports = ddoc;
