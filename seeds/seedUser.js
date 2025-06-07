const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

async function generateUsers(count = 200) {
  faker.locale = 'ar_EG';
  const users = [];

  for (let i = 1; i <= count; i++) {
    users.push({
      name: faker.name.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number('01#########'),
      password: `hashed_password_${i}`,
      role: 'user'
    });
  }

  return users;
}

async function saveUsers() {
  try {
    const users = await generateUsers();
    await User.insertMany(users);
    console.log(`Successfully inserted ${users.length} users into MongoDB`);
    
  } catch (error) {
    console.error('Error saving users:', error.message);
    process.exit(1);
  }
}

saveUsers();