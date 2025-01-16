<<<<<<< HEAD
#info

#kid_dict.update({'key3': 'geeks'})

#
#

from datetime import datetime, timedelta


group_info = {
    23: {"start_date": datetime(2024, 5, 16), "speed": 2},
    29: {"start_date": datetime(2024, 5, 19), "speed": 1},
    31: {"start_date": datetime(2024, 5, 18), "speed": 1},
    33: {"start_date": datetime(2024, 5, 18), "speed": 1},
    35: {"start_date": datetime(2024, 6, 24), "speed": 1},
    36: {"start_date": datetime(2024, 6, 27), "speed": 1},
    37: {"start_date": datetime(2024, 6, 25), "speed": 1},
    38: {"start_date": datetime(2024, 6, 25), "speed": 2},
    39: {"start_date": datetime(2024, 6, 28), "speed": 2},
    40: {"start_date": datetime(2024, 6, 26), "speed": 2},
    41: {"start_date": datetime(2024, 6, 24), "speed": 3},
    42: {"start_date": datetime(2024, 9, 13), "speed": 1},
    45: {"start_date": datetime(2024, 9, 11), "speed": 2},
    47: {"start_date": datetime(2024, 9, 9),  "speed": 2},
    48: {"start_date": datetime(2024, 9, 9),  "speed": 2}
}

def calculate_lessons(grupe):

    if grupe not in group_info:
        print("Group not found.")
        return 
    
    current_date = datetime.now()

    start_date = group_info[grupe]["start_date"]
    speed = group_info[grupe]["speed"]

    weeks_passed = (current_date - start_date).days // 7
    
    total_lessons = weeks_passed * speed
    return total_lessons+2
#
#   

