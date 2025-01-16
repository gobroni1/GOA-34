import random

data = {}
max_score = 4
AI_socre = 0
r = ["l", "u", "d", "r"]
ai = ["u", "d", "l", "r"]
ai_g = None
while AI_socre != max_score:
    for d in r:
        ai_g = random.choice(ai)
        while d != ai_g:
            ai_g = random.choice(ai)

        data.update({d:ai_g})
        AI_socre += 1
    
with open("data_for_AI2.py", "w") as file:
    file.write(f"data = {data}\n")  # Writing the dictionary as code
print(data)


