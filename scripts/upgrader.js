var harvester = require('harvest');
module.exports = {
	run(creep) {
        if(creep.carry.energy < creep.carryCapacity && !creep.memory.working) {
            if (Game.spawns.Spawn1.energy > 200)
            {
                if (Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Game.spawns.Spawn1);
                }
            }
            else{
                harvester.run(creep);
            }
        }else {
            if (creep.carry.energy == 0) { creep.memory.working = false; }
            else {
                creep.memory.working = true;
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
	}
};