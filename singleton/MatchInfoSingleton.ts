class MatchInfoSingleton {
    //Static instance stores Singleton itself
    private static instance: MatchInfoSingleton;

    //Constructor should always be private to prevent creating a new instance
    private constructor() {}

    //New instance is created only once.
    public static getInstance(): MatchInfoSingleton {
        if(!MatchInfoSingleton.instance) {
            MatchInfoSingleton.instance = new MatchInfoSingleton();
        }

        return MatchInfoSingleton.instance;
    }

    public getMatchInfo(): string {
        return 'These are match details';
    }
}

function main() {
    const match1 = MatchInfoSingleton.getInstance();
    const match2 = MatchInfoSingleton.getInstance();

    if (match1 === match2) {
        console.log('These two are the same matches');
    } else {
        console.log('There two are NOT the same matches');
    }
}

main();