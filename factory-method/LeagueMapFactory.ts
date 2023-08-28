abstract class LeagueMapFactory {
    public abstract getShop(): Shop

    public buyItem(): void
    {
        const item = this.getItem()
        console.log(`Bought: ${item}`)
    }

    private getItem(): string
    {
        return this.getShop().getItem()
    }
}

interface Shop {
    getItem(): string;
}

class SummonersRiftShop implements Shop {
    public getItem(): string {
        return "Hullbreaker";
    }
}

class HowlingAbyssShop implements Shop {
    public getItem(): string {
        return "Guardian's Horn";
    }
}


class SummonersRift extends LeagueMapFactory {
    public getShop(): Shop {
        return new SummonersRiftShop();
    }
}

class HowlingAbyss extends LeagueMapFactory {
    public getShop(): Shop {
        return new HowlingAbyssShop();
    }
}

function main(leagueMap: LeagueMapFactory): void {
    leagueMap.buyItem();
}

main(new SummonersRift());
main(new HowlingAbyss());