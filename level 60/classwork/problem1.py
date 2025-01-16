def get_sum(a, b):
    return sum(range(min(a, b), max(a, b) + 1))
#

def number (lines):
    return [f"{i+1}: {line}" for i, line in enumerate(lines)]
        
        
def is_pangram(st):
    alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    st = st.lower()
    for i in st: 
        if i in alph:
            alph.remove(i)
    if not alph:
        return True 
    else: 
        return False