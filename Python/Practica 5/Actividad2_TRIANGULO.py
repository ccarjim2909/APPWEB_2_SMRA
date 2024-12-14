#Cristian Carrasco Jimenez
#13/10/24
#Este programa te pide la anchura y la altura para poder dibujar un rectangulo.



anchura = int(input("Anchura del triángulo: "))

# Dibujo de la primera mitad del triángulo
for n in range(1, anchura + 1):
    print('* ' * n)

# Dibujo de la segunda mitad del triángulo
for j in range(anchura - 1, 0, -1):
    print('* ' * j)