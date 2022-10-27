

from ctypes.wintypes import HHOOK


total_sec = int(input('Enter the number of seconds'))

D = float(total_sec / 86400)
HH = float(total_sec / 3600)
MM = float(total_sec / 3600) / 60
S = float[(total_sec - D) - HH]
SS = float(S - MM)

# Inserire il risultato precedente nella forma D:HH:MM:SS

final_count = D : HH : MM : SS
print(final_count)