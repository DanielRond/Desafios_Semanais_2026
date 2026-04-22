i = float(input())
j = float(input())
x = float(input())
y = float(input())
distancia = ((x - i)**2 + (j - y)**2)**(1/2)
if distancia<300:
    print("ACERTOU")
else:
    print(distancia)