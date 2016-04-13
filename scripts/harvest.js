module.exports = {
    run(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            var storage = creep.pos.findClosestByRange(FIND_STRUCTURES, 1,
                {
                    filter: {
                        structureType: STRUCTURE_CONTAINER, STRUCTURE_SPAWN, function(structure) {
                            return _.sum(structure.store) < structure.store;
                        }
                    }
                });
            if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
};