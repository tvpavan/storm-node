var Storm = require('./storm.js'),
	util = require('util');

function BasicBolt() {
	//Empty Constructor
}

util.inherits(BasicBolt, Storm);


BasicBolt.prototype.initCallback = function(stormconf, context, self) {
    self.initialize(stormconf, context, self );
}

BasicBolt.prototype.tupleCallback = function(tuple, self) {
	self.anchoringTuple = tuple;
	
	var callback = function() {
		self.ack(tuple, self);
	};
	
	self.process(tuple, self);
        self.ack(tuple, self);
};

module.exports = BasicBolt;
