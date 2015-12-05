//This is just an experiment

var firsttime = true;
var firsttimeblock = true;
var creating_block;
var creating_item;
var DATA_BLOCK = 255;
var ITEM_CREATOR = 460;
var BLOCK_CREATOR = 462;

ModPE.setItem(ITEM_CREATOR, "blaze_rod", 0, "Item Creator", 3);
ModPE.setItem(BLOCK_CREATOR, "blaze_rod", 0, "Block Creator", 3);
Player.addItemCreativeInv(ITEM_CREATOR, 1, 0);
Player.addItemCreativeInv(BLOCK_CREATOR, 1, 0);
//Player.addItemCreativeInv(DATA_BLOCK, 1, 0); *Crashing (BlockLauncher Bug)

Block.defineBlock(255, "Data Block", ["furnace", 3], 1, false);
Block.setShape(255, 1, 1, 1, 1, 1, 1, 1);
Block.setDestroyTime(DATA_BLOCK, 15);
Block.setExplosionResistance(DATA_BLOCK, 99999999);
Block.setLightLevel(DATA_BLOCK, 10);

function useItem(x,y,z,itemid,blockid,side){
	if(blockid == DATA_BLOCK && itemid == ITEM_CREATOR){
		if(firsttime == true){
			creating_item = true;
			firsttime = false;
			clientMessage(ChatColor.GREEN + "/texture TextureData Name dataStackCount");
		}
		else if(firsttime == false && creating_item == false){
			addItemInventory(461, 1, 0);
			clientMessage("Item Added");
			firsttime = true;
		}
		else if(firsttime == false && creating_item == true){
			clientMessage(ChatColor.RED + "You have to create an Item first!");
		}
	}
	if(blockid == DATA_BLOCK && itemid == BLOCK_CREATOR){
		if(firsttimeblock == true){
			creating_block = true;
			firsttimeblock = false;
			clientMessage(ChatColor.GREEN + "/Texture TextureData Name ExplosionResistance DestroyTime lightLevel")
		}
		else if(firsttimeblock == false && creating_block == false){
			addItemInventory(256, 1, 0);
			clientMessage(ChatColor.GREEN + "Item Added!");
		}
		else if(firsttimeblock == false && creating_block == true){
			clientMessage(ChatColor.RED + "You have to create an item first!");
		}
	}
}

function procCmd(command){
	var cmd = command.split(" ");
	if(creating_item == true){
		ModPE.setItem(461, cmd[0], parseInt(cmd[1]), cmd[2], parseInt(cmd[3]));
		creating_item = false;
		clientMessage(ChatColor.GREEN + "Item Created!");
	}
	if(creating_block == true){
		createBlock(256, cmd[0], parseInt(cmd[1]), cmd[2], parseInt(cmd[3]), parseInt(cmd[4]), parseInt(cmd[5]));
		creating_block == false;
		clientMessage(ChatColor.GREEN + "Item Created!");
	}
}

function createBlock(id, texture, textureData, name, explosionResistance, destroyTime, lightLevel){
	try{
	Block.defineBlock(id, name, [texture, textureData], 1, false);
	Block.setExplosionResistance(id, explosionResistance);
	Block.setDestroyTime(id, destroyTime);
	Block.setLightLevel(id, lightLevel);
} catch(err){
	clientMessage(ChatColor.RED + err);
}
}

function leaveGame(){
	firsttime = true;
	creating_item = false;
	firsttimeblock = true;
	creating_block = false;
}
