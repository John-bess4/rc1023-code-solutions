/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if ((person.age >= 16) & 21) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "Yakko Warner: The oldest of the Warner siblings. His catchphrase is 'Helloooo Nurse!'";
    case 'wakko':
      return "Wakko Warner: The middle sibling. He's known for his gag with the 'Gag Bag' and 'Wheel of Morality.'";
    case 'dot':
      return "Dot Warner: The youngest of the siblings. She often exclaims, 'I'm cute~' and is a master of pet care.";
    default:
      return 'Goodnight everybody! These are the Warner Brothers and the Warner Sister, Dot.';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Shining';
    case 'drama':
      return 'The Shawshank Redemption';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Blade Runner';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
