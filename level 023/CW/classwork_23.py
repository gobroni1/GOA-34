def ma (s,intlist1):
    for i in (intlist1):
        s += i
    return s / len(intlist1)
print(ma(0,[2,5,7]))

#
#

def d_or_m (a,b,c):
    if a == "/":
        return b / c
    else:
        return b * c
print(d_or_m(input("what to do? '/' or '*': "),4,2))

#
#

