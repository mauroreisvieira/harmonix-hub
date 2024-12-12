/**
 * Prints name.
 *
 * @param {string} name - The name
 */
function printName(name: string): string {
  return name;
}

/**
 * Joins the first name and last name with a space.
 *
 * @param {string} firstName - The first name
 * @param {string} lastName - The last name
 * @return {string} The concatenated full name
 */
function join(firstName?: string, lastName?: string): string {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }

  if (firstName) {
    return firstName;
  }

  if (lastName) {
    return lastName;
  }

  return "";
}

const name = join("Harmonix", "Hub");

printName(name);
