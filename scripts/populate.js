var _ = require('lodash');

module.exports = {
    run() {
		var spawn = Game.spawns.Spawn1;
		if (spawn.energy > 200) {
			var count = _.filter(Game.creeps, function(creep){ return creep.name.startsWith('Harvester') && creep.ticksToLive > 12; }).length
			if (count < 5) {
                Game.memory.harvesters.count += 1;
				spawn.createCreep([WORK, CARRY, MOVE], 'Harvester' + memory.harvesters.count);
			}
			count = _.filter(Game.creeps, function(creep){ return creep.name.startsWith('Builder') && creep.ticksToLive > 12; }).length
			if (count < 5) {
                Game.memory.builders.count += 1;
				spawn.createCreep([WORK, CARRY, MOVE], 'Builder' + memory.builders.count);
			}
			count = _.filter(Game.creeps, function(creep){ return creep.name.startsWith('Upgrader') && creep.ticksToLive > 12; }).length
			if (count < 2) {
                Game.memory.upgraders.count += 1;
				spawn.createCreep([WORK, CARRY, MOVE], 'Upgrader' + memory.upgraders.count);
			}
		}
    }
};