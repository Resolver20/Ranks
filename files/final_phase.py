import PyPDF2
file = open("../TSEAMCET19FINALPHASE.pdf","rb")
file=PyPDF2.PdfFileReader(file)

def clean_up(chunck, index, errors):
    count = 0
    for i in chunck:
        if(i[index] in errors):
            i[index-1] += i[index]
            new_list = i[:index]+i[index+1:]
            chunck[count] = new_list
        count += 1
    return(chunck)


for page_number in range(22):
    obj = file.getPage(page_number)
    content = obj.extractText()
    array_format = content.split("\n")
    array_format = array_format[30:]
    prev = 30
    affiliations = ["KU", "OU", "JNTU", "PJTSAU",
                    "JNTUH", "PVNRTVU", "JNAFAU", "MGUN"]
    prev = 0
    count = 0
    array_chunck = []
    for i in array_format:
        if(i in affiliations):
           array_chunck.append(array_format[prev:count+1])
           prev = count+1
        count += 1
    ninth_index_errors = ["ENGINEERING", "TECHNOLOGY", "MANUFACTURING  SYSTEMS", "ENGG", "INSTRUMENTATION ENGINEERING"]
    second_index_errors = [ "CAMPUS", "(AUTONOMOUS)", "MANAGEMENT", "SCIENCES", "WOMEN"]
    array_chunck = clean_up(array_chunck, 2, second_index_errors)
    array_chunck = clean_up(array_chunck, 9, ninth_index_errors)

    for i in array_chunck:
        if(len(i) == 27):
            print(i,end=',')
            print("")
        else:
            print("                         ")
            print("                         ")
            print(i, len(i))
            print("                         ")
            print("                         ")
