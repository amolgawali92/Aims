import openpyxl

#Write/Add same data in Excel...

file="D:\Selenium\DDTesting.xlsx"

workbook=openpyxl.load_workbook(file)
sheet=workbook.active   #OR  sheet=workbook["Data"].....Get active sheet from excel

for r in range(1,3):
    for c in range(1,4):
        sheet.cell(r,c).value="1"

workbook.save(file)