kid_dic = {
    "უგულავა": {"სახელი": "ირაკლი","group":27, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Nephidra/GOA-Homeworks"},             
    "კოხრეიძე": {"სახელი": "ლუკა", "group":29, "speed":1, "level":0, "parent": "info here", "git hub": "drive link here"},             
    "სხირტლაძე": {"სახელი": "გიორგი", "group":31, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/giorgisxirtladze"},
    "წულუკიძე": {"სახელი": "მარიამ", "group":36, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/mariami2013/Goa-homeworks"},
    "დავითაშვილი": {"სახელი": "ლუკა", "group":36, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/lukadavitashvili/GOA---work"},
    "შენგელია":{"სახელი": "სანდრო", "group":40, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/sandroshengelia123"},
    "კაკუტაშვილი":{"სახელი": "სანდრო", "group":41, "speed":3, "level":0, "parent": "info here", "git hub": "https://github.com/kasandroak/GOA-work"},
    "ჯაფარიძე": {"სახელი": "ნიკოლოზ", "group":42, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/nikolzjafaridze/goa_work"},
    "მენთეშაშვილი": {"სახელი": "გიორგი", "group":42, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/giorgi-mt/goa"},
    "ჯავახიძე": {"სახელი": "დანიელი", "group":42, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/cursed-of-nigtmeres/goal"},
    "ქიტიაშვილი": {"სახელი": "ლუკა", "group":45, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/lukaqitiasvili/goa"},
    "უძილაური": {"სახელი": "გიორგი", "group":46, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/giorgiudzilauri/goa"},
    "ხარებავა": {"სახელი": "რეზი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/rezikharebava/goa"},
    "გელხაური": {"სახელი": "გურამი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Guram459/goa"},
    "ჩიგვინაძე": {"სახელი": "გიორგი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Chigo2009/Goa-Projects"},
    "ბეგიაშვილი": {"სახელი": "ჯაბა", "group":48, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/jababegiashvili/GOA-homeworks"},
    "ჭიკაძე": {"სახელი": "ლიკა", "group":55, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/LikaTchikadze/LikaTchikadze"},
    "ბარამიძე": {"სახელი": "ლუკა", "group":57, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Baramidze-luka/GOA-Home-Works"},
    "ბუსკივაძე": {"სახელი": "თორნიკე", "group":55, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Toko-b/homework"},
    "ხურციძე": {"სახელი": "საბა", "group":52, "speed": 1, "level":0, "paret": "info here", "git hub": "https://github.com/TheSab1a/Homework-lvl-2"},
    "ყურაშვილი": {"სახელი": "საბა", "group":56, "speed":2, "level":0, "paret": "info here", "git hub": "https://github.com/severrir/the_one"},
    "წოწკოლაური": {"სახელი": "ალექსანდრე", "group":57, "speed":2, "level":0, "paret": "info here", "git hub": "https://github.com/aleqsandrewowkolauri/goa_work"},
    "დევდარიანი":{"სახელი": "გეგა", "group": 15, "speed":2, "level":0, "parent": "info here", "git hub":"https://github.com/geksha"},
    "მიქაბერიძე":{"სახელი": "მარიამი", "group":34, "speed":3, "level":0, "parent": "info here", "git hub": "https://github.com/Mariamooo0"},
    "გურიელი":{"სახელი": "გიორგი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/GiorgiGurieli/giorgigurieli"},
    "შავაძე":{"სახელი": "გიორგი", "group":27, "speed":2, "level":0, "parent": "info here", "git hub": ""}
    
}   

key = input("here: ")
while key != "done" and key != "მორჩა":
    if key in kid_dic:
        kid_info = kid_dic[key]
        grupe = kid_info["group"]
                
        lesson = calculate_lessons(grupe)
                
        kid_info.update({'level': lesson})
        print(f"updated {key}") 
        print(kid_dic[key])
    else: 
        print("something went wrong")

    if key in ["speed", "group", "level", "parent", "git hub"]:
        for kid, info in kid_dic.items():
            print(f"{kid}: {info[key]}")

    if key == "income":
        income = 0
        for kid, info in kid_dic.items():
            speed = str(info['speed'])
            for i in speed:
                if i == "1":
                    income += 7.5
                elif i == "2":
                    income += 15
                elif i == "3":
                    income += 20
                else:
                    print(f"Invalid speed number for {kid}")

        print("Total income:", income)
    elif key == "რაოდენობა" :
        print(f"აღრიცხულია {len(kid_dic)} ბავშვი")

    key = input("here: ")  

    
=======
# #info

# #kid_dict.update({'key3': 'geeks'})

# #
# #

# from datetime import datetime, timedelta


# group_info = {
#     23: {"start_date": datetime(2024, 5, 16), "speed": 2},
#     29: {"start_date": datetime(2024, 5, 19), "speed": 1},
#     31: {"start_date": datetime(2024, 5, 18), "speed": 1},
#     33: {"start_date": datetime(2024, 5, 18), "speed": 1},
#     35: {"start_date": datetime(2024, 6, 24), "speed": 1},
#     36: {"start_date": datetime(2024, 6, 27), "speed": 1},
#     37: {"start_date": datetime(2024, 6, 25), "speed": 1},
#     38: {"start_date": datetime(2024, 6, 25), "speed": 2},
#     39: {"start_date": datetime(2024, 6, 28), "speed": 2},
#     40: {"start_date": datetime(2024, 6, 26), "speed": 2},
#     41: {"start_date": datetime(2024, 6, 24), "speed": 3},
#     42: {"start_date": datetime(2024, 9, 13), "speed": 1},
#     45: {"start_date": datetime(2024, 9, 11), "speed": 2},
#     47: {"start_date": datetime(2024, 9, 9),  "speed": 2},
#     48: {"start_date": datetime(2024, 9, 9),  "speed": 2}
# }

# def calculate_lessons(grupe):

#     if grupe not in group_info:
#         print("Group not found.")
#         return 
    
#     current_date = datetime.now()

#     start_date = group_info[grupe]["start_date"]
#     speed = group_info[grupe]["speed"]

#     weeks_passed = (current_date - start_date).days // 7
    
#     total_lessons = weeks_passed * speed
#     return total_lessons+2
# #
# #   

# kid_dic = {
#     "უგულავა": {"სახელი": "ირაკლი","group":27, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Nephidra/GOA-Homeworks"},             
#     "კოხრეიძე": {"სახელი": "ლუკა", "group":29, "speed":1, "level":0, "parent": "info here", "git hub": "drive link here"},             
#     "სხირტლაძე": {"სახელი": "გიორგი", "group":31, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/giorgisxirtladze"},
#     "წულუკიძე": {"სახელი": "მარიამ", "group":36, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/mariami2013/Goa-homeworks"},
#     "დავითაშვილი": {"სახელი": "ლუკა", "group":36, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/lukadavitashvili/GOA---work"},
#     "შენგელია":{"სახელი": "სანდრო", "group":40, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/sandroshengelia123"},
#     "კაკუტაშვილი":{"სახელი": "სანდრო", "group":41, "speed":3, "level":0, "parent": "info here", "git hub": "https://github.com/kasandroak/GOA-work"},
#     "ჯაფარიძე": {"სახელი": "ნიკოლოზ", "group":42, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/nikolzjafaridze/goa_work"},
#     "მენთეშაშვილი": {"სახელი": "გიორგი", "group":42, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/giorgi-mt/goa"},
#     "ჯავახიძე": {"სახელი": "დანიელი", "group":42, "speed":1, "level":0, "parent": "info here", "git hub": "https://github.com/cursed-of-nigtmeres/goal"},
#     "ქიტიაშვილი": {"სახელი": "ლუკა", "group":45, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/lukaqitiasvili/goa"},
#     "უძილაური": {"სახელი": "გიორგი", "group":46, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/giorgiudzilauri/goa"},
#     "ხარებავა": {"სახელი": "რეზი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/rezikharebava/goa"},
#     "გელხაური": {"სახელი": "გურამი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Guram459/goa"},
#     "ჩიგვინაძე": {"სახელი": "გიორგი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Chigo2009/Goa-Projects"},
#     "ბეგიაშვილი": {"სახელი": "ჯაბა", "group":48, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/jababegiashvili/GOA-homeworks"},
#     "ჭიკაძე": {"სახელი": "ლიკა", "group":55, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/LikaTchikadze/LikaTchikadze"},
#     "ბარამიძე": {"სახელი": "ლუკა", "group":57, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Baramidze-luka/GOA-Home-Works"},
#     "ბუსკივაძე": {"სახელი": "თორნიკე", "group":55, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/Toko-b/homework"},
#     "ხურციძე": {"სახელი": "საბა", "group":52, "speed": 1, "level":0, "paret": "info here", "git hub": "https://github.com/TheSab1a/Homework-lvl-2"},
#     "ყურაშვილი": {"სახელი": "საბა", "group":56, "speed":2, "level":0, "paret": "info here", "git hub": "https://github.com/severrir/the_one"},
#     "წოწკოლაური": {"სახელი": "ალექსანდრე", "group":57, "speed":2, "level":0, "paret": "info here", "git hub": "https://github.com/aleqsandrewowkolauri/goa_work"},
#     "დევდარიანი":{"სახელი": "გეგა", "group": 15, "speed":2, "level":0, "parent": "info here", "git hub":"https://github.com/geksha"},
#     "მიქაბერიძე":{"სახელი": "მარიამი", "group":34, "speed":3, "level":0, "parent": "info here", "git hub": "https://github.com/Mariamooo0"},
#     "გურიელი":{"სახელი": "გიორგი", "group":47, "speed":2, "level":0, "parent": "info here", "git hub": "https://github.com/GiorgiGurieli/giorgigurieli"},
#     "შავაძე":{"სახელი": "გიორგი", "group":27, "speed":2, "level":0, "parent": "info here", "git hub": ""}
    
# }   

# key = input("here: ")
# while key != "done" and key != "მორჩა":
#     if key in kid_dic:
#         kid_info = kid_dic[key]
#         grupe = kid_info["group"]
                
#         lesson = calculate_lessons(grupe)
                
#         kid_info.update({'level': lesson})
#         print(f"updated {key}") 
#         print(kid_dic[key])
#     else: 
#         print("something went wrong")

#     if key in ["speed", "group", "level", "parent", "git hub"]:
#         for kid, info in kid_dic.items():
#             print(f"{kid}: {info[key]}")

#     if key == "income":
#         income = 0
#         for kid, info in kid_dic.items():
#             speed = str(info['speed'])
#             for i in speed:
#                 if i == "1":
#                     income += 7.5
#                 elif i == "2":
#                     income += 15
#                 elif i == "3":
#                     income += 20
#                 else:
#                     print(f"Invalid speed number for {kid}")

#         print("Total income:", income)
#     elif key == "რაოდენობა" :
#         print(f"აღრიცხულია {len(kid_dic)} ბავშვი")

#     key = input("here: ")  

    
    
    
    
    
print(-2 % 2)
>>>>>>> b181380 (new pc commit)
