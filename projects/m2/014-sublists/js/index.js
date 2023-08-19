// # Does a List Contain a Sublist?

// A sublist is a list that is part of a larger list. 
// A sublist may be a list containing a single element, multiple elements, or even no elements at all.  
// For example, [1], [2], [3] and [4] are all sublists of [1, 2, 3, 4].  
// The list [2, 3] is also a sublist of [1, 2, 3, 4], but [2, 4] is not a sublist [1, 2, 3, 4] 
// because the elements 2 and 4 are not adjacent in the longer list.  
// The empty list is a sublist of any list. As a result, [] is a sublist of [1, 2, 3, 4].   
// A list is a sublist of itself, meaning that [1, 2, 3, 4] is also a sublist of [1, 2, 3, 4].

// In this exercise you will create a function, isSublist, that determines whether or not one list is a sublist of another. 
// Your function should take two lists, larger and smaller, as its only parameters. It should return True if and only if smaller is a sublist of larger. 
// Write a main program that demonstrates your function.


// # Una lista contiene una sottolista?

// Una sottolista è una lista che fa parte di una lista più grande.
// Una sottolista può essere una lista contenente un singolo elemento, più elementi o addirittura nessun elemento.
// Ad esempio, [1], [2], [3] e [4] sono tutti sottoelenchi di [1, 2, 3, 4].
// La lista [2, 3] è anche una sottolista di [1, 2, 3, 4], ma [2, 4] non è una sottolista [1, 2, 3, 4]
// perché gli elementi 2 e 4 non sono adiacenti nell'elenco più lungo.
// L'elenco vuoto è un sottoelenco di qualsiasi elenco. Di conseguenza, [] è un sottoelenco di [1, 2, 3, 4].
// Una lista è una sottolista di se stessa, il che significa che [1, 2, 3, 4] è anche una sottolista di [1, 2, 3, 4].

// In questo esercizio creerai una funzione, isSublist, che determina se un elenco è o meno un sottoelenco di un altro.
// La tua funzione dovrebbe prendere due elenchi, uno più grande e uno più piccolo, come unici parametri. Dovrebbe restituire True se e solo se minore è una sottolista di maggiore.
// Scrivi un programma principale che dimostri la tua funzione.

const firstList= prompt('Please, enter elements for first list', '20,30,40,50').split(' ')
const secondList= prompt('Please enter elements for second list', '20,30').split(' ')
console.log(firstList)
console.log(secondList)
const isSublist = (first, second) => {
  if(first.length <= 1 || second.length <= 1){
    return true;
  } else { 
  return second.every((item) => first.includes(item))
  }
}

console.log(isSublist(firstList, secondList))