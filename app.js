
// JavaScript for handling the form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get the values of hidden inputs
    const action = document.querySelector('input[name="action"]').value;
    const productId = document.querySelector('input[name="productId"]').value;

    // Example: Handling the form submission via AJAX
    fetch('/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: action,
            productId: productId,
        })
    })
    .then(response => response.json())  // Assuming the server returns JSON
    .then(data => {
        // Handle the response from the server
        alert('Product added to cart!');
        console.log(data);
    })
    .catch(error => {
        // Handle any errors
        alert('Error adding product to cart');
        console.error(error);
    });
});



  