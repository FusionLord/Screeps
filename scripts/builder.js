module.exports = {
    run(creep) {
    	if(creep.carry.energy == 0) {
    		if (Game.spawns.Spawn1.energy >= 150)
    		{
				if (Game.spawns.Spawn1.transferEnergy(creep) == ERR_NOT_IN_RANGE)
				{
					creep.moveTo(Game.spawns.Spawn1);
				}
    	    }
    	}
    	else {
    		var target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if ( creep.build(target) == ERR_NOT_IN_RANGE )
            {
                creep.moveTo(target);
            }
    	}
    }
};