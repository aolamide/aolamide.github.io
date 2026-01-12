function showResultPopup(isSuccess, message) {
    // Remove any existing popup
    const existingPopup = document.getElementById('simple-popup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    // Create popup element
    const popup = document.createElement('div');
    popup.id = 'simple-popup';
    popup.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${
        isSuccess 
            ? 'bg-green-100 border-l-4 border-green-500 text-green-800' 
            : 'bg-red-100 border-l-4 border-red-500 text-red-800'
    }`;
    
    popup.innerHTML = `
        <div class="flex items-center">
            <div class="flex-shrink-0">
                <i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-times-circle'} text-lg"></i>
            </div>
            <div class="ml-3">
                <p class="text-sm font-medium">${message}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-gray-500 hover:text-gray-700">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(popup);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (popup && popup.parentElement) {
            popup.remove();
        }
    }, 5000);
}

// Contact form handling with reCAPTCHA v3
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const buttonText = submitBtn.querySelector('.button-text');
    const loadingSpinner = document.getElementById('loading-spinner');
    
    // Show loading state
    buttonText.textContent = 'Sending...';
    loadingSpinner.classList.remove('hidden');
    submitBtn.disabled = true;
    
    try {
        // Get reCAPTCHA token
        const recaptchaToken = await grecaptcha.execute('6LdFl0gsAAAAADTi0evIbvuE_jbAdfwCiQnP3HJC', { action: 'contact_form' });
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            recaptchaToken: recaptchaToken
        };
        
        const response = await fetch('https://contact-api.aolamide.tech/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Show success notification
        showResultPopup(true, 'Message sent successfully! I\'ll get back to you soon.');
        e.target.reset();
        
    } catch (error) {
        console.error('Error sending message:', error);
        showResultPopup(false, 'Sorry, there was an error sending your message. Please try again.');
    } finally {
        // Reset button state
        buttonText.textContent = 'Send Message';
        loadingSpinner.classList.add('hidden');
        submitBtn.disabled = false;
    }
});