var _ = require('lodash');

module.exports = {
    run() {
		var spawn = Game.spawns.Spawn1;
		if (spawn.energy > 200) {
			var count = _.filter(Game.creeps, function(creep){ return creep.name.startsWith('Harvester') && creep.ticksToLive > 12; }).length
			if (count < 5) {
                Memory.harvesters.count = Memory.harvesters.count + 1;
				spawn.createCreep([WORK, CARRY, MOVE], 'Harvester' + Memory.harvesters.count);
			}
			count = _.filter(Game.creeps, function(creep){ return creep.name.startsWith('Builder') && creep.ticksToLive > 12; }).length
			if (count < 5) {
                Memory.builders.count = Memory.builders.count + 1;
				spawn.createCreep([WORK, CARRY, MOVE], 'Builder' + Memory.builders.count);
			}
			count = _.filter(Game.creeps, function(creep){ return creep.name.startsWith('Upgrader') && creep.ticksToLive > 12; }).length
			if (count < 2) {
                Memory.upgraders.count = Memory.upgraders.count + 1;
				spawn.createCreep([WORK, CARRY, MOVE], 'Upgrader' + Memory.upgraders.count);
			}
		}
    }
};