#!/usr/bin/python
# -*- coding: utf-8 -*-

from PIL import Image
import glob, os

print("Enter full path of the directory: ")
file_path = input(">> ")

for file in glob.glob(file_path+"/*.JPG"):
    # print(file)
    img = Image.open(file)
    new_img = img.resize([1920, 1280])
    new_img.save(file)


