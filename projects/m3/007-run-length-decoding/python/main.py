def decoding_list(encoded):
    if len(encoded) == 0:
        return encoded
    decoded = []
    decoded.append(encoded[0])
    decoded = decoded * encoded[1]
    return decoded + decoding_list(encoded[2:])

def main():
    demo = ["A",12,"B",4,"A",6,"B",1]
    print(("Run-length encoded list: {}") .format(demo))
    print(("Run-length decoded list: {}") .format(decoding_list(demo)))

if __name__ == "__main__":
    main()




    
    
    


