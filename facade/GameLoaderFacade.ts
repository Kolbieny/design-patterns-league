//Classes which are not meant to be modified
class SummonersRiftMap {
    public loadSummonersRiftMap(): void {
        console.log('Loaded Summoners Rift');
    }
}

class PlayersGenerator {
    public loadPlayers(): void {
        console.log('Loaded players');
    }
}

//Facade covers complicated implementation behind the curtain.
class GameLoaderFacade {
    protected summonersRiftMap: SummonersRiftMap;

    protected playersGenerator: PlayersGenerator;

    //Classes needed for the implementation are the dependencies required by Facade
    constructor(summonersRiftMap?: SummonersRiftMap, playersGenerator?: PlayersGenerator) {
        this.summonersRiftMap = summonersRiftMap || new SummonersRiftMap();
        this.playersGenerator = playersGenerator || new PlayersGenerator();
    }

    public loadMap(): void {
        this.summonersRiftMap.loadSummonersRiftMap();
        this.playersGenerator.loadPlayers();
    }
}

function main() {
    const gameLoader = new GameLoaderFacade();
    gameLoader.loadMap();
}

main();