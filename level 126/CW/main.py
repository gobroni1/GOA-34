def digit_degree(n):
    degree = 0
    while n >= 10:  
        n = sum(int(digit) for digit in str(n))  
        degree += 1 
    return degree
