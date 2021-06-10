module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  if(fullName.length <= 1) return 'Error';

  const arrayFullName = fullName.split(' ');
  
  if(arrayFullName.length !== 2) return 'Error';

  const firstName = arrayFullName[0];
  const lastName = arrayFullName[1];

  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
