function activityNotifications(expenditure, d) {
  let notifications = 0;

  let middleIdx1 = Math.floor((d - 1) / 2);
  let middleIdx2 = Math.ceil((d - 1) / 2);

  let countArr = new Array(201).fill(0);
  for (let i = 0; i < d; i++) {
    countArr[expenditure[i]]++;
  }

  let median;
  for (let i = d; i < expenditure.length; i++) {
    let m1;
    let m2;
    for (let j = 0, k = 0; k <= middleIdx1; k += countArr[j], j++) {
      m1 = j;
    }
    for (let j = 0, k = 0; k <= middleIdx2; k += countArr[j], j++) {
      m2 = j;
    }

    median = (m1 + m2) / 2;

    if (expenditure[i] >= median * 2) notifications++;

    countArr[expenditure[i - d]]--;
    countArr[expenditure[i]]++;
  }

  return notifications;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));

// node FradulentActivityNotifications-CountSearch.js
