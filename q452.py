class Solution(object):
    def findMinArrowShots(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """

        def func(e):
            return e[0]

        points.sort(key=func)

        n = 0
        totalIntersections = 0
        while n < len(points):
            rp = points[n][1]
            intersection = n + 1
            intersected = False
            while intersection < len(points) and points[intersection][0] <= rp:
                if points[intersection][1] < rp:
                    rp = points[intersection][1]
                intersected = True
                intersection += 1

            totalIntersections += 1

            if intersected:
                n = intersection
            else:
                n += 1

        return totalIntersections


test = Solution().findMinArrowShots
print(
    test(
        [
            [3, 9],
            [7, 12],
            [3, 8],
            [6, 8],
            [9, 10],
            [2, 9],
            [0, 9],
            [3, 9],
            [0, 6],
            [2, 8],
        ]
    )
)
