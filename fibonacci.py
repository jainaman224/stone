l=1
b=0
import math
for i in range(10000):
	c=l+b
	l=b
	b=c
	print c
	if (c>pow(10,999)):
		print i+1
		break