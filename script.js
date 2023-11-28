{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function checkPhrase() \{\
    var inputPhrase = document.getElementById('inputPhrase').value;\
    var correctPhrase = 'your_secret_phrase'; // Replace with your actual secret phrase\
\
    if (inputPhrase === correctPhrase) \{\
        window.location.href = 'https://example.com'; // Replace with the actual URL\
    \} else \{\
        alert('Incorrect phrase. Try again.');\
    \}\
\}\
}