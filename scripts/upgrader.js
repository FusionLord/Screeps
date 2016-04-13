module.exports = {
	run(creep) {
        if(creep.carry.energy == 0) {
            if (Game.spawns.Spawn1.energy >= 200)
            {
                if (Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Game.spawns.Spawn1);
                }
            }
        }else {
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