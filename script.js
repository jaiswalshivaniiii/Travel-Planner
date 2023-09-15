// DOM elements
const destinationForm = document.getElementById('destination-form');
const destinationName = document.getElementById('destination-name');
const destinationDate = document.getElementById('destination-date');
const destinationList = document.getElementById('destination-list');

// Event listener for adding destinations
destinationForm.addEventListener('submit', addDestination);

// Destination data array (in-memory storage, replace with database)
let destinations = [];

// Function to add a destination
function addDestination(event) {
    event.preventDefault();

    const name = destinationName.value;
    const date = destinationDate.value;

    if (!name || !date) {
        alert('Please enter valid destination details.');
        return;
    }

    const destination = {
        id: new Date().getTime(),
        name,
        date,
    };

    destinations.push(destination);
    updateDestinationList();
    clearForm();
}

// Function to update the destination list in the UI
function updateDestinationList() {
    destinationList.innerHTML = '';
    destinations.forEach((destination) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${destination.name} (${destination.date})
            <button onclick="deleteDestination(${destination.id})">Delete</button>
        `;
        destinationList.appendChild(listItem);
    });
}

// Function to delete a destination
function deleteDestination(id) {
    destinations = destinations.filter((destination) => destination.id !== id);
    updateDestinationList();
}

// Function to clear the input form
function clearForm() {
    destinationName.value = '';
    destinationDate.value = '';
}

// Initial update of the destination list
updateDestinationList();
