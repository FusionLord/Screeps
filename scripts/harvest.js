module.exports = {
    run(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.room.findNearest(RESOURCE_ENERGY);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            if( creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
    }
};