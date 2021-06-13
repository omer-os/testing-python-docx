# importing libraries
from docx import Document
import requests
from colorama import init
from termcolor import colored
init()
import time
import os



# creating a .docx file
doc = Document()

os.system('cls||clear')
print(colored('\n---------\ automate MS word with python /------------------', 'red'))
print(colored('-----------------\ by omar chatin /------------------\n', 'red'))



# input how many students do you want to get
try:
    students_number = int(input(colored('how many people do you want to get ? : ','green')))
    print('\n')
except:
    print(colored('error occured \n please enter valid number between 0 and 5000\n\n','white', 'on_red'))
    time.sleep(3)






# creating the table
table = doc.add_table(rows=students_number+1,cols=5)




# styling the table
table.style = 'Table Grid'

th_table = table.rows[0].cells
th_table[0].text = 'name'
th_table[1].text = 'gender'
th_table[2].text = 'email'
th_table[3].text = 'phone'
th_table[4].text = 'location'



# requesting data
data = requests.get(f'https://randomuser.me/api/?results={students_number}')

count = 0

data = data.json()['results']
for i in data:
    count +=1
    person={
        "name" : i["name"]["first"] + i["name"]["last"],
        "gender" : i["gender"],
        "email" : i["email"],
        "phone" : i["phone"],
        "location" : i["location"]["country"] + ' / ' +  i["location"]["city"],
    }

    print(colored(f'prson {count} data: ', 'yellow'))
    print(person, '\n')



    dt_table = table.rows[count].cells
    dt_table[0].text = person["name"]
    dt_table[1].text = person["gender"]
    dt_table[2].text = person["email"]
    dt_table[3].text = person["phone"]
    dt_table[4].text = person["location"]



# changing thew page layout
from docx.shared import Inches, Cm
sections = doc.sections
for section in sections:
    section.top_margin = Cm(0.5)
    section.bottom_margin = Cm(0.5)
    section.left_margin = Cm(1)
    section.right_margin = Cm(1)

# saving the file
doc.save('demo.docx')

time.sleep(2)
os.system('cls')

print(colored('---- finished ----', 'red'))
time.sleep(2)

print(colored('\n now openning the word file ...', 'red'))
time.sleep(2)


# openning the .docx file
os.system('start demo.docx')