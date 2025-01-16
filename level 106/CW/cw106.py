def match(u, m):
    if sum(u) < 100 and m == 0:
        return "No match!"
    else: 
        if sum(u) >= 100*(0.85)**m:
            return "Match!"
        else:
            return "No match!"
        
        
#https://www.codewars.com/kata/5750699bcac40b3ed80001ca/train/python