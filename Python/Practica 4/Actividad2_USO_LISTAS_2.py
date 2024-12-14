#Cristian Carrasco Jimenez
#08/10/24
#Este programa te pide dos numeros enteros y te lista que numeros consecutivos hay entre ellos de menor a mayor.

print ("LISTA DE MENOR A MAYOR")

a = int(input("Escriba un número entero: "))

b = int(input("Escriba otro número entero: "))

if a < b:
    menor = a
    mayor = b
elif a > b:
    menor = b
    mayor = a
else:
    print([])


if a != b:
    print(list(range(menor + 1, mayor)))