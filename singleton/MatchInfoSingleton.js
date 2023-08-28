"use strict";
class MatchInfoSingleton {
    constructor() { }
    static getInstance() {
        if (!MatchInfoSingleton.instance) {
            MatchInfoSingleton.instance = new MatchInfoSingleton();
        }
        return MatchInfoSingleton.instance;
    }
    getMatchInfo() {
        return 'These are match details';
    }
}
function main() {
    const match1 = MatchInfoSingleton.getInstance();
    const match2 = MatchInfoSingleton.getInstance();
    if (match1 === match2) {
        console.log('These two are the same matches');
    }
    else {
        console.log('There two are NOT the same matches');
    }
}
main();
