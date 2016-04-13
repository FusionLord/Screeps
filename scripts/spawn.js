Spawn.prototype.createDrone = function (type) {
    if (!this.memory.droneCount)
    {
        this.memory.droneCount = 0;
    }
    this.memory.droneCount = this.memory.droneCount + 1;
    console.log('Creating drone ' + (this.memory.droneCount - 1));
    return this.createCreep([WORK, CARRY, MOVE], "Drone" + (this.memory.droneCount - 1), {role: type})
};