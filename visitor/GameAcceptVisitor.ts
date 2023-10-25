//Components use method with Visitor as attribute to give him an access
interface GameLoader {
    accept(manager: GameManagerVisitor): void;
}

class SummonersRiftGameLoader implements GameLoader {
    public accept(manager: GameManagerVisitor): void {
        manager.loadSummonersRiftGame(this);
    }

    public loadSummonersRiftMap(): string {
        return 'Loaded a Summoners Rift map';
    }
}

class TftGameLoader implements GameLoader {
    public accept(manager: GameManagerVisitor): void {
        manager.loadTftGame(this);
    }

    public loadTftMap(): string {
        return 'Loaded a TFT map';
    }
}

//Visitor are triggering component (passed as attribute) methods
interface GameManagerVisitor {
    loadSummonersRiftGame(loader: SummonersRiftGameLoader): void;
    loadTftGame(loader: TftGameLoader): void;
}

class MobileGameManager implements GameManagerVisitor {
    public loadSummonersRiftGame(loader: SummonersRiftGameLoader): void {
        console.log('[WILD RIFT]: ' + loader.loadSummonersRiftMap());
    }

    public loadTftGame(loader: TftGameLoader): void {
        console.log('[TFT MOBILE]: ' + loader.loadTftMap());
    }
}

class DesktopGameManager implements GameManagerVisitor {
    public loadSummonersRiftGame(loader: SummonersRiftGameLoader): void {
        console.log('[DESKTOP]: ' + loader.loadSummonersRiftMap());
    }

    public loadTftGame(loader: TftGameLoader): void {
        console.log('[DESKTOP]: ' + loader.loadTftMap());
    }
}

function main() {
    const desktop = new DesktopGameManager();
    const mobile = new MobileGameManager();

    const summonersLoader = new SummonersRiftGameLoader();
    const tftLoader = new TftGameLoader();

    console.log('I want to play TFT on my phone:');
    tftLoader.accept(mobile);

    console.log('I want to play Wild Rift on my phone:');
    summonersLoader.accept(mobile);

    console.log('I want to play TFT on my PC:');
    tftLoader.accept(desktop);

    console.log('I want to play Summoners Rift on my PC:');
    summonersLoader.accept(desktop);
}

main();