class MinStack(object):
    def __init__(self):
        self.minList = []
        self.list = []
        self.length = 0

    def push(self, val):
        """
        :type val: int
        :rtype: None
        """
        if len(self.minList) == 0:
            self.minList.append([val, self.length])
        if self.minList[-1][0] > val:
            self.minList.append([val, self.length])
        self.list.append(val)
        self.length += 1

    def pop(self):
        """
        :rtype: None
        """
        self.list.pop(-1)
        self.length -= 1
        if self.length == self.minList[-1][1]:
            self.minList.pop(-1)

    def top(self):
        """
        :rtype: int
        """
        return self.list[-1]

    def getMin(self):
        """
        :rtype: int
        """
        return self.minList[-1][0]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
