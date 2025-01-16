def remove_exclamation_marks(s):
    return s.replace("!", "")

#
#

def reverse(st):
    ls = []
    ls = st.split()
    ls = ls[::-1]
    return " ".join(ls)