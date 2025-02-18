def min_max(lst):
  return [min(lst), max(lst)]

def number(lines):
    return [f"{i+1}: {line}" for i, line in enumerate(lines)]

def bonus_time(salary, bonus):
    return f"${salary * 10 if bonus else salary}"

def maskify(string):
    return string if len(string) <= 4 else "#" * (len(string) - 4) + string[-4:]

def maskify(string):
    return string if len(string) <= 4 else "#" * (len(string) - 4) + string[-4:]

def double_char(s):
    ls = s.split(" ")
    ls3 = []
    for i in ls:
        ls2 = []
        for j in i:
            ls2.append(j)
            ls2.append(j)
        ls3.append("".join(ls2))
    return "  ".join(ls3)