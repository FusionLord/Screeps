var _ = require('lodash');

module.exports = {
    run() {
        var spawn = Game.spawns.Spawn1;
        if (spawn.energy > 200) {
            var count = _.filter(Game.creeps, function (creep) {
                return creep.name.startsWith('Harvester') && creep.ticksToLive > 12;
            }).length;
            if (count < 5) {
                Memory.harvestersCount = Memory.harvestersCount + 1;
                spawn.createCreep([WORK, CARRY, MOVE], 'Harvester' + Memory.harvestersCount);
            }
            else {
                count = _.filter(Game.creeps, function (creep) {
                    return creep.name.startsWith('Builder') && creep.ticksToLive > 12;
                }).length;
                if (count < 3) {
                    Memory.buildersCount = Memory.buildersCount + 1;
                    spawn.createCreep([WORK, CARRY, MOVE], 'Builder' + Memory.buildersCount);
                }
                else {
                    count = _.filter(Game.creeps, function (creep) {
                        return creep.name.startsWith('Upgrader') && creep.ticksToLive > 12;
                    }).length;
                    if (count < 3) {
                        Memory.upgradersCount = Memory.upgradersCount + 1;
                        spawn.createCreep([WORK, CARRY, MOVE], 'Upgrader' + Memory.upgradersCount);
                    }
                }
            }
        }
    }
};