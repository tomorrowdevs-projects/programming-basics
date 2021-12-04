#Solution for 007-run-length-decoding

def RunLengthDecoder(compressedList):
    n = len(compressedList)
    if n < 2:
        return []
    else:
        decompressedList = []
        for i in range(compressedList[1]):
            decompressedList.append(compressedList[0])
        return decompressedList + RunLengthDecoder(compressedList[2:])

def main():
    l = ["A",12,"B",4,"A",6,"B",1]
    print("That's a compressed run-length list: ", l)
    print("And that's the decoded version: ", RunLengthDecoder(l))

if __name__ == "__main__":
    main()