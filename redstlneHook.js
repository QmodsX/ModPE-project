var goldId = 41;

function redstoneUpdateHook(x,y,z,newCurrent, worldLoading, blockId, blockDamage){
	var powered = newCurrent;
	if(blockId == goldId && powered >=1 && powered <= 15){
		Level.destroyBlock(x,y,z,true);
	}
}
