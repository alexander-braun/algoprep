function whatFlavors(cost, money) {
  let hash = {};
  for (let i = 0; i < cost.length; i++) {
    let amount = cost[i];
    let diff = money - amount;
    if (hash[diff]) {
      return console.log(hash[diff], i + 1);
    } else {
      hash[amount] = i + 1;
    }
  }
}
