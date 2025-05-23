import {   products }   from './products.js';

// Copy products and add a quantity field
const updatedProducts = products.map(product => ({
    ...product,
    quantity: 0 // Default quantity value
}));

const table = document.createElement('table');
const headerRow = document.createElement('tr');

// Create table headers
['Id','Name', 'Price','Category','Quantity','Subtotal'].forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Populate table rows
updatedProducts.forEach((product, index) => {
    const row = document.createElement('tr');

    // ID cell
    const idCell = document.createElement('td');
    idCell.textContent = product.id;    
    row.appendChild(idCell);

    // Name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    // Price cell
    const priceCell = document.createElement('td');
    priceCell.textContent = product.price.toLocaleString();
    priceCell.className = 'subtotal';
    row.appendChild(priceCell);

    // Category cell
    const categoryCell = document.createElement('td'); 
    categoryCell.textContent = product.category;
    row.appendChild(categoryCell);

    // Quantity cell with buttons
    const quantityCell = document.createElement('td');
    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', () => {
        if (updatedProducts[index].quantity > 0) {
            updatedProducts[index].quantity--;
            quantitySpan.textContent = updatedProducts[index].quantity;
        }
    });

    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = product.quantity;

    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.addEventListener('click', () => {
        updatedProducts[index].quantity++;
        quantitySpan.textContent = updatedProducts[index].quantity;
    });

    quantityCell.appendChild(decrementButton);
    quantityCell.appendChild(quantitySpan);
    quantityCell.appendChild(incrementButton);
    row.appendChild(quantityCell);

    // Append the row to the table
    // Subtotal cell
    const subtotalCell = document.createElement('td');
    const subtotal = product.price * updatedProducts[index].quantity.toFixed(2);
    subtotalCell.textContent = subtotal.toLocaleString();
    subtotalCell.className = 'subtotal';
    // subtotalCell.textContent = ((product.price * updatedProducts[index].quantity).toFixed(2)).toLocaleString();
    row.appendChild(subtotalCell);

    // Update subtotal when quantity changes
    const updateSubtotal = () => {
        const subtotal1 = product.price * updatedProducts[index].quantity.toFixed(2);
        subtotalCell.textContent = subtotal1.toLocaleString();
        // subtotalCell.textContent = ((product.price * updatedProducts[index].quantity).toFixed(2)).toLocaleString();
    };
    decrementButton.addEventListener('click', updateSubtotal);
    incrementButton.addEventListener('click', updateSubtotal);

    table.appendChild(row);
});

// Append table to the document body
document.body.appendChild(table);

// localStorage.clear ();
localStorage.setItem('cart', JSON.stringify(updatedProducts));

 

