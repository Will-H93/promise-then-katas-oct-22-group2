// DO NOT EDIT THIS FILE

const {
    food,
    cat,
    dog,
    joke,

} = require("../src/promise-katas-2");

const { expect } = require("chai");

describe('food', () => {
    it('returns the correct food', async () => {
        expect(await food()).to.equal("Cheese");
    })
});

describe('cat', () => {
    it('returns the correct ordered list of cats', async () => {
        expect(await cat()).to.deep.equal(["Bandit", "Berry", "Puss in boots", "Smokey"]);
    })
});

describe('dog', () => {
    it('returns the naughiest dog', async () => {
        expect(await dog()).to.deep.equal({name: "Mutley", naughty: 10});
    })
});

describe('joke', () => {
    it('returns a joke and answer, using Promise.all to fire of multiple requests at the same time.', async () => {
        expect(await joke()).to.deep.equal({ 
            question: "Why did the scarecrow win the Nobel Prize?", 
            answer: "Because he was out-standing in his field."
        });
    })
});
