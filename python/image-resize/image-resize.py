#!/usr/bin/python
# -*- coding: utf-8 -*-
from PIL import Image

oldImage = Image.open("card.jpg")
# create new white image
newImage = Image.new("RGB", (480, 320), "white")

# this is the calculation i was telling youi
oldWidth, oldHeight = oldImage.size
newWidth, newHeight = newImage.size

X = (newWidth - oldWidth) / 2
Y = (newHeight - oldHeight) / 2
# calculation end

# paste old to new
newImage.paste( oldImage, ( X, Y ) )

newImage.show()