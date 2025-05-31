const bcrypt = require("bcrypt");

const verifyPassword = async () => {
  const password = "Admin@123"; // Replace with the password you want to test
  const hash = "$2b$10$marm9SO/rMNk8TYvHIyT3u8MMDq9HrvSpXSvhVsxjzhFQlFaKFXAm"; // Your bcrypt hash

  const isMatch = await bcrypt.compare(password, hash);
  if (isMatch) {
    console.log("Password matches!");
  } else {
    console.log("Password does not match.");
  }
};

verifyPassword();