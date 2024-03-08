// Sample data for itinerary (you can replace this with your own data)
const itineraryData = [
    { place: 'Paris', date: '2024-03-15', description: 'Visit Eiffel Tower' },
    { place: 'Rome', date: '2024-03-18', description: 'Explore Colosseum' },
    { place: 'Barcelona', date: '2024-03-20', description: 'Relax on the beach' }
    // Add more items as needed
];

// Function to create itinerary items
function createItineraryItem(item) {
    const div = document.createElement('div');
    div.classList.add('itinerary-item');
    div.innerHTML = `
        <h2>${item.place}</h2>
        <p>Date: ${item.date}</p>
        <p>${item.description}</p>
    `;
    return div;
}

// Populate the itinerary
const itineraryContainer = document.getElementById('itinerary');
itineraryData.forEach(item => {
    const itineraryItem = createItineraryItem(item);
    itineraryContainer.appendChild(itineraryItem);
});
