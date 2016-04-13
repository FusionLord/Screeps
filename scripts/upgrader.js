module.exports = {
	run(creep) {
        if(creep.carry.energy < creep.carryCapacity && creep.memory.working == true) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if (creep.carry.energy > 0) {
                creep.memory.working = false;
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
            else {
                creep.memory.working = true;
            }
        }
	}
};