x = float(input("Informe o valor de x: "))
y = float(input("Informe o valor de y: "))

dentro = (x >= 0 and y >= 0) and (x ** 2 + y ** 2 <= 1)

print(int(dentro))
