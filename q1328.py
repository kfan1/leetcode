class Solution(object):
    def breakPalindrome(self, palindrome):
        """
        :type palindrome: str
        :rtype: str
        """
        if len(palindrome) == 1:
            return ""

        lp = 0
        rp = len(palindrome) - 1

        while lp < rp:
            if palindrome[lp] != "a":
                return palindrome[0:lp] + "a" + palindrome[lp + 1 :]
            lp += 1
            rp -= 1

        return palindrome[:-1] + "b"
