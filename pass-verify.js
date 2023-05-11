const bcrypt = require('bcryptjs');

const verifyPassword = async ()=>{
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$QLqHxX3mATsPfv9P1.Q92.xQT1oDeJW80ailh9vJ8jZl/7fLfNXQ.';
  const isMatch = await bcrypt.compare(myPassword,hash);
  console.log(isMatch);
}

verifyPassword();
