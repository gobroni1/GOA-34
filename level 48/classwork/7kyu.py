def first (s):
    result = []
    for i in range(len(s)):
        part = s[i].upper() + s[i].lower() * i
        result.append(part)
    return '-'.join(result)
    
print(first("aBc"))