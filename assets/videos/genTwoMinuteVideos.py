# -*- coding: utf-8 -*-
"""
Created on Thu Jul 14 14:22:31 2022

@author: kudek
"""

import os
from os import listdir
import cv2
import sys

timeRequired = 60 # two minute long movie

# for f in listdir():
#     if f.startswith('test_'):
f = sys.argv[1] # filename of the mp4 we wish to concatenate
print(f)
cap = cv2.VideoCapture(f)
fps = cap.get(cv2.CAP_PROP_FPS)      # OpenCV2 version 2 used "CV_CAP_PROP_FPS"
frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = frame_count/fps
numOfRepetitions = int(timeRequired/duration)
filemylist = open("mylist.txt", "w")
for i in range(0,numOfRepetitions):
    filemylist.write('file %s\n' % f)
filemylist.close()        
os.system("ffmpeg -f concat -safe 0 -i mylist.txt -c copy " + os.path.splitext(f)[0] + "_LONG.mp4")