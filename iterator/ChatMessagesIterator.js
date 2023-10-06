"use strict";
class ChatMessagesIterator {
    constructor(messageCollection) {
        this.position = 0;
        this.messageCollection = messageCollection;
    }
    current() {
        return this.messageCollection.getMessages()[this.position];
    }
    next() {
        this.position += 1;
        if (!(this.current() instanceof Message)) {
            console.log('No more messages. Showing the last one');
            this.position -= 1;
        }
        return this.current();
    }
    previous() {
        this.position -= 1;
        if (!(this.current() instanceof Message)) {
            console.log('No more messages. Showing the first one');
            this.position += 1;
        }
        return this.current();
    }
}
class Message {
    constructor(authorName, content) {
        this.authorName = authorName;
        this.content = content;
    }
    showMessage() {
        console.log(`The user '${this.authorName}' has said: "${this.content}"`);
    }
}
class ChatMessageCollection {
    constructor() {
        this.messages = [];
    }
    getMessages() {
        return this.messages;
    }
    addMessage(message) {
        this.messages.push(message);
    }
}
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
main();
