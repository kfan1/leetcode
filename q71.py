class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        pathList = path.split("/")
        print(pathList)


test = Solution().simplifyPath
test("/home//path")
