def char_concat(s):
    
    n = len(s)
    if n % 2 != 0:  
        s = s[:n//2] + s[n//2+1:]
    
    result = []
    for i in range(len(s) // 2):
        result.append(f"{s[i]}{s[-(i+1)]}{i+1}")  
    
    return "".join(result)