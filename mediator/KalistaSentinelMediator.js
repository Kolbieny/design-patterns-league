"use strict";
class KalistaSentinelMediator {
    constructor(kalista, sentinel) {
        this.isPosition = (data) => {
            return true;
        };
        this.kalista = kalista;
        this.sentinel = sentinel;
        this.kalista.setSentinelMediator(this);
        this.sentinel.setKalistaMediator(this);
    }
    notify(event, data) {
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
}
class Kalista {
    setSentinelMediator(sentinelMediator) {
        this.sentinelMediator = sentinelMediator;
    }
    castSentinel() {
        this.sentinelMediator.notify('cast-sentinel');
    }
    showEnemy(position) {
        console.log(`Kalista can see the enemy at position (${position.x}, ${position.y})`);
    }
}
class Sentinel {
    setKalistaMediator(kalistaMediator) {
        this.kalistaMediator = kalistaMediator;
    }
    generate() {
        console.log('Sentinel has spawned');
    }
    informEnemyFound(position) {
        this.kalistaMediator.notify('enemy-found', position);
    }
    scream() {
        console.log('Sentinel is screaming!');
    }
}
function main() {
    const kalista = new Kalista();
    const sentinel = new Sentinel();
    new KalistaSentinelMediator(kalista, sentinel);
    kalista.castSentinel();
    sentinel.informEnemyFound({ x: 33, y: 24 });
}
main();
