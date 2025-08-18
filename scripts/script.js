document.addEventListener('DOMContentLoaded', () => {
    
    // --- Fade-in animation for sections on scroll ---
    
    // Select all elements with the class 'fade-in-section'
    const sections = document.querySelectorAll('.fade-in-section');

    // Set up an Intersection Observer to watch when these sections enter the viewport
    const observer = new IntersectionObserver((entries) => {
        // Loop over each entry (each observed section)
        entries.forEach(entry => {
            // If the section is intersecting with the viewport
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the CSS transition
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        rootMargin: '0px', // No margin around the viewport
        threshold: 0.1   // Trigger when 10% of the section is visible
    });

    // Tell the observer to watch each of the sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- "Copy Email" button functionality ---

    // Get the button, the message span, and the email text
    const copyBtn = document.getElementById('copy-email-btn');
    const copyMsg = document.getElementById('copy-message');
    
    // Ensure the button exists before adding an event listener
    if (copyBtn) {
        const email = copyBtn.textContent.trim();

        copyBtn.addEventListener('click', () => {
            // Create a temporary textarea element to hold the email text
            const textarea = document.createElement('textarea');
            textarea.value = email;
            document.body.appendChild(textarea);
            
            // Select the text in the textarea
            textarea.select();
            
            try {
                // Execute the 'copy' command
                document.execCommand('copy');
                
                // Show the "Copied!" message
                copyMsg.style.opacity = '1';
                
                // Hide the message after 2 seconds
                setTimeout(() => {
                    copyMsg.style.opacity = '0';
                }, 2000);
            } catch (err) {
                // Log an error if copying fails
                console.error('Failed to copy text: ', err);
            }
            
            // Remove the temporary textarea from the document
            document.body.removeChild(textarea);
        });
    }
});
