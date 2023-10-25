//Subscriber interface
interface ChatObserver {
    receiveMessage(message: Message): void;
}

//Subscriber instances react with public method
class BlueSideChat implements ChatObserver {
    receiveMessage(message: Message): void {
        if (message instanceof AllChatMessage) {
            console.log('Blue Side: received a message as [ALL] with: ' + message.getContent());
        }

        if (message instanceof BlueSideChatMessage) {
            console.log('Blue Side: received a message as [TEAM] with: ' + message.getContent());
        }
    }
}

class RedSideChat implements ChatObserver {
    receiveMessage(message: Message): void {
        if (message instanceof AllChatMessage) {
            console.log('Red Side: received a message as [ALL] with: ' + message.getContent());
        }

        if (message instanceof RedSideChatMessage) {
            console.log('Red Side: received a message as [TEAM] with: ' + message.getContent());
        }
    }
}

interface Message {
    attach(observer: ChatObserver): void;
    detach(observer: ChatObserver): void;
    send(): void;
}

//Publisher class contains business logic needed to emit, bind and manage event flow
abstract class ChatMessage implements Message {
    private content: string = "";
    private observers: ChatObserver[] = [];

    public getContent(): string {
        return this.content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public attach(observer: ChatObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: ChatObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public send(): void {
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

    const allSideChatMessage = new AllChatMessage()
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