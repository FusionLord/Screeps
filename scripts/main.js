require('spawn');
var harvester = require('harvest');
var upgrader = require('upgrader');
var builder = require('builder');
var populate = require('populate');

module.exports.loop = function () {
	populate.run();
    for (var name in Game.creeps) {
        var harvesterCount = _.filter(Game.creeps, function (creep) {
            return creep.memory.role == 'Harvester' && creep.ticksToLive > 12;
        }).length;
        var creep = Game.creeps[name];
    	if (creep.memory.role == 'Harvester' || (harvesterCount < 1)) { harvester.run(creep); }
    	else if (creep.memory.role == 'Upgrader') { upgrader.run(creep); }
    	else if (creep.memory.role == 'Builder') { builder.run(creep); }
    }
};