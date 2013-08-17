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
    self.ack(tuple, self);
    self.anchoringTuple = null;


    self.process(tuple, self);

};

module.exports = BasicBolt;

