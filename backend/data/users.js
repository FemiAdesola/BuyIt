import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Femi Adesola",
    email: "femiadesola@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Femi Oyin",
    email: "femioyin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
