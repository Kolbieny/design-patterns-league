"use strict";
class SummonersRiftMap {
    loadSummonersRiftMap() {
        console.log('Loaded Summoners Rift');
    }
}
class PlayersGenerator {
    loadPlayers() {
        console.log('Loaded players');
    }
}
class GameLoaderFacade {
    constructor(summonersRiftMap, playersGenerator) {
        this.summonersRiftMap = summonersRiftMap || new SummonersRiftMap();
        this.playersGenerator = playersGenerator || new PlayersGenerator();
    }
    loadMap() {
        this.summonersRiftMap.loadSummonersRiftMap();
        this.playersGenerator.loadPlayers();
    }
}
function main() {
    const gameLoader = new GameLoaderFacade();
    gameLoader.loadMap();
}
main();
