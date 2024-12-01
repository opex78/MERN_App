import { sum } from "../sum"

test("sum function should calculate the sum of two numbers", () => {
    const results = sum(1, 2)
    expect(results).toBe(3);
})