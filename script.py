# importing libraries
from docx import Document
import requests


# creating a .docx file
doc = Document()


# input how many students do you want to get
students_number = int(input('how many students do you want to get ?'))


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

    print('\n' , person)



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
