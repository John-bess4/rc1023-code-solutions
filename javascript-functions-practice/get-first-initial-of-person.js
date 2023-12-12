/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  if (person.firstName) {
    return person.firstName[0];
  } else {
    return undefined;
  }
}
