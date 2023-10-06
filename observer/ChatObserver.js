"use strict";
class BlueSideChat {
    receiveMessage(message) {
        if (message instanceof AllChatMessage) {
            console.log('Blue Side: received a message as [ALL] with: ' + message.getContent());
        }
        if (message instanceof BlueSideChatMessage) {
            console.log('Blue Side: received a message as [TEAM] with: ' + message.getContent());
        }
    }
}
class RedSideChat {
    receiveMessage(message) {
        if (message instanceof AllChatMessage) {
            console.log('Red Side: received a message as [ALL] with: ' + message.getContent());
        }
        if (message instanceof RedSideChatMessage) {
            console.log('Red Side: received a message as [TEAM] with: ' + message.getContent());
        }
    }
}
class ChatMessage {
    constructor() {
        this.content = "";
        this.observers = [];
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }
    send() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.receiveMessage(this);
        }
    }
}
class AllChatMessage extends ChatMessage {
}
class BlueSideChatMessage extends ChatMessage {
}
class RedSideChatMessage extends ChatMessage {
}
function main() {
    const blueSideChat = new BlueSideChat();
    const redSideChat = new RedSideChat();
    const allSideChatMessage = new AllChatMessage();
    allSideChatMessage.setContent('gg wp');
    const blueSideChatMessage = new BlueSideChatMessage();
    blueSideChatMessage.setContent('go baron pls');
    const redSideChatMessage = new RedSideChatMessage();
    redSideChatMessage.setContent('where team');
    allSideChatMessage.attach(blueSideChat);
    allSideChatMessage.attach(redSideChat);
    blueSideChatMessage.attach(blueSideChat);
    redSideChatMessage.attach(redSideChat);
    allSideChatMessage.send();
    blueSideChatMessage.send();
    redSideChatMessage.send();
}
main();
