import os.path

with open('.input.md') as fo:
    op = ''
    start = 0
    name = ''
    save_path = 'temp'
    for x in fo.read().split('\n'):
        if '>## ' in x:
            name = x.replace('>## ', '')
            print(name)
        if (x == '<!-- line break -->'):
            if (start == 1):
                complete_name = os.path.join(save_path, name + '.md')
                print(complete_name)
                with open(complete_name, 'w') as opf:
                    opf.write(op)
                    opf.close()
                    op=''
            else:
                start = 1
        else:
            if (op == ''):
                op = x
            else:
                op = op + '\n' + x

fo.close()
