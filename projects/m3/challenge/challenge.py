"""
Challenge da https://www.codewars.com/kata/52a382ee44408cea2500074c
DESCRIPTION:
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:
.
"""

import numpy as np


matrici_l = [
    # np.array([[9]]),
    # np.array([[1,2],[3,4]]),
    #np.array([[1, 1, 1],  [4, 5, 6], [7, 8, 9] ]),
    np.array([[6,1,1], [4, -2, 5], [2,8,7]]) 
    # np.array([ [[1, 2], [3, 4]], [[1, 2], [2, 1]], [[1, 3], [3, 1]] ]) # da https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html
]


def determinante(m):
    assert (len(m.shape) == 2 and m.shape[0] == m.shape[1])
    # print(f"dimensioni di m: {m.shape}")

    det = 0

    if m.shape == (2, 2):  # uno dei due casi di "uscita"
        det = m[0, 0]*m[1, 1]-m[0, 1]*m[1, 0]
        # print(type(det))
        return det.item()

    if m.shape == (1, 1):  # uno dei due casi di "uscita"
        # print(type(m[0, 0]))
        return m[0, 0].item()

    for i in range(m.shape[0]):
        m1 = np.delete(m, 0, axis=0)
        m1 = np.delete(m1, i, axis=1)
        # print(m1)
        segno = 1 if (i % 2 == 1) else -1
        print("sottomatrice")
        print(m1)      
        sotto_det = determinante(m1)
        print(f"sottodet: {sotto_det}")
        det += m[0, i] * (sotto_det*segno)

    return det


for m in matrici_l:
    print(m.shape)
    det = determinante(m)
    print(det, type(det))
    print(f"numpy: {np.linalg.det(m)}")