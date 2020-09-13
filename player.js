
class Player{
    constructor(name) {
        this.name = name
        this.myTurn = false
        this.cardsOnHand = []
    }

    merge(leftArr, rightArr) {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
            }
        }
        while (leftArr.length)
            sortedArr.push(leftArr.shift());
        while (rightArr.length)
            sortedArr.push(rightArr.shift());
        return sortedArr;
    }
    
    mergesort() {
        if (this.cardsOnHand.length < 2) {
            return this.cardsOnHand;
        }
        else {
            let midpoint = parseInt(this.cardsOnHand.length / 2);
            let leftArr   = this.cardsOnHand.slice(0, midpoint);
            let rightArr  = this.cardsOnHand.slice(midpoint, this.cardsOnHand.length);
            return merge(mergesort(leftArr), mergesort(rightArr));
          }
        }
}

export {Player}

