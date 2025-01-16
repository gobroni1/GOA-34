def array_diff(a, b):
    l = []
    for i in a:
        if i not in b:
            l.append(i)
    return l

#second problem (yes both functions)

def count2 (ls, j):
    times = []
    for i in ls: 
        if i == j:
            times.append(i)
    return len(times)
        
def find_it(seq):
    for i in seq:
        if count2(seq, i) % 2 != 0:
            return i
