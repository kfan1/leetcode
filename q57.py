class Solution(object):
    def insert(self, intervals, newInterval):
        """
        :type intervals: List[List[int]]
        :type newInterval: List[int]
        :rtype: List[List[int]]
        """
        if len(intervals) == 0:
            return [newInterval]

        n = 0
        m = 0

        while n < len(intervals):
            if newInterval[0] >= intervals[n][0] and newInterval[0] <= intervals[n][1]:
                n += 0.5
                break
            elif (
                n < len(intervals) - 1
                and newInterval[0] > intervals[n][1]
                and newInterval[0] < intervals[n + 1][0]
            ):
                n += 1
                break
            else:
                n += 1

        while m < len(intervals):
            if newInterval[1] >= intervals[m][0] and newInterval[1] <= intervals[m][1]:
                m += 0.5
                break
            elif (
                m < len(intervals) - 1
                and newInterval[1] > intervals[m][1]
                and newInterval[1] < intervals[m + 1][0]
            ):
                m += 1
                break
            else:
                m += 1

        if newInterval[0] < intervals[0][0]:
            n = 0
        if newInterval[0] > intervals[-1][1]:
            n = len(intervals)
            m = len(intervals)
        if newInterval[1] < intervals[0][0]:
            n = 0
            m = 0
        if newInterval[1] > intervals[-1][1]:
            m = len(intervals)

        if n == m and n % 1 == 0:
            intervals.insert(n, newInterval)
            return intervals

        if n % 1 == 0.5 and m % 1 == 0.5:
            n = int(n - 0.5)
            m = int(m - 0.5)
            intervals[n][1] = intervals[m][1]
            intervals = intervals[0 : n + 1] + intervals[m + 1 :]
        elif n % 1 == 0.5:
            n = int(n - 0.5)
            intervals[n][1] = newInterval[1]
            intervals = intervals[0 : n + 1] + intervals[m:]
        elif m % 1 == 0.5:
            m = int(m - 0.5)
            intervals[m][0] = newInterval[0]
            intervals = intervals[0:n] + intervals[m:]
        else:
            intervals[n] = newInterval
            intervals = intervals[0 : n + 1] + intervals[m:]

        return intervals


test = Solution().insert

print(test([[1, 5]], [2, 3]))
