//This is a very long project i've abandoned :)

Block.setExplosionResistance(235, 0.01);

Item.addCraftRecipe(235, 3, 0, [266, 3, 0, 264, 3, 0]);
Item.addCraftRecipe(236, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(237, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(238, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(239, 3, 0, [266, 3, 0, 264, 4, 0]);
Item.addCraftRecipe(240, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(241, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(242, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(243, 3, 0, [266, 4, 0, 264, 4, 0]);
Item.addCraftRecipe(244, 5, 0, [266, 2, 0, 264, 2, 0]);
Item.addCraftRecipe(245, 5, 0, [266, 4, 0, 264, 4, 0]);

preventDefault();

Player.addItemCreativeInv(235, 1, 0);
Player.addItemCreativeInv(236, 1, 0);
Player.addItemCreativeInv(237, 1, 0);
Player.addItemCreativeInv(238, 1, 0);
Player.addItemCreativeInv(239, 1, 0);
Player.addItemCreativeInv(240, 1, 0);
Player.addItemCreativeInv(241, 1, 0);
Player.addItemCreativeInv(242, 1, 0);
Player.addItemCreativeInv(243, 1, 0);
Player.addItemCreativeInv(244, 1, 0);
Player.addItemCreativeInv(245, 1, 0);

function useItem(x, y, z, itemId, blockId, side){
if (itemId==237){
clientMessage("PS:you can't walk on top of it :D");
}
}

preventDefault();

function useItem(x, y, z, itemId, blockId, side){
if (itemId==238){
/*clientMessage("PS:you cant walk on top of it :D");*/
}
}

Block.defineBlock(235, "Diold", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(235, 15);

Block.setDestroyTime(235, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 235){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(235, 0, 0, 0, 0.15, 1, 1);
Block.setRenderType(235, 13);

Block.defineBlock(236, "Diold", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(236, 15);

Block.setDestroyTime(236, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 236){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(236, 0, 0, 0, 1, 1, 0.15);
Block.setRenderType(236, 13);

Block.defineBlock(237, "Diold high fence", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);
//you can't walk on top of it//
Block.setLightLevel(237, 15);

Block.setDestroyTime(237, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 237){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(237, 0, 0, 0, 0.25, 3, 1);
Block.setRenderType(237, 13);

Block.defineBlock(238, "Diold high fence", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);
//you can't walk on top of it//
Block.setLightLevel(238, 15);

Block.setDestroyTime(238, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 238){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(238, 0, 0, 0, 1, 3, 0.15);
Block.setRenderType(238, 13);

Block.defineBlock(239, "Diold pillar", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(239, 15);

Block.setDestroyTime(239, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 239){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(239, 4/20, 0, 4/20, 16/20, 2, 16/20);
Block.setRenderType(239, 13);

Block.defineBlock(240, "Diold slab", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(240, 15);

Block.setDestroyTime(240, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 240){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(240, 0, 0, 0, 1, 0.50, 1);
Block.setRenderType(240, 13);

Block.defineBlock(241, "Diold block", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(241, 15);

Block.setDestroyTime(241, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 241){

preventDefault();
Level.destroyBlock(x,y,z, true);
        }
   }

Block.setShape(241, 0, 0, 0, 1, 1, 1);
Block.setRenderType(241, 13);

Block.defineBlock(242, "Diold pole", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(242, 15);

Block.setDestroyTime(242, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 242){

preventDefault();
Level.destroyBlock(x,y,z, true);
}
}
Block.setShape(242, 20/50, 0, 20/50, 40/50, 2, 40/50);
Block.setRenderType(242, 13);

Block.defineBlock(243, "Diold carpet", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(243, 15);

Block.setDestroyTime(243, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 243){

preventDefault();
Level.destroyBlock(x,y,z, true);
}
}
Block.setShape(243, 0, 0, 0, 1, 0.10, 1);
Block.setRenderType(243, 13);

Block.defineBlock(244, "Diold thing?!?", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(244, 15);

Block.setDestroyTime(244, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 244){

preventDefault();
Level.destroyBlock(x,y,z, true);
}
}
Block.setShape(244, 0, 0, 0, 1, 0.20, 0.25);
Block.setRenderType(244, 13);

Block.defineBlock(245, "Diold thing?!?", [["diamond_block", 0], ["gold_block", 0], ["gold_block", 0], ["diamond_block", 0], ["gold_block", 0],["diamond_block", 0]]);

Block.setLightLevel(245, 15);

Block.setDestroyTime(245, 0.01);

function destroyBlock(x,y,z){

var blockId = Level.getTile(x,y,z);

if(blockId == 245){

preventDefault();
Level.destroyBlock(x,y,z, true);
}
}
Block.setShape(245, 0, 0, 0, 0.25, 0.20, 1);
Block.setRenderType(245, 13);
