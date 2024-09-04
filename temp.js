// Array to store user data
const userArray = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "defaultpassword"
    }
    // You can add more default users here
  ];
  
  // Function to handle form submission for sign-up
  function handleFormSubmission(event) {
    event.preventDefault();
  
    const firstName = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;


    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
  
    userArray.push(userData);
    console.log("User Array after sign-up:", userArray);
  console.log('user',userArray);
  
    // After successful sign-up, you can redirect the user to the login page or show a message
    alert("Sign-up successful! You can now log in.");
    // window.location.href = "login.html"; // Uncomment to redirect to login page
  }
  
  // Function to handle login submission
  function handleLoginSubmission(event) {
    event.preventDefault();
    console.log('user',userArray);
    const email = document.getElementById("email").value;  
    const password = document.getElementById("password").value;
  
    // Check if the entered email and password match any user in the array
    const user = userArray.find(user => user.email === email && user.password === password);
  
    if (user) {
      console.log("Login successful for:", user);
      alert("Login successful! Welcome " + user.firstName + " " + user.lastName);
      // Redirect or perform further actions here
    } else {
      console.log("Login failed: Incorrect email or password.");
      alert("Login failed: Incorrect email or password.");
    }
  }
  
  // Event listener for sign-up form submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener('submit', handleFormSubmission);
  }
  
  // Event listener for login form submission
  const loginForm = document.querySelector('.form_login');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmission);
  }
  