import { expect, test } from "vitest";
import { two_sum_On, two_sum_On2 } from "../src/two-sum";

test("two sum", () => {
	const vector = [4, 1, 2, -2, 11, 15, 1, -1, -6, -4];
	const vector_empty = [2, 3, 4, 0, 4];
	const target = 9;

	const result_two_sum_on2 = two_sum_On2(vector, target);
	expect(result_two_sum_on2).toHaveLength(2);
	expect(result_two_sum_on2).toEqual([-2, 11]);
	expect(two_sum_On2(vector_empty, target)).toHaveLength(0);

	const result_two_sum_on = two_sum_On(vector, target);
	expect(result_two_sum_on).toHaveLength(2);
	expect(result_two_sum_on).toEqual([-2, 11]);
	expect(two_sum_On(vector_empty, target)).toHaveLength(0);
});
