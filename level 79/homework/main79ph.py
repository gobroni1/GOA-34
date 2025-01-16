def square (side):
    return side*side

def triangle (x,y):
    return (x*x + y*y) **0.5

option = input("press 1 to calculate are of square. press 2 to calculate are of triangle: ")

if option == "1":
    num1 = int(input("what is length of the side?: "))
    print(square(num1))
elif option == "2":
    num2 = int(input(("enter side of triangle: ")))
    num3 = int(input("enter second side of triangle: "))
    print(triangle(num2, num3))