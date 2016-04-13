Spawn.prototype.createDrone = function (type) {
    if (!this.memory.droneCount)
    {
        this.memory.droneCount = -1;
    }
    this.memory.droneCount = this.memory.droneCount + 1;
    return this.createCreep([WORK, CARRY, MOVE], "Drone" + this.memory.droneCount, {role: type})
};