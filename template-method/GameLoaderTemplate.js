"use strict";
class GameLoaderTemplate {
    buildGame() {
        this.loadMap();
        this.loadItems();
        this.spawnPlayers();
    }
    spawnPlayers() {
        console.log('Spawning players');
    }
    loadItems() {
        console.log('Loaded a basic set of items to the shop');
    }
}
class SummonersRiftGameLoader extends GameLoaderTemplate {
    loadMap() {
        console.log('Loaded the Summoners Rift');
    }
}
class HowlingAbyssGameLoader extends GameLoaderTemplate {
    loadMap() {
        console.log('Loaded the Howling Abyss');
    }
    loadItems() {
        console.log('Loaded a special Howling Abyss set of items to the shop');
    }
}
function main() {
    const summonersRift = new SummonersRiftGameLoader();
    const howlingAbyss = new HowlingAbyssGameLoader();
    summonersRift.buildGame();
    console.log('--------------');
    howlingAbyss.buildGame();
}
main();
