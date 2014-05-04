#!/usr/bin/python
import serial
serial = serial.Serial("/dev/ttyUSB0", baudrate=9600)
#serial = serial.Serial("/dev/ttyAMA0", baudrate=9600)

code = ''
status = 'in \n'

while True:
    data = serial.read()
    if data == '\r':

        if status == 'in \n':
		status = 'out \n'
	else:
		status = 'in \n'
        open("status","a+b").write(status)
	print status
        code = ''
    else:
        code = code + data
