def smallest_integer(m):
    nums = set()  
    for i in m:
        for j in i:
            if j >= 0:  
                nums.add(j)
    
    missing = 0
    while missing in nums:
        missing += 1
    
    return missing
