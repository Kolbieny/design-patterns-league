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


class GameLoaderFacade {
    protected summonersRiftMap: SummonersRiftMap;

    protected playersGenerator: PlayersGenerator;

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