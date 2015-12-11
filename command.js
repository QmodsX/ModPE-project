//Credit to ZhuoweiZhang < for his code!

var UPWARD = 1;
var DOWNWARD = -1;
var Exp = 50;
var id = null;
var homeX;
var homeY;
var homeZ;
var Mob;
var HouseProtector;
var emptyslot = null;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var bat, blaze, chicken, cow, pig, creeper, enderman, zombie, pigzombie, ghast, skeleton, sheep, rabbit, lightning, irongolem, lavaslime, zombievillager, mushroomcow;

/*ModPE.setItem(460, "apple_golden", 0, "Enhanced Food", 64);//Still on beta stage!
Item.setProperties(460, 
{
	"use_animation": "eat",
	"use_duration": 32,
	"hover_text_color": "aqua",
	"food":{
		"nutrition": 4,
		"saturation_modifier": "supernatural",
		"enchanted_effects": [
        {
          "name": "regeneration",
          "chance": 0.66,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 0.66,
          "duration": 120, // 2 * 60
          "amplifier": 0
        },
        {
          "name": "resistance", // damage resistance
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        }
        ]
	}
}
); //Doesnt seem to work
Item.addShapedRecipe(460, 1, 0,  ["d d",
 " f ",
 "x a",
],["f", 322, 0, "d", 393, 0, "x", 396, 0, "a", 366, 0]);
*/
function newLevel(){
	say("Vvv is currently in beta!")
	if(Level.getGameMode() == 1){
		Entity.setCarriedItem(getPlayerEnt(), 0, 1, 0);
	}
}

function procCmd(command){
var cmd = command.split(" ");
var px = getPlayerX();
var py = getPlayerY();
var pz = getPlayerZ();
switch(cmd[0]){
	case "command":
	say("/up");
	say("/down");
	say("/sell");
	say("/exp [amount]");
	say("/explode [radius]");
	say("/id on;off");
	say("/command2 for page 2");
	break;
	case "command2":
	say("/sethome");
	say("/home");
	say("/protector");
	say("/emptyslot");
	say("/undoslot");
	say("/feed");
	say("/command3 for page 3");
	break;
	case "command3":
	say("/gm 0;survival;1;creative");
	say("/settime day;night");
	say("/setspawn");
	say("/flymode on;off");
	say("/heal");
	say("/kill");
	say("/command4 for page 4");
	break;
	case "command4":
	say("/give [id] [amount] [itemdata]");
	say("/removealleffect");
	say("/sethealth [amount/half-hearts]");
	say("/addeffect [effectname] [amplification][duration]");
	say("/summon [type] [xRelative] [yRelative] [zRelative]");
	say("/lvl [amount]");
	say("/command5 for page 5");
	break;
	case "command5":
	say("/fov [amount]");
	say("/lightning");
	say("/getXYZ");
	break;
case "up":
teleportToFloor(UPWARD);
break;
case "down":
teleportToFloor(DOWNWARD);
break;
case "sell":
if(Player.getCarriedItem() != 0){
Player.addExp(Player.getCarriedItemCount() * Exp);
Entity.setCarriedItem(getPlayerEnt(), 0, 1, 0);
say("Sold!");
}
break;
case "exp":
Player.addExp(parseInt(cmd[1]));
say(parseInt(cmd[1]) + " amount of exp has been given");
break;
case "explode":
explode(getPlayerX(), getPlayerY(), getPlayerZ(), parseInt(cmd[1]));
break;
case "id":
if(cmd[1] == "on"){
id = true;
}
else if(cmd[1] == "off"){
id = false;
}
break;
case "sethome":
homeX = getPlayerX();
homeY = getPlayerY();
homeZ = getPlayerZ();
say("Home set");
break;
case "home":
setPosition(getPlayerEnt(), homeX, homeY, homeZ);
say("Welcome Home!");
break;
case "protector":
HouseProtector = Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ(), EntityType.IRON_GOLEM, "mob/steve.png");
Entity.setRenderType(HouseProtector, EntityRenderType.villager);
Entity.setHealth(HouseProtector, 150);
Entity.setMaxHealth(HouseProtector, 150);
Entity.setNameTag(HouseProtector, "Protector");
say("The Protector has been spawned!");
break;
case "emptyslot":
emptyslot = true; //For some reason this command doesn't work
say("This slot is free!!!");
break;
case "undoslot":
emptyslot = false;
break;
case "feed":
Player.setHunger(20);
break;
case "gm":
if(cmd[1] == "0" || cmd[1] == "survival"){
	Level.setGameMode(0);
	say("You are now on Survival!");
}
else if(cmd[1]== "1" || cmd[1]=="creative"){
	Level.setGameMode(1);
	say("You are now on Creative!");
}
break;
case "settime":
Level.setTime(parseInt(cmd[1]));
say("Time have been set to " + parseInt(cmd[1]));
if(cmd[1] == "day"){
	Level.setTime(0);
}
else if(cmd[1]=="night"){
	Level.setTime(18000);
}
break;
case "setspawn":
Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
say("Spawn Set!");
break;
case "flymode":
if(cmd[1]=="on"){
	Player.setFlying(true);
}
else if(cmd[1]=="off"){
	Player.setFlying(false);
}
break;
case "heal":
Entity.setHealth(getPlayerEnt(), 20);
say("Healed");
break;
case "kill":
Entity.setHealth(getPlayerEnt(), 0);
break;
case "give":
Player.addItemInventory(parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]));
say("Succesfully given");
break;
case "removealleffect":
Entity.removeAllEffect(getPlayerEnt());
break;
case "sethealth":
Entity.setHealth(getPlayerEnt(), parseInt(cmd[1]));
break;
case "addeffect":
switch(cmd[1]){
	case "absorption":
	effect(MobEffect.absorption, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "damage_boost":
	effect(MobEffect.damageBoost, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "damage_resistance":
	effect(MobEffect.damageResistance, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "haste":
	effect(MobEffect.digSpeed, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "fire_resistance":
	effect(MobEffect.fireResistance, parseInt(cmd[2])*20, parseInt(cmd[3]))
	break;
	case "health_boost":
	effect(MobEffect.healthBoost, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "invinsibility":
	effect(MobEffect.invinsibility, parseInt(cmd[2])*20, amp);
	break;
	case "jump_boost":
	effect(MobEffect.jump, parseInt(cmd[2])*20, amp);
	break;
	case "swiftness":
	effect(MobEffect.movementSpeed, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "night_vision":
	effect(MobEffect.nightVision, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "regeneration":
	effect(MobEffect.regeneration, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "saturation":
	effect(MobEffect.saturation, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	case "water_breathing":
	effect(MobEffect.waterBreathing, parseInt(cmd[2])*20, parseInt(cmd[3]));
	break;
	default: effectHelp();
}
break;
case "summon":
  switch(cmd[1]){
  	case "zombie":
  	zombie = Level.spawnMob(px, py+2, pz, EntityType.ZOMBIE, "mob/zombie.png");
  	Entity.setRenderType(zombie, EntityRenderType.zombie);
  	break; //more to add
  }
break;
case "lvl":
Player.setLevel(parseInt(cmd[1]));
say("Level Set!");
break;
case "fov":
Player.setFov(parseInt(cmd[1]));
break;
case "lightning":
 lightning = Level.spawnMob(px, py, pz, EntityType.LIGHTNING_BOLT);
say("Summoned a lightning!");
break;
case "getXYZ":
say(Math.floor(px) + " , " + Math.floor(py) + " , " + Math.floor(pz));
break;
}
}

function deathHook(a, v){
if(HouseProtector == v){
Level.dropItem(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0, 276, 1, 0);
}
}

function modTick(){
if(id == true){
ModPE.showTipMessage(Player.getCarriedItem());
}
else {
return ;
}
if(emptyslot == true){
Player.clearInventorySlot(1);
}
else { 
return ;
}
	if(Player.getLevel() >= 40){
	Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, 5*20, 1, false, true);
	say("You have Reached Tier 1 Lvl");
	}
	else if(Player.getLevel() >= 65){
	Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 5*20, 2, false, true);
	say("You have Reached Tier 2 Lvl");
	}
	else if(Player.getLevel() >= 85){
	Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 5*20, 2, false, true);
	say("You have Reached Tier 3 Lvl");
	}
	else if(Player.getLevel() >= 110){
	Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 5*20, 1, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 5*20, 2, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.saturation, 5*20, 2, false, true);
	say("You have Reached Tier 4 Lvl");
	}
	else if(Player.getLevel() >= 155){
	Entity.addEffect(getPlayerEnt(), MobEffect.absorption, 5*20, 3, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, 5*20, 3, false, true);
	Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, 5*20, 2, false, true);
	say("You have Reached Tier 5 Lvl");
	say("Congratz You have Reach the max Lvl");
	}
}

function leaveGame(){
id = null;
/*homeX = null;
homeY = null;
homeZ = null;*/
emptyslot = null;
}

function jetpackTick() {
	toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
	var player = getPlayerEnt();
	setVelX(player, playerFlySpeed * playerDir[0]);
	setVelY(player, playerFlySpeed * playerDir[1]);
	setVelZ(player, playerFlySpeed * playerDir[2]);
}


function toDirectionalVector(vector, yaw, pitch) {
	//http://stackoverflow.com/questions/1568568/how-to-convert-euler-angles-to-directional-vector
	vector[0] = Math.cos(yaw) * Math.cos(pitch);
	vector[1] = Math.sin(pitch);
	vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function teleportToFloor(direction) {
	var currentX = Math.floor(getPlayerX());
	var currentZ = Math.floor(getPlayerZ());
	var currentY = Math.floor(getPlayerY() - 1.6); //get player's feet, so subtract 1.6 (player's height)
	var beginY = currentY + (direction * 2);
	for (var i = beginY; i < 128 && i >= 0; i+=direction) {
		if (getTile(currentX, i, currentZ) != 0 && getTile(currentX, i + 1, currentZ) == 0 && getTile(currentX, i + 2, currentZ) == 0) {
			var deltaY = (i - currentY);
			setPosition(getPlayerEnt(), currentX, getPlayerY() + deltaY + 1, currentZ);
			break;
		}
	}
}

function say(msg){
clientMessage(ChatColor.RED + "[]Server]> " + ChatColor.GREEN + msg);
}

function effect(e, d, am){
	var ent = getPlayerEnt();
	Entity.addEffect(ent, e, d, am, false, true);
}

/*function spawnMob(type,skin,name,rendertype,health,eff){
	var x = getPlayerX();
	var y = getPlayerY();
	var z = getPlayerZ();
	Entity.spawnMob(x,y,z,type,skin);
	Entity.setNameTag()
}*/

function effectHelp(){
	say("absorption");
	say("damage_boost");
	say("damage_resistance");
	say("haste");
	say("fire_resistance");
	say("health_boost");
	say("invinsibility");
	say("jump_boost");
	say("swiftness");
	say("regeneration");
	say("saturation");
	say("water_breathing");
	say("/addeffect [effectname] [amplification] [duration]'");
}
