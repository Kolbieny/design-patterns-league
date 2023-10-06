"use strict";
class SummonersRiftGameLoader {
    accept(manager) {
        manager.loadSummonersRiftGame(this);
    }
    loadSummonersRiftMap() {
        return 'Loaded a Summoners Rift map';
    }
}
class TftGameLoader {
    accept(manager) {
        manager.loadTftGame(this);
    }
    loadTftMap() {
        return 'Loaded a TFT map';
    }
}
class MobileGameManager {
    loadSummonersRiftGame(loader) {
        console.log('[WILD RIFT]: ' + loader.loadSummonersRiftMap());
    }
    loadTftGame(loader) {
        console.log('[TFT MOBILE]: ' + loader.loadTftMap());
    }
}
class DesktopGameManager {
    loadSummonersRiftGame(loader) {
        console.log('[DESKTOP]: ' + loader.loadSummonersRiftMap());
    }
    loadTftGame(loader) {
        console.log('[DESKTOP]: ' + loader.loadTftMap());
    }
}
function main() {
    const desktop = new DesktopGameManager();
    const mobile = new MobileGameManager();
    const summonersLoader = new SummonersRiftGameLoader();
    const tftLoader = new TftGameLoader();
    console.log('I want to play TFT on my phone:');
    mobile.loadTftGame(tftLoader);
    console.log('I want to play Wild Rift on my phone:');
    mobile.loadSummonersRiftGame(summonersLoader);
    console.log('I want to play TFT on my PC:');
    desktop.loadTftGame(tftLoader);
    console.log('I want to play Summoners Rift on my PC:');
    desktop.loadSummonersRiftGame(summonersLoader);
}
main();
