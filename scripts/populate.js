var _ = require('lodash');

module.exports = {
    run() {
        var spawn = Game.spawns.Spawn1;
        if (spawn.energy > 200) {
            var count = _.filter(Game.creeps, function (creep) {
                return creep.memory.role == 'Harvester' && creep.ticksToLive > 12;
            }).length;
            if (count < 5) {
                spawn.createDrone('Harvester');
            }
            else {
                count = _.filter(Game.creeps, function (creep) {
                    return creep.memory.role == 'Builder' && creep.ticksToLive > 12;
                }).length;
                if (count < 3) {
                    spawn.createDrone('builder');
                }
                else {
                    count = _.filter(Game.creeps, function (creep) {
                        return creep.memory.role == 'Upgrader' && creep.ticksToLive > 12;
                    }).length;
                    if (count < 3) {
                        spawn.createDrone("Upgrader");
                    }
                }
            }
        }
    }
};