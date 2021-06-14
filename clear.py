import os, glob

dir = './data'
for file in os.scandir(dir):
    os.remove(file.path)