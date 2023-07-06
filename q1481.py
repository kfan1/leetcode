class Solution(object):
    def findLeastNumOfUniqueInts(self, arr, k):
        """
        :type arr: List[int]
        :type k: int
        :rtype: int
        """
        intMap = {}
        for num in arr:
            if num in intMap:
                intMap[num] += 1
            else:
                intMap[num] = 1

        freqArr = [[number, intMap[number]] for number in intMap]

        def sort(e):
            return e[1]

        freqArr.sort(reverse=True, key=sort)

        while k >= 0:
            if k - freqArr[-1][1] < 0:
                return len(freqArr)

            elif k - freqArr[-1][1] == 0:
                return len(freqArr) - 1
            
            else:
                k -= freqArr[-1][1]
                freqArr.pop(-1)
