#Cristian Carrasco Jimenez
#02/10/24
#Este programa es capaz de convertir los pies y pulgadas en centimetros

print ("CONVERTIDOR DE PIES Y PULGADAS A CENTÍMETROS")
A = eval(input ("Escriba una cantidad de pies:"))
B = eval(input ("Escriba una cantidad de pulgadas:"))
Pie = 30.48
Pulg = 2.54
C = A*Pie+B*Pulg
print (A, " pies y ", B, "pulgadas son ", C ,"cm")