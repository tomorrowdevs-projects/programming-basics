const emptyAphabetLettersObject = {
  a: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  b: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  c: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  d: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  e: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  f: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  g: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  h: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  i: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  j: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  k: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  l: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  m: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  n: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  o: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  p: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  q: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  r: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  s: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  t: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  u: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  v: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  w: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  x: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  y: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
  z: {
    totalTimes: 0,
    inWords: 0,
    alreadyInWord: false,
  },
};

module.exports = {
  testPath: "test\\test.txt",
  invalidPath: "invalid|path",
  emptyFilePath: "test\\empty.txt",
  emptyAphabetLettersObject,
  testAphabetLettersObject: {
    ...emptyAphabetLettersObject,
    a: {
      totalTimes: 5,
      inWords: 1,
      alreadyInWord: false,
    },
    b: {
      totalTimes: 3,
      inWords: 2,
      alreadyInWord: false,
    },
    c: {
      totalTimes: 3,
      inWords: 2,
      alreadyInWord: false,
    },
  },
  testWordsList: ["aaaaa", "bbc", "bcc"],
  testLowLetterPercentagePresence: {
    lowLetter: "g",
    percentrage: 0.9615384615384616,
  },
  newLineText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\nAperiam esse accusamus,\nullam est qui facilis possimus.\r`,
  noNewLineText: `Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aperiam esse accusamus, ullam est qui facilis possimus. `,
  punctuationWord: "!Lo_rem,",
  noPunctuationWord: "Lorem",
  testText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse accusamus, ullam est qui facilis possimus. Autem commodi similique sapiente soluta nisi qui illum nemo adipisci assumenda ratione, suscipit provident tempora excepturi impedit sint! Officiis maiores facilis ipsa earum quaerat neque sit quam. Reiciendis, atque? Possimus dolores, alias debitis dolorum velit quos hic nulla. Dolor ea facere dolore, rerum minus nobis voluptas. Amet repellendus impedit, suscipit dolor quaerat quam numquam praesentium odio exercitationem quisquam eveniet consequatur ad doloremque nisi officiis, in repellat delectus est rerum. Explicabo nulla at perferendis optio illo! Nobis iure ad, ducimus libero laborum nisi accusamus id. Jam Kap Xyz Wyz.`,
};
