# 1

def solution(s):
    if len(s) % 2 != 0:
        s += '_'
    return [s[i:i+2] for i in range(0, len(s), 2)]

# 2

def likes(names):
    ln = len(names) 
    
    if ln == 0:
        return "no one likes this"
    elif ln == 1:
        return names[0] + " likes this"
    elif ln == 2:
        return names[0] + " and " + names[1] + " like this"
    elif ln == 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    else:
        return names[0] + ", " + names[1] + " and " + str(ln - 2) + " others like this"
    
# 3

import math

def persistence(n):
    c = 0  
    while n >= 10:  
        digits = [int(i) for i in str(n)] 
        n = math.prod(digits)   # multypli all number in the list
        c += 1  
    return c