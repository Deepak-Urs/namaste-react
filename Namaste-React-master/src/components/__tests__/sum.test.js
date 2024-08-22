import { sum } from "../sum" // throws error as JS doesn't understand import

function s2 (a, b) {
    return a * b;
}

//test("check sum of two numbers", () => {
//    //assertion
//    expect(sum(2, 5).toBe(7));
//})

test("s2", () => {
    expect(s2(2,3).toBe(6));
})
