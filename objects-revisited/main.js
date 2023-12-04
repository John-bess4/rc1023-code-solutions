const business = {
  opens: '08:00 AM',
  closes: '05:00 PM',
  totalEmployees: 4,
  daysOpen: ['M', 'W', 'F'],
  employees: {
    lebron: {
      position: 'Manager',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    kakashi: {
      position: 'Sales Associate',
      daysOfWeekWorking: ['M', 'F'],
    },
    itadori: {
      position: 'Customer Service',
      daysOfWeekWorking: ['W', 'F'],
    },
    naruto: {
      position: 'Cashier',
      daysOfWeekWorking: ['M', 'W'],
    },
  },
};

console.log(business);

// Function to make API request and add new employees to business object
async function addEmployees() {
  try {
    // Make API request to get user data
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();

    // Loop through the first 4 users in the API response
    for (let i = 0; i < 4; i++) {
      const user = userData[i];

      // Create a new employee object
      const newEmployee = createEmployee(user);

      // Adds the new employee to the business object
      business.employees[user.username.toLowerCase()] = newEmployee;
    }

    // updates the totalEmployees property
    business.totalEmployees += 4;
  } catch (error) {
    console.error('Error adding employees:', error);
  }
}

// the function to create a new employee object
function createEmployee(employeeData) {
  const daysOfWeekWorking = generateRandomWorkdays();
  const fullTime = checkIfFullTime(daysOfWeekWorking);

  return {
    position: `Job Title ${business.totalEmployees + 1}`,
    daysOfWeekWorking,
    fullTime,
  };
}

//  function to generate random workdays
function generateRandomWorkdays() {
  const workdays = ['M', 'T', 'W', 'Th', 'F'];
  const randomWorkdays = [];

  // Randomly select between 1 and 5 workdays
  const numberOfWorkdays = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < numberOfWorkdays; i++) {
    // Randomly select a workday from the array
    const randomIndex = Math.floor(Math.random() * workdays.length);
    randomWorkdays.push(workdays[randomIndex]);
  }

  return randomWorkdays;
}

// Helper function to check if an employee works full-time
function checkIfFullTime(daysOfWeekWorking) {
  return daysOfWeekWorking.length > 5;
}

// using to test the addEmployees function
addEmployees();
console.log(business);
