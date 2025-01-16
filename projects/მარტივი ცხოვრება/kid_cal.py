text = "2111123111222222222122232"

speed_1 = 0
speed_2 = 0
speed_3 = 0

for i in text:
    if i == "1":
        speed_1 += 1
    elif i == "2":
        speed_2 += 1
    elif i == "3":
        speed_3 += 1
print(f"{speed_3} are on speed 3")
print(f"{speed_2} are on speed 2")
print(f"{speed_1} are on speed 1")
print(f"total {speed_1+speed_2+speed_3}")
print("-----")
print((20*speed_3)+(15*speed_2)+(7.5*speed_1))