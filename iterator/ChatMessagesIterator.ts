interface CustomIterator<T> {}

//Iterators may be declared in terms of factory method in a collection.
//Core functionality of any iterator is to move back and forward in a scope of collection items.
//It is possible to declare client service and pass iterator as argument to hide collection beneath.
class ChatMessagesIterator implements CustomIterator<Message> {
    private messageCollection: ChatMessageCollection;

    private position: number = 0;

    constructor(messageCollection: ChatMessageCollection) {
        this.messageCollection = messageCollection;
    }

    public current(): Message {
        return this.messageCollection.getMessages()[this.position];
    }

    next(): Message {
        this.position += 1;
        if (!(this.current() instanceof Message)) {
            console.log('No more messages. Showing the last one');
            this.position -= 1;
        }

        return this.current();
    }

    previous(): Message {
        this.position -= 1;
        if (!(this.current() instanceof Message)) {
            console.log('No more messages. Showing the first one');
            this.position += 1;
        }
        return this.current();
    }
}

class Message {
    private readonly authorName: string;
    private readonly content: string;

    constructor(authorName: string, content: string) {
        this.authorName = authorName;
        this.content = content;
    }

    public showMessage(): void {
        console.log(`The user '${this.authorName}' has said: "${this.content}"`);
    }

}

//Collection may have Iterators declared itself as a factory method
class ChatMessageCollection {
    private messages: Message[] = [];

    public getMessages(): Message[] {
        return this.messages;
    }

    public addMessage(message: Message): void {
        this.messages.push(message);
    }
}

//In this example, Iterator is declared separately as a service
function main() {
    const messages = new ChatMessageCollection();
    const message1 = new Message('Faker', 'gg es');
    const message2 = new Message('Jankos', 'jungle diff');
    messages.addMessage(message1);
    messages.addMessage(message2);

    const messageIterator = new ChatMessagesIterator(messages);
    messageIterator.next().showMessage();
    messageIterator.previous().showMessage();
}

main()