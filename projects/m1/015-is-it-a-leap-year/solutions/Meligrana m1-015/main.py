if __name__=='__main__':
    anno=int(input("Anno: "))
    if anno%400==0:
        print("anno bisestile")
    else:
        if anno%100==0:
            print("anno non bisestile")
        else:
            if anno%4==0:
                print("anno bisestile")
            else:
                print("anno non bisestile")