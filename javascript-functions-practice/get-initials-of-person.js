/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  if (person.firstName && person.lastName) {
    const firstInitial = person.firstName[0];
    const lastInitial = person.lastName[0];
    return `${firstInitial}${lastInitial}`;
  } else {
    return undefined;
  }
}
