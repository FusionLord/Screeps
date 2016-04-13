var harvester = require('harvest');
var upgrader = require('upgrader');
var builder = require('builder');
var populate = require('populate');

module.exports.loop = function () {
	populate.run();
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
    	if (name.startsWith("Harvester") || Game.creeps.length == 1) { harvester.run(creep); }
    	if (name.startsWith("Upgrader")) { upgrader.run(creep); }
    	if (name.startsWith("Builder")) { builder.run(creep); }
    }
}