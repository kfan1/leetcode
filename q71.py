class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        pathList = path.split("/")
        pathList = [word for word in pathList if word != "" and word != "."]
        n = 0
        while n < len(pathList):
            if pathList[n] == "..":
                if n != 0:
                    pathList.pop(n)
                    n -= 1
                    pathList.pop(n)
                else:
                    pathList.pop(n)
            else:
                n += 1

        str = "/" + "/".join(pathList)

        return str


test = Solution().simplifyPath
print(test("/../"))
