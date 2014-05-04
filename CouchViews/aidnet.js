 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = { _id:'_design/api' }

ddoc.views = {
   "timerSetIsFalse": {
       "map": "function(doc) {\n  if (doc.timerSet==false){\n    emit(doc._id,true);\n}\n}"
   } 
};

module.exports = ddoc;
