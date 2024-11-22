

// Show Popular Destinations in Greece
function showDestinations() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Popular Destinations in Greece</h2>
        <ul>
            <li><strong>Athens:</strong> The capital city, famous for the Acropolis.</li>
            <li><strong>Santorini:</strong> Known for its stunning sunsets and whitewashed buildings.</li>
            <li><strong>Crete:</strong> A large island with beautiful beaches and ancient ruins.</li>
            <li><strong>Mykonos:</strong> Famous for its vibrant nightlife and stunning beaches.</li>
            <li><strong>Thessaloniki:</strong> A city rich in Byzantine history and culture.</li>
        </ul>
    `;
}

// Show Greek Cuisine
function showCuisine() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Greek Cuisine</h2>
        <ul>
            <li><strong>Moussaka:</strong> A traditional Greek casserole with eggplant and minced meat.</li>
            <li><strong>Souvlaki:</strong> Grilled meat served with pita and salad.</li>
            <li><strong>Greek Salad:</strong> A refreshing mix of cucumbers, tomatoes, olives, and feta cheese.</li>
            <li><strong>Baklava:</strong> A sweet dessert made of layers of filo dough and honey.</li>
        </ul>
    `;
}

// Show Travel Tips for Greece
function showTravelTips() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Travel Tips for Greece</h2>
        <ul>
            <li><strong>Weather:</strong> Greece can get very hot in the summer. Be sure to drink plenty of water and wear sunscreen.</li>
            <li><strong>Public Transportation:</strong> The metro in Athens is easy to use, but ferries are essential for island-hopping.</li>
            <li><strong>Language:</strong> Greek is the official language, but English is widely spoken in tourist areas.</li>
            <li><strong>Currency:</strong> Greece uses the Euro (€).</li>
        </ul>
    `;
}

// Display a simple alert for fun (could be used for welcoming visitors)
window.onload = function() {
    alert("Welcome to the Greece Travel Guide! Start exploring now.");
};
