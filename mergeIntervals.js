// mergeIntervals.js
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];

        if (currentInterval[0] <= lastMergedInterval[1]) {
            lastMergedInterval[1] = Math.max(currentInterval[1], lastMergedInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }

    return merged;
}

const intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(mergeIntervals(intervals)); // Output: [[1,6],[8,10],[15,18]]
