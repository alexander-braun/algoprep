/**
 * target: 10$
 * array: [1, 5, 10, 25]
 * ways: 4:
 * 1 x 10$
 * 2 x 5$
 * 1 x 5$ + 5 x 1$
 * 10 x 1$
 *
 * ways:
 * 1 0 0 0 0 0 0 0 0 0 0   -> amount of ways
 * 0 1 2 3 4 5 6 7 8 9 10  -> amount money
 *
 * f.e. -> is 1 <= amount 0 ? no
 *      -> is 1 <= amount 1 ? yes
 *
 * 1 1 0 0 0 0 0 0 0 0 0
 * 0 1 2 3 4 5 6 7 8 9 10
 *
 * f.e. -> 1 <= amount 2 ? yes
 * 1 1 1 0 0 0 0 0 0 0 0
 * 0 1 2 3 4 5 6 7 8 9 10
 *
 * after 1:
 * 1 1 1 1 1 1 1 1 1 1 1
 * 0 1 2 3 4 5 6 7 8 9 10
 *
 *
 * ->> given a one dollar coin there is always only one way to reach 0, 1, 2, 3.... dollar
 *
 * after 5:
 * 1 1 1 1 1 2 2 2 2 2 3
 * 0 1 2 3 4 5 6 7 8 9 10
 *
 * after 10:
 * 1 1 1 1 1 2 2 2 2 2 4
 * 0 1 2 3 4 5 6 7 8 9 10
 *
 * after 25:
 * 1 1 1 1 1 2 2 2 2 2 4
 * 0 1 2 3 4 5 6 7 8 9 10
 */

function numberOfWaysToMakeChange(n, denoms) {
  let ways = Array(n + 1).fill(0);
  ways[0] = 1;
  for (const denom of denoms) {
    for (let amount = 1; amount <= n; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[ways.length - 1];
}
