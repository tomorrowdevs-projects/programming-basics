{\rtf1\ansi\ansicpg1252\cocoartf2706
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red9\green9\blue9;\red0\green0\blue109;\red17\green109\blue18;
\red0\green29\blue164;\red18\green51\blue230;}
{\*\expandedcolortbl;;\csgenericrgb\c3529\c3529\c3529;\csgenericrgb\c0\c0\c42745;\csgenericrgb\c6667\c42745\c7059;
\csgenericrgb\c0\c11373\c64314;\csgenericrgb\c7059\c20000\c90196;}
\paperw11900\paperh16840\margl1440\margr1440\vieww17280\viewh12560\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\fs26 \cf2 anni = \cf3 int\cf2 (\cf3 input\cf2 (\cf4 "Quanti anni hai? "\cf2 ))\
\cf5 if \cf2 anni < \cf6 1\cf2 :\
    \cf3 print\cf2 (\cf4 "ERRORE!"\cf2 )\
\cf5 else\cf2 :\
    \cf5 if \cf2 anni <= \cf6 2\cf2 :\
        annic = anni * \cf6 10.5\
    \cf5 else\cf2 :\
        annic=(\cf6 2\cf2 *\cf6 10.5\cf2 )+((anni-\cf6 2\cf2 )*\cf6 4\cf2 )\
\
    \cf3 print\cf2 (\cf4 "Gli anni immessi corrispondono a "\cf2 +\cf3 str\cf2 (annic)+\cf4 " anni canini"\cf2 )\
}