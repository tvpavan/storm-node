var Storm = require('./storm.js'),
	util = require('util');


var Bolt = function() {};

util.inherits(Bolt, Storm);

Bolt.prototype.initCallback = function(stormconf, context, self) {
    self.initialize(stormconf, context, self );
}

Bolt.prototype.tupleCallback = function(tuple, self) {	
	self.process(tuple,self);
};

module.exports = Bolt;
