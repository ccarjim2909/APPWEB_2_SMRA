#Cristian Carrasco Jimenez
#02/10/24
#Este programa es capaz de convertir pedir una cantidad de segundos y 
#que escriba cuántos minutos y segundos son.

print ("CONVERTIDOR DE SEGUNDOS A MINUTOS")
Seg = eval(input ("Escriba una cantidad de segundos:"))
Min = Seg//60
Rest = Seg % 60
print (Seg, " segundos son ", Min ,"minutos y ", Rest, "segundos")