const { sum, divide, multiply, subtract } = require("./math");

beforeAll(() => {
    console.log("Before All Test")
})

describe("Functions", () => {
    beforeEach(() => {
        console.log("Before Each")
    })

    it("should sum two number", () => {
        expect(sum(2, 3)).toBe(5);
    });


    it("should subtract two number", () => {
        expect(subtract(5, 3)).toBe(2);
    });


    it("should multiply two number", () => {
        expect(multiply(3, 3)).toBe(9);
    });

    it("should divide two number", () => {
        expect(divide(12, 3)).toBe(4);
    });

    afterEach(() => {
        console.log("After Each Test")
    });
});

 afterAll(() => {
   console.log("Run After All Test");
 });