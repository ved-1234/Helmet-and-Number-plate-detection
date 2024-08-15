function processImage() {
    const fileInput = document.getElementById('fileInput');
    const uploadedImage = document.getElementById('uploadedImage');
    const detectionResults = document.getElementById('detectionResults');
  
    if (fileInput.files.length === 0) {
      alert('Please select an image file.');
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      uploadedImage.src = e.target.result;
      
      // Simulate detection process
      setTimeout(function() {
        detectionResults.innerHTML = '<p>Processing the image...</p>';
        // Simulate detection result after some time
        setTimeout(function() {
          detectionResults.innerHTML = '<p>Helmet detected: Yes</p><p>Number plate detected: Yes</p>';
        }, 2000); // Simulate detection delay
      }, 1000); // Simulate image processing delay
    };
  
    reader.readAsDataURL(file);
  }
  const text = "HelmetPlateGuard..."; // Replace with your text
  const container = document.querySelector('.text-container');
  let index = 0;
  
  function showCharacter() {
      if (index < text.length) {
          const span = document.createElement('span');
          span.textContent = text[index];
          container.appendChild(span);
  
          // Trigger animation by delaying each character
          setTimeout(() => {
              span.style.animationDelay = `${index * 200}ms`; // Adjust delay as needed
              span.style.opacity = 1; // Make the span visible
          }, 0);
  
          index++;
          setTimeout(showCharacter, 200); // Adjust the interval (in milliseconds) as needed
      }
  }
  
  showCharacter();

  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
    
    // Simulate sending OTP
    if (emailInput) {
        // Hide email form and show OTP form
        document.getElementById('emailForm').style.display = 'none';
        document.getElementById('otpForm').style.display = 'block';

        // Simulate sending OTP
        // In a real scenario, send the email to the server to generate and send OTP
        messageElement.textContent = 'An OTP has been sent to your email.';
        messageElement.style.color = '#5bc0de'; // Success color
    } else {
        messageElement.textContent = 'Please enter a valid email address.';
        messageElement.style.color = '#d9534f'; // Error color
    }
});

document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const otpInput = document.getElementById('otp').value;
    const messageElement = document.getElementById('message');

    // Simulate OTP verification
    if (otpInput === '123456') { // Replace '123456' with your OTP validation logic
        messageElement.textContent = 'OTP verified successfully!';
        messageElement.style.color = '#5bc0de'; // Success color
        // Redirect to password reset page or other actions
        // window.location.href = 'reset-password.html';
    } else {
        messageElement.textContent = 'Invalid OTP. Please try again.';
        messageElement.style.color = '#d9534f'; // Error color
    }
});
