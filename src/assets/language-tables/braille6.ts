// 6 dots braille parameters

import { IBrailleTable } from './brailleTable'

// dotMap: the dot numbering from x, y coordinates:

// 6-dot Braille numbering
//
//    x: 0 1
// y
// 1     1 4
// 2     2 5
// 3     3 6

export const braille6:IBrailleTable = {
  name: 'english',
  type: '6dots',
  dotMap: {
    0: {
      0: 1,
      1: 2, 
      2: 3
    },
    1: {
      0: 4,
      1: 5,
      2: 6
    }
  },
  numberPrefix: [6],
  latinToBraille: {
    'a': [1],
    'b': [1,2],
    'c': [1,4],
    'd': [1,4,5],
    'e': [1,5],
    'f': [1,2,4],
    'g': [1,2,4,5],
    'h': [1,2,5],
    'i': [2,4],
    'j': [2,4,5],
    'k': [1,3],
    'l': [1,2,3],
    'm': [1,3,4],
    'n': [1,3,4,5],
    'o': [1,3,5],
    'p': [1,2,3,4],
    'q': [1,2,3,4,5],
    'r': [1,2,3,5],
    's': [2,3,4],
    't': [2,3,4,5],
    'u': [1,3,6],
    'v': [1,2,3,6],
    'w': [2,4,5,6],
    'x': [1,3,4,6],
    'y': [1,3,4,5,6],
    'z': [1,3,5,6],
    ' ': [],
    '.': [2,5,6],
    ',': [2],
    '?': [2,6],
    ';': [2,3],
    ':': [2,4],
    '!': [2,3,5],
    '(': [2,3,6],
    ')': [3,5,6],
    '\'': [3],
    '-': [3,6],
    '/': [3,4],
    '*': [3,5],
    '+': [2,3,5],
    '=': [2,3,5,6],
    '0': [3, 4, 5, 6],
    '1': [1, 6],
    '2': [1, 2, 6],
    '3': [1, 4, 6],
    '4': [1, 4, 5, 6],
    '5': [1, 5, 6],
    '6': [1, 2, 4, 6],
    '7': [1, 2, 4, 5, 6],
    '8': [1, 2, 5, 6],
    '9': [2, 4, 6],
		
    'à': [1, 2, 3,5, 6],
    'â': [1, 6],
    'ç': [1,2, 3, 4, 6],
    'è': [2, 3, 4, 6],
    'é': [1, 2, 3, 4, 5, 6],
    'ê': [1, 2, 6],
    'ë': [1, 2, 4, 6],
    'î': [1, 4, 6],
    'ï': [1,2, 4, 5, 6],
    'ù': [2, 3, 4, 5, 6],
    'û': [1, 5, 6],
    'ü': [1, 2, 5, 6],
		
    '¨': [1, 3], // Majuscule NatBraille
    '`': [3, 4,5,6], // Chiffres NatBraille
		
		
		
    /*
		"अ": [1],
		"आ": [3, 4, 5],
		"इ": [2, 4],
		"ई": [3, 5],
		"उ": [1, 3, 6],
		"ऊ": [1, 2, 5, 6],
		"ऎ": [2, 6],
		"ए": [1, 5],
		"ऐ": [3, 4],
		"ऒ": [1, 3, 4, 6],
		"ओ": [1, 3, 5],
		"औ": [2, 4, 6],
		"क": [1, 3],
		"ख": [4, 6],
		"ग": [1, 2, 4, 5],
		"घ": [1, 2, 6],
		"ङ": [3, 4, 6],
		"च": [1, 4],
		"छ": [1, 6],
		"ज": [2, 4, 5],
		"झ": [3, 5, 6],
		"ञ": [2, 5],
		"ट": [2, 3, 4, 5, 6],
		"ठ": [2, 4, 5, 6],
		"ड": [1, 2, 4, 6],
		"ढ": [1, 2, 3, 4, 5, 6],
		"ण": [3, 4, 5, 6],
		"त": [2, 3, 4, 5],
		"थ": [1, 4, 5, 6],
		"द": [1, 4, 5],
		"ध": [2, 3, 4, 6],
		"न": [1, 3, 4, 5],
		"प": [1, 2, 3, 4],
		"फ": [2, 3, 5],
		"ब": [1, 2],
		"भ": [4, 5],
		"म": [1, 3, 4],
		"य": [1, 3, 4, 5, 6],
		"र": [1, 2, 3, 5],
		"ल": [1, 2, 3],
		"ळ": [4, 5, 6],
		"व": [1, 2, 3, 6],
		"श": [1, 4, 6],
		"ष": [1, 2, 3, 4, 6],
		"स": [2, 3, 4],
		"ह": [1, 2, 4],
		"क्ष": [1, 2, 3, 4, 5],
		"ज्ञ": [1, 5, 6],
		"ड़": [1, 2, 4, 5, 6],
		"फ़": [1, 2, 4],
		"ज़": [1, 3, 5, 6],
		"क्": [4],
		"कं": [5, 6],
		"कः": [6],
		"कँ": [3],
		"कऽ": [2]*/
  }
}