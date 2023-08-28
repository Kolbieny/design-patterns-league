class MatchInfoSingleton {
    private static instance: MatchInfoSingleton;

    private constructor() {}

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