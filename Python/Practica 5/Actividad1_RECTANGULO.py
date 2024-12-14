#Cristian Carrasco Jimenez
#13/10/24
#Este programa te pide la anchura y la altura para poder dibujar un rectangulo.


anchura = int(input("Anchura del rectángulo: "))
altura = int(input("Altura del rectángulo: "))


for n in range(altura):
    print('* ' * anchura)