import PIL
from PIL import ImageDraw
import easyocr

im = PIL.Image.open("korean.png")
im
reader = easyocr.Reader(['th','en'])
bounds = reader.readtext('korean.png')
bounds
