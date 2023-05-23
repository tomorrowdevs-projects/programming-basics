'''
Function that takes a title and keywords parameter list
and return a string containing an ascii-table formatted in this way:
+-----------------------+
| Title                 |
+--------+--------------+
| param1 | description1 |
+--------+--------------+
| param2 | description2 |
+--------+--------------+
The maximum length for the title is 76 characters
The maximum length for each key is 22 characters
The maximum length for each value is 50 characters
'''
def ascii_table(title, **parameters):
    #calculate the length of each field
    max_key_len = len(max(parameters.keys(), key=len))
    max_value_len = len(max(parameters.values(), key=len))
    if max_key_len > 22:
        max_key_len = 22
    if max_value_len > 50:
        max_value_len = 50
    if len(title) > 76:
        title = title[:76]
    total_length = max(len(title), max_key_len + max_value_len + 3)

    #fill the output string
    output_string = ""
    output_string += f"+-{total_length * '-'}-+\n"
    output_string += f"| {title.ljust(total_length)} |\n"
    output_string += f"+-{max_key_len * '-'}-+-{max_value_len * '-'}-+\n"
    for key, value in parameters.items():
        output_string += f"| {key.ljust(max_key_len)} | {value.ljust(max_value_len)} |\n"
        output_string += f"+-{max_key_len * '-'}-+-{max_value_len * '-'}-+\n"

    return output_string

if __name__ == "__main__":
    print(ascii_table("Title", param1 = "description1", param2 = "description2"))
