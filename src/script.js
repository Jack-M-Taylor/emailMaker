// Function to generate unique email with custom prefix
export function generateUniqueEmail(prefix) {
    // Get today's date
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    const year = today.getFullYear() % 100; // Extract last two digits of the year

    // Pad day and month with leading zeros if necessary
    const paddedDay = String(day).padStart(2, '0');
    const paddedMonth = String(month).padStart(2, '0');

    // Generate the email format using the custom prefix
    const emailPrefix = `${prefix}${paddedDay}${paddedMonth}${year}`;
    
    // Get the counter from local storage or initialize to 0
    let counter = localStorage.getItem('emailCounter');
    counter = counter ? parseInt(counter) + 1 : 1;

    // Update counter in local storage
    localStorage.setItem('emailCounter', counter);

    // Generate the unique email
    const uniqueEmail = `${emailPrefix}${counter}@oodlefinance.com`;
    
    return uniqueEmail;
}