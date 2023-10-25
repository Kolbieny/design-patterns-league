interface Data {}

interface Position extends Data {
    x: Number,
    y: Number
}

//The idea of mediator is to notify compounded components
interface Mediator {
    notify(event: string): void;
}

//The interface implementation requires Mediator components on attribute
class KalistaSentinelMediator implements Mediator {
    private kalista: Kalista;
    private sentinel: Sentinel;

    constructor(kalista: Kalista, sentinel: Sentinel) {
        this.kalista = kalista;
        this.sentinel = sentinel;
        this.kalista.setSentinelMediator(this);
        this.sentinel.setKalistaMediator(this);
    }

    public notify(event: string, data?: Data): void {
        switch (true) {
            case (event === 'cast-sentinel'):
                this.sentinel.generate();
                break;
            case (event === 'enemy-found'):
                if (data && this.isPosition(data)) {
                    this.sentinel.scream();
                    this.kalista.showEnemy(data);
                    break;
                }

                console.log('Invalid data type (Position required)');
                break;
            default:
                console.log('No matching event found');
                break;
        }
    }

    private isPosition = (data: Data): data is Position => {
        return true;
    }
}

//The components have its field to bound with Mediator.
//When we want to extend them, the instances are communication through the same Mediator
class Kalista {
    private sentinelMediator: KalistaSentinelMediator|undefined;

    public setSentinelMediator(sentinelMediator: KalistaSentinelMediator) {
        this.sentinelMediator = sentinelMediator;
    }

    public castSentinel(): void {
        this.sentinelMediator!.notify('cast-sentinel');
    }

    public showEnemy(position: Position) {
        console.log(`Kalista can see the enemy at position (${position.x}, ${position.y})`)
    }
}

class Sentinel {
    private kalistaMediator: KalistaSentinelMediator|undefined;

    public setKalistaMediator(kalistaMediator: KalistaSentinelMediator) {
        this.kalistaMediator = kalistaMediator;
    }

    public generate(): void {
        console.log('Sentinel has spawned');
    }

    public informEnemyFound(position: Position): void {
        this.kalistaMediator!.notify('enemy-found', position)
    }

    public scream(): void {
        console.log('Sentinel is screaming!');
    }
}

function main() {
    const kalista = new Kalista();
    const sentinel = new Sentinel();
    new KalistaSentinelMediator(kalista, sentinel);

    kalista.castSentinel();
    sentinel.informEnemyFound({x: 33, y: 24});
}

main();