class Bucket {
    constructor(name = "", amount = 0, percentage = 0.0, maxAmount = 0, children = null, overflows = null, parent = null) {
        if (children == null)
            this.children = [];
        else
            this.children = children;

        if (overflows == null)
            this.overflows = [];
        else
            this.overflows = overflows;

        this.name = name;
        this.amount = amount;
        this.amountTotal = amount;
        this.percentage = percentage;
        this.maxAmount = maxAmount;
        this.parent = parent.name;
    }

    getPercentageUsed() {
        let total = 0;

        this.buckets.forEach(function (bucket) {
            total += bucket.amount;
        });

        return total;
    }

    rebalancePercentages(percentUsed, percentNeeded) {
        deficit = percentNeeded - (100 - percentUsed)
        reduction = float(deficit) / float(len(this.buckets))

        this.children.forEach(function (bucket) {
            //Todo: do something that accounts for all cases
        });
    }

    addChild(bucket) {
        percentUsed = this.getPercentageUsed()

        if ((100.0 - percentUsed) > bucket.percentage)
            this.rebalancePercentages(percentUsed, bucket.percentage)
    }

    recalculate(this) {
        this.amount = this.amountTotal * this.percentage

        if (this.amount > this.maxAmount)
            surplus = this.amount - this.maxAmount

        this.overflows.forEach(function (overflow) {
            //Todo send overflows (overflow.send(surplus))
        });

        this.children.forEach(function (child) {
            child.recalculate()
        });
    }
}