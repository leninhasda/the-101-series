#!/usr/bin/env python

# tuple is like list
# can only add new item
# access item
# count item
# can't do anything else

a = (1,2,3,4)
a = a + (5,) #adding new item
# here , is must, otherwise 5 will be integer which is tuple+integer invalid
b=(5,4)
a+=b
print(a)
