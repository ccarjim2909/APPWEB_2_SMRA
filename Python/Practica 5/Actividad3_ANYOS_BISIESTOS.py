#Cristian Carrasco Jimenez
#13/10/24
#Este programa te pide la anchura y la altura para poder dibujar un rectangulo.

print ("CONTADOR DE AÑOS BISIESTOS")

Añomenor = int(input("Escriba un año: "))

Añomayor = int(input("Escriba otro año posterior a "+str(Añomenor)+": "))



while Añomayor <= Añomenor:
    Añomayor = int(input(str(Añomayor) + " no es mayor que " + str(Añomenor) + ". Inténtelo de nuevo: "))

bisiesto = 0
Año = Añomenor
total = Añomayor - Añomenor + 1  
   
while Año <= Añomayor:
    if (Año % 4 == 0 and Año % 100 != 0) or (Año % 400 == 0):
        bisiesto = bisiesto + 1
    Año = Año + 1


print("De " + str(Añomenor) + " a " + str(Añomayor) + " hay " + str(total) + " años, " + str(bisiesto) + " de ellos bisiestos.")


