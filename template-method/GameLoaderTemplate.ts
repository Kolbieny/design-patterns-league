abstract class GameLoaderTemplate {
    public buildGame(): void {
        this.loadMap();
        this.loadItems();
        this.spawnPlayers();
    }

    protected spawnPlayers(): void {
        console.log('Spawning players');
    }

    protected loadItems(): void {
        console.log('Loaded a basic set of items to the shop');
    }

    protected abstract loadMap(): void;
}

class SummonersRiftGameLoader extends GameLoaderTemplate {
    protected loadMap() {
        console.log('Loaded the Summoners Rift');
    }
}

class HowlingAbyssGameLoader extends GameLoaderTemplate {
    protected loadMap() {
        console.log('Loaded the Howling Abyss');
    }

    protected loadItems(): void {
        console.log('Loaded a special Howling Abyss set of items to the shop');
    }
}

function main() {
    const summonersRift = new SummonersRiftGameLoader();
    const howlingAbyss = new HowlingAbyssGameLoader();

    summonersRift.buildGame();
    console.log('--------------')
    howlingAbyss.buildGame();
}

main();
