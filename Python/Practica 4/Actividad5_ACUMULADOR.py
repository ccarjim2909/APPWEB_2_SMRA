#Cristian Carrasco Jimenez
#08/10/24
#Este programa te pide dos numeros enteros y escriba la suma de todos 
# los enteros desde el primer numero hasta le segundo.

print ("SUMA ENTRE VALORES")


lista = []
suma = 0
    
a = int(input("Escriba el número mayor que cero: "))
if  a > 0:
    

    b = int(input("Escriba el número mayor que "+ str(a)+ ": "))
    if  b > a:
        for n in range (a,b+1,1):
            lista.append(n)
        for j in lista:
            suma = j + suma
        print ("La suma desde"+str(a)suma)
    
            #comentar bien arriba
    
    else:
        print ("¡Le he pedido un numero entero mayor que "+str(a)+"!")
             
else:
    print ("¡Le he pedido un numero entero positivo!")
