var harvester = require('harvest');
var upgrader = require('upgrader');
var builder = require('builder');
var populate = require('populate');

module.exports.loop = function () {
	populate.run();
    for (var name in Game.creeps) {
        var harvesterCount = _.filter(Game.creeps, function (creep) {
            return creep.name.startsWith('Harvester') && creep.ticksToLive > 12;
        }).length;
        var creep = Game.creeps[name];
    	if (name.startsWith("Harvester") || (harvesterCount < 1)) { harvester.run(creep); }
    	if (name.startsWith("Upgrader")) { upgrader.run(creep); }
    	if (name.startsWith("Builder")) { builder.run(creep); }
    }
};