// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "room4":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "room3":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000001010000000000000000000000000000010100000000000000000000000000000101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "room2":
            case "level5":return tiles.createTilemap(hex`10001000010101010101010101010101010101010102030303030303030301030b0b040101050a0a0a0a0a0a0a0a010a0a0a080101050a0a0a0a0a0a0a0a010a0a0a080101050a0a0a0a0a0a0a0a010a0a0a080101050a0a0a0a0a0a0a0a010a0a0a080101050a0a0a0a0a0a0a0a010a0a0a080101050a0a0a0a0a0a0a010101010a08010101010101010a0a0a010a0a0a0a080101050c0a0a010a0a0a010a0a0a0a080101050a0a0a0a0a0a0a0a0a0a0a0a080101050a0a0a0a0a0a0a0a0a0a0a0a0801010101010101010a0a0101010101010101050a0a0a0a0a0a0a0a0a0a0a0a08010106090909090909090909090909070101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . . . . . . 2 2 2 2 . . 2 
2 2 2 2 2 2 . . . 2 . . . . . 2 
2 . . . . 2 . . . 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairSouth,sprites.dungeon.chestClosed], TileScale.Sixteen);
            case "startingroom":
            case "level1":return tiles.createTilemap(hex`10001000010101010101010e0e01010101010101010203030303030b0b0303030303040101050808080808080808080808080a0101050808080808080808080808080a0101010101010101010101010101010a0101050808080808080808080808080a0101050808080808080101010101010101010508080808080801080c08080d0a0101050808080808080108080808080a0101050808080808080108080808080a0101050808080808080808080808080a0101050808080808080808080808080a0101010101010101010101010101080a0101050808080808080808080808080a010106070707070707070707070707090101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.stairSouth,myTiles.tile1,myTiles.tile2,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "pickaxe":
            case "tile1":return tile1;
            case "fire":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
