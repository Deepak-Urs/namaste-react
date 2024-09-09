import { sum } from "../sum" // throws error as JS doesn't understand import

//function s2 (a, b) {
//    return a * b;
//}

test("check sum of two numbers", () => {
    //assertion
    sum(2,5).toEqual(0)
})

//test("s2", () => {
//    expect(s2(2,3).toBe(6));
//})
