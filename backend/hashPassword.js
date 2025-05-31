const bcrypt = require("bcrypt");

const hashPassword = async () => {
  const password = "Admin@123"; // Replace with your desired password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);
};

hashPassword();