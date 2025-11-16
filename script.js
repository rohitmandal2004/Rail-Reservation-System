// Train database
const trains = [
    {
        train_no: 12001,
        name: "Rajdhani Express",
        from: "Kolkata",
        to: "Delhi",
        classes: {
            "1A": 4500,
            "2A": 3000,
            "3A": 2200,
            "3E": 1800,
            "SL": 600
        }
    },
    {
        train_no: 12223,
        name: "Shatabdi Express",
        from: "Kolkata",
        to: "Patna",
        classes: {
            "1A": 3200,
            "2A": 2000,
            "3A": 1500,
            "3E": 1100,
            "SL": 450
        }
    },
    {
        train_no: 13005,
        name: "Amritsar Mail",
        from: "Howrah",
        to: "Amritsar",
        classes: {
            "1A": 4000,
            "2A": 2600,
            "3A": 1900,
            "3E": 1500,
            "SL": 550
        }
    },
    {
        train_no: 15001,
        name: "Mumbai Express",
        from: "Delhi",
        to: "Mumbai",
        classes: {
            "1A": 5000,
            "2A": 3200,
            "3A": 2400,
            "3E": 1900,
            "SL": 700
        }
    },
    {
        train_no: 15002,
        name: "Bangalore Express",
        from: "Mumbai",
        to: "Bangalore",
        classes: {
            "1A": 4800,
            "2A": 3100,
            "3A": 2300,
            "3E": 1800,
            "SL": 650
        }
    },
    {
        train_no: 16001,
        name: "Hyderabad Mail",
        from: "Delhi",
        to: "Hyderabad",
        classes: {
            "1A": 4700,
            "2A": 3000,
            "3A": 2200,
            "3E": 1750,
            "SL": 600
        }
    },
    {
        train_no: 16002,
        name: "Chennai Express",
        from: "Delhi",
        to: "Chennai",
        classes: {
            "1A": 5200,
            "2A": 3400,
            "3A": 2500,
            "3E": 2000,
            "SL": 750
        }
    },
    {
        train_no: 17001,
        name: "Pune Express",
        from: "Mumbai",
        to: "Pune",
        classes: {
            "1A": 2500,
            "2A": 1600,
            "3A": 1200,
            "3E": 950,
            "SL": 400
        }
    },
    {
        train_no: 18001,
        name: "Jaipur Express",
        from: "Delhi",
        to: "Jaipur",
        classes: {
            "1A": 2800,
            "2A": 1800,
            "3A": 1400,
            "3E": 1100,
            "SL": 450
        }
    },
    {
        train_no: 18002,
        name: "Agra Express",
        from: "Delhi",
        to: "Agra",
        classes: {
            "1A": 2200,
            "2A": 1400,
            "3A": 1000,
            "3E": 800,
            "SL": 350
        }
    },
    {
        train_no: 19001,
        name: "Lucknow Express",
        from: "Delhi",
        to: "Lucknow",
        classes: {
            "1A": 3200,
            "2A": 2000,
            "3A": 1500,
            "3E": 1200,
            "SL": 500
        }
    },
    {
        train_no: 19002,
        name: "Varanasi Express",
        from: "Delhi",
        to: "Varanasi",
        classes: {
            "1A": 3800,
            "2A": 2400,
            "3A": 1800,
            "3E": 1400,
            "SL": 550
        }
    },
    {
        train_no: 20001,
        name: "Goa Express",
        from: "Mumbai",
        to: "Goa",
        classes: {
            "1A": 3500,
            "2A": 2200,
            "3A": 1600,
            "3E": 1300,
            "SL": 500
        }
    },
    {
        train_no: 20002,
        name: "Kerala Express",
        from: "Delhi",
        to: "Kochi",
        classes: {
            "1A": 6500,
            "2A": 4200,
            "3A": 3100,
            "3E": 2400,
            "SL": 900
        }
    },
    {
        train_no: 21001,
        name: "Kolkata Express",
        from: "Delhi",
        to: "Kolkata",
        classes: {
            "1A": 5000,
            "2A": 3200,
            "3A": 2400,
            "3E": 1900,
            "SL": 700
        }
    },
    {
        train_no: 21002,
        name: "Ahmedabad Express",
        from: "Delhi",
        to: "Ahmedabad",
        classes: {
            "1A": 3500,
            "2A": 2200,
            "3A": 1600,
            "3E": 1300,
            "SL": 500
        }
    },
    {
        train_no: 22001,
        name: "Surat Express",
        from: "Mumbai",
        to: "Surat",
        classes: {
            "1A": 2000,
            "2A": 1300,
            "3A": 1000,
            "3E": 800,
            "SL": 350
        }
    },
    {
        train_no: 22002,
        name: "Bhopal Express",
        from: "Delhi",
        to: "Bhopal",
        classes: {
            "1A": 3000,
            "2A": 1900,
            "3A": 1400,
            "3E": 1100,
            "SL": 450
        }
    },
    {
        train_no: 23001,
        name: "Indore Express",
        from: "Mumbai",
        to: "Indore",
        classes: {
            "1A": 3200,
            "2A": 2000,
            "3A": 1500,
            "3E": 1200,
            "SL": 500
        }
    },
    {
        train_no: 23002,
        name: "Nagpur Express",
        from: "Delhi",
        to: "Nagpur",
        classes: {
            "1A": 4200,
            "2A": 2700,
            "3A": 2000,
            "3E": 1600,
            "SL": 600
        }
    }
];

// Extract unique stations for dropdown
function getUniqueStations() {
    const stations = new Set();
    trains.forEach(train => {
        stations.add(train.from);
        stations.add(train.to);
    });
    return Array.from(stations).sort();
}

let selectedTrain = null;

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    displayAllTrains();
    setupNavigation();
    setupEnterKeySearch();
    populateStationDropdowns();
});

// Setup Enter key for search fields
function setupEnterKeySearch() {
    document.getElementById('quickSource').addEventListener('change', function () {
        if (document.getElementById('quickDestination').value) quickSearchTrains();
    });
    document.getElementById('quickDestination').addEventListener('change', function () {
        if (document.getElementById('quickSource').value) quickSearchTrains();
    });
    document.getElementById('source').addEventListener('change', function () {
        if (document.getElementById('destination').value) searchTrains();
    });
    document.getElementById('destination').addEventListener('change', function () {
        if (document.getElementById('source').value) searchTrains();
    });
}

// Populate station dropdowns
function populateStationDropdowns() {
    const stations = getUniqueStations();
    
    // Populate all four dropdowns
    [
        'quickSource',
        'quickDestination',
        'source',
        'destination'
    ].forEach(elementId => {
        const select = document.getElementById(elementId);
        const currentValue = select.value;
        
        // Keep the default option
        const defaultOption = select.querySelector('option[value=""]');
        select.innerHTML = '';
        select.appendChild(defaultOption);
        
        // Add all stations
        stations.forEach(station => {
            const option = document.createElement('option');
            option.value = station;
            option.textContent = station;
            select.appendChild(option);
        });
        
        // Restore previous value if it exists
        if (currentValue) {
            select.value = currentValue;
        }
    });
}

// Display all trains in the trains section
function displayAllTrains() {
    const container = document.getElementById('trainsContainer');
    container.innerHTML = '';

    trains.forEach((train, index) => {
        const trainCard = document.createElement('div');
        trainCard.className = 'train-card';
        trainCard.style.animationDelay = (index * 0.1) + 's';
        trainCard.style.animation = 'fadeInUp 0.6s ease forwards';
        trainCard.innerHTML = `
            <h3>${train.name}</h3>
            <div class="train-number">Train No: ${train.train_no}</div>
            <div class="train-route">
                <span class="station">${train.from}</span>
                <span class="arrow">→</span>
                <span class="station">${train.to}</span>
            </div>
            <div class="classes-info">
                <strong style="color: #1e3a8a; margin-bottom: 0.5rem; display: block;">Available Classes:</strong>
                ${Object.entries(train.classes).map(([cls, price]) => `
                    <div class="class-price">
                        <span class="class-name">${cls}</span>
                        <span class="class-price-value">₹${price}</span>
                    </div>
                `).join('')}
            </div>
            <button class="quick-book-btn" onclick="scrollToBooking('${train.from}', '${train.to}')">Book This Train</button>
        `;
        container.appendChild(trainCard);
    });
}

// Search trains by route
function searchTrains() {
    const source = document.getElementById('source').value.trim();
    const destination = document.getElementById('destination').value.trim();

    if (!source || !destination) {
        alert('Please select both source and destination stations');
        return;
    }

    const results = trains.filter(train =>
        train.from.toLowerCase() === source.toLowerCase() &&
        train.to.toLowerCase() === destination.toLowerCase()
    );

    displaySearchResults(results, 'resultsList', 'searchResults');
}

// Quick search from quick search section
function quickSearchTrains() {
    const source = document.getElementById('quickSource').value.trim();
    const destination = document.getElementById('quickDestination').value.trim();

    if (!source || !destination) {
        alert('Please select both source and destination stations');
        return;
    }

    const results = trains.filter(train =>
        train.from.toLowerCase() === source.toLowerCase() &&
        train.to.toLowerCase() === destination.toLowerCase()
    );

    displaySearchResults(results, 'quickResultsList', 'quickSearchResults');
}

// Display search results (refactored for reuse)
function displaySearchResults(results, resultContainerId, resultsContainerId) {
    const resultsContainer = document.getElementById(resultsContainerId);
    const resultsList = document.getElementById(resultContainerId);

    if (results.length === 0) {
        resultsContainer.style.display = 'block';
        resultsList.innerHTML = '<div class="no-results">❌ No trains found for this route. Please try another route.</div>';
        return;
    }

    resultsContainer.style.display = 'block';
    resultsList.innerHTML = results.map((train, index) => `
        <div class="result-train" style="animation-delay: ${index * 0.1}s;" onclick="selectTrain(${train.train_no})">
            <div class="result-train-header">
                <h4>${train.name}</h4>
                <span class="train-number-small">Train No: ${train.train_no}</span>
            </div>
            <div class="result-train-route">
                <span class="station">${train.from}</span>
                <span class="arrow">→</span>
                <span class="station">${train.to}</span>
            </div>
            <div class="result-train-classes">
                ${Object.entries(train.classes).map(([cls, price]) => `
                    <span class="class-badge">${cls}: ₹${price}</span>
                `).join('')}
            </div>
            <p class="select-hint">Click to book this train</p>
        </div>
    `).join('');

    document.getElementById('ticketForm').style.display = 'none';
}

// Select a train and show booking form
function selectTrain(trainNo) {
    selectedTrain = trains.find(t => t.train_no === trainNo);

    if (selectedTrain) {
        document.getElementById('ticketForm').style.display = 'block';
        document.getElementById('trainSelect').value = selectedTrain.train_no;
        document.getElementById('confirmationSection').style.display = 'none';

        // Scroll to booking form
        document.getElementById('ticketForm').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Toggle payment fields based on selected payment method
function togglePaymentFields() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Hide all payment fields
    document.getElementById('cardFields').style.display = 'none';
    document.getElementById('upiFields').style.display = 'none';
    document.getElementById('netbankingFields').style.display = 'none';
    document.getElementById('walletFields').style.display = 'none';
    
    // Show relevant fields based on selection
    if (paymentMethod === 'credit' || paymentMethod === 'debit') {
        document.getElementById('cardFields').style.display = 'block';
    } else if (paymentMethod === 'upi') {
        document.getElementById('upiFields').style.display = 'block';
    } else if (paymentMethod === 'netbanking') {
        document.getElementById('netbankingFields').style.display = 'block';
    } else if (paymentMethod === 'wallet') {
        document.getElementById('walletFields').style.display = 'block';
    }
}

// Format card number with spaces
function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formattedValue;
}

// Format expiry date as MM/YY
function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

// Validate payment information
function validatePayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (!paymentMethod) {
        alert('Please select a payment method');
        return false;
    }
    
    if (paymentMethod === 'credit' || paymentMethod === 'debit') {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardCVV = document.getElementById('cardCVV').value;
        const cardName = document.getElementById('cardName').value.trim();
        
        if (!cardNumber || cardNumber.length < 16) {
            alert('Please enter a valid card number');
            return false;
        }
        if (!cardExpiry || cardExpiry.length !== 5) {
            alert('Please enter a valid expiry date (MM/YY)');
            return false;
        }
        if (!cardCVV || cardCVV.length < 3) {
            alert('Please enter a valid CVV');
            return false;
        }
        if (!cardName) {
            alert('Please enter cardholder name');
            return false;
        }
    } else if (paymentMethod === 'upi') {
        const upiId = document.getElementById('upiId').value.trim();
        if (!upiId || !upiId.includes('@')) {
            alert('Please enter a valid UPI ID');
            return false;
        }
    } else if (paymentMethod === 'netbanking') {
        const bankName = document.getElementById('bankName').value;
        const userId = document.getElementById('netbankingUserId').value.trim();
        if (!bankName) {
            alert('Please select a bank');
            return false;
        }
        if (!userId) {
            alert('Please enter your banking user ID');
            return false;
        }
    } else if (paymentMethod === 'wallet') {
        const walletType = document.getElementById('walletType').value;
        const walletMobile = document.getElementById('walletMobile').value.trim();
        if (!walletType) {
            alert('Please select a wallet type');
            return false;
        }
        if (!walletMobile || walletMobile.length < 10) {
            alert('Please enter a valid mobile number');
            return false;
        }
    }
    
    return true;
}

// Get payment details for display
function getPaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    let methodName = '';
    let details = '';
    
    switch(paymentMethod) {
        case 'credit':
            methodName = 'Credit Card';
            const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            details = `Card ending in ${cardNumber.slice(-4)}`;
            break;
        case 'debit':
            methodName = 'Debit Card';
            const debitCardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            details = `Card ending in ${debitCardNumber.slice(-4)}`;
            break;
        case 'upi':
            methodName = 'UPI';
            details = document.getElementById('upiId').value;
            break;
        case 'netbanking':
            methodName = 'Net Banking';
            details = document.getElementById('bankName').options[document.getElementById('bankName').selectedIndex].text;
            break;
        case 'wallet':
            methodName = 'Wallet';
            details = document.getElementById('walletType').value;
            break;
    }
    
    return { methodName, details };
}

// Book ticket
function bookTicket(event) {
    event.preventDefault();

    const name = document.getElementById('passengerName').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const numSeats = document.getElementById('numSeats').value;
    const classType = document.getElementById('classSelect').value;

    if (!name || !age || !gender || !email || !phone || !numSeats || !classType) {
        alert('Please fill in all fields');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Validate payment
    if (!validatePayment()) {
        return;
    }

    const train = selectedTrain;

    if (!train || !train.classes[classType]) {
        alert('Invalid selection');
        return;
    }

    const pricePerSeat = train.classes[classType];
    const totalPrice = pricePerSeat * numSeats;
    const ticketNumber = generateTicketNumber();
    
    // Get payment details
    const paymentInfo = getPaymentDetails();

    // Populate ticket
    document.getElementById('ticketNumberDisplay').textContent = `Ticket No: ${ticketNumber}`;
    document.getElementById('ticketName').textContent = name;
    document.getElementById('ticketAge').textContent = `${age} years`;
    document.getElementById('ticketGender').textContent = gender;
    document.getElementById('ticketEmail').textContent = email;
    document.getElementById('ticketPhone').textContent = phone;
    document.getElementById('ticketSeats').textContent = `${numSeats} Seat(s)`;
    document.getElementById('ticketFrom').textContent = train.from;
    document.getElementById('ticketTo').textContent = train.to;
    document.getElementById('ticketTrain').textContent = train.name;
    document.getElementById('ticketTrainNo').textContent = train.train_no;
    document.getElementById('ticketClass').textContent = classType;
    document.getElementById('ticketPrice').textContent = `₹${totalPrice}`;
    
    // Populate payment details
    document.getElementById('ticketPaymentMethod').textContent = paymentInfo.methodName;
    if (paymentInfo.details) {
        document.getElementById('ticketPaymentDetails').textContent = paymentInfo.details;
        document.getElementById('ticketPaymentDetailsRow').style.display = 'flex';
    } else {
        document.getElementById('ticketPaymentDetailsRow').style.display = 'none';
    }

    // Generate QR code
    generateQRCode(ticketNumber, name, train, classType);

    document.getElementById('confirmationSection').style.display = 'block';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('quickSearchResults').style.display = 'none';
    document.getElementById('ticketForm').style.display = 'none';

    // Scroll to confirmation
    document.getElementById('confirmationSection').scrollIntoView({ behavior: 'smooth' });
}

// Generate unique ticket number
function generateTicketNumber() {
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `TKT${timestamp}${random}`;
}

// Generate QR code
function generateQRCode(ticketNumber, passengerName, train, classType) {
    const qrContainer = document.getElementById('qrCodeContainer');
    qrContainer.innerHTML = ''; // Clear previous QR code

    // Create QR code data
    const qrData = `Ticket: ${ticketNumber}\nPassenger: ${passengerName}\nTrain: ${train.name}\nRoute: ${train.from} to ${train.to}\nClass: ${classType}`;

    // Generate QR code
    new QRCode(qrContainer, {
        text: qrData,
        width: 200,
        height: 200,
        colorDark: '#1e3a8a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Print ticket
function printTicket() {
    const ticketNumber = document.getElementById('ticketNumberDisplay').textContent;
    const name = document.getElementById('ticketName').textContent;
    const age = document.getElementById('ticketAge').textContent;
    const email = document.getElementById('ticketEmail').textContent;
    const phone = document.getElementById('ticketPhone').textContent;
    const from = document.getElementById('ticketFrom').textContent;
    const to = document.getElementById('ticketTo').textContent;
    const train = document.getElementById('ticketTrain').textContent;
    const trainNo = document.getElementById('ticketTrainNo').textContent;
    const classType = document.getElementById('ticketClass').textContent;
    const price = document.getElementById('ticketPrice').textContent;

    // Get QR code canvas
    const qrCanvas = document.querySelector('#qrCodeContainer canvas');
    const qrImage = qrCanvas ? qrCanvas.toDataURL('image/png') : '';

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Railway Ticket</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    padding: 20px; 
                    background: #f5f5f5;
                }
                .ticket-container {
                    background: white;
                    border: 2px dashed #3b82f6;
                    border-radius: 10px;
                    max-width: 800px;
                    margin: 0 auto;
                    overflow: hidden;
                }
                .ticket-header {
                    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
                    color: white;
                    padding: 30px 20px;
                    text-align: center;
                }
                .railway-logo { font-size: 20px; font-weight: 700; margin-bottom: 10px; }
                .ticket-title { 
                    font-size: 28px; 
                    font-weight: 700; 
                    letter-spacing: 2px; 
                    margin-bottom: 15px;
                }
                .ticket-number { 
                    background: rgba(255,255,255,0.2); 
                    padding: 10px 20px; 
                    border-radius: 6px; 
                    font-family: 'Courier New'; 
                    font-weight: 600;
                    display: inline-block;
                }
                .ticket-content { padding: 30px; }
                .section { margin-bottom: 20px; }
                .section h4 { 
                    color: #1e3a8a; 
                    font-size: 14px; 
                    margin-bottom: 12px; 
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-bottom: 2px solid #f97316;
                    padding-bottom: 8px;
                }
                .row { 
                    display: flex; 
                    justify-content: space-between; 
                    padding: 8px 0; 
                    border-bottom: 1px solid #e5e7eb;
                }
                .label { font-weight: 600; color: #1f2937; }
                .value { color: #3b82f6; text-align: right; }
                .journey { 
                    display: flex; 
                    justify-content: space-around; 
                    align-items: center;
                    background: #f9fafb;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 15px 0;
                }
                .station { text-align: center; }
                .station-label { font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; margin-bottom: 5px; }
                .station-name { font-size: 18px; font-weight: 700; color: #1e3a8a; }
                .arrow { font-size: 24px; font-weight: bold; color: #3b82f6; }
                .divider { border-top: 2px dashed #e5e7eb; margin: 15px 0; }
                .fare-row { background: #f9fafb; padding: 12px; border-radius: 6px; margin-top: 10px; }
                .fare-value { color: #10b981; font-size: 20px; font-weight: 700; }
                .qr-section {
                    text-align: center;
                    margin: 20px 0;
                    padding: 20px;
                    background: #f9fafb;
                    border-radius: 8px;
                }
                .qr-section h4 {
                    color: #1e3a8a; 
                    font-size: 14px; 
                    margin-bottom: 12px; 
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-bottom: 2px solid #f97316;
                    padding-bottom: 8px;
                }
                .qr-image {
                    max-width: 200px;
                    margin: 0 auto;
                }
                .footer {
                    text-align: center;
                    padding-top: 20px;
                    border-top: 2px dashed #e5e7eb;
                    color: #6b7280;
                }
                @media print {
                    body { padding: 0; background: white; }
                    .ticket-container { border: none; box-shadow: none; }
                }
            </style>
        </head>
        <body>
            <div class="ticket-container">
                <div class="ticket-header">
                    <div class="railway-logo">🚂 RailYatra</div>
                    <div class="ticket-title">RAILWAY TICKET</div>
                    <div class="ticket-number">${ticketNumber}</div>
                </div>
                <div class="ticket-content">
                    <div class="section">
                        <h4>Passenger Details</h4>
                        <div class="row">
                            <span class="label">Name:</span>
                            <span class="value">${name}</span>
                        </div>
                        <div class="row">
                            <span class="label">Age:</span>
                            <span class="value">${age}</span>
                        </div>
                        <div class="row">
                            <span class="label">Email:</span>
                            <span class="value">${email}</span>
                        </div>
                        <div class="row">
                            <span class="label">Phone:</span>
                            <span class="value">${phone}</span>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="section">
                        <h4>Journey Details</h4>
                        <div class="journey">
                            <div class="station">
                                <div class="station-label">FROM</div>
                                <div class="station-name">${from}</div>
                            </div>
                            <div class="arrow">→</div>
                            <div class="station">
                                <div class="station-label">TO</div>
                                <div class="station-name">${to}</div>
                            </div>
                        </div>
                        <div class="row" style="margin-top: 15px;">
                            <span class="label">Train:</span>
                            <span class="value">${train}</span>
                        </div>
                        <div class="row">
                            <span class="label">Train Number:</span>
                            <span class="value">${trainNo}</span>
                        </div>
                        <div class="row">
                            <span class="label">Class:</span>
                            <span class="value">${classType}</span>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="section">
                        <h4>Fare Details</h4>
                        <div class="row fare-row">
                            <span class="label">Ticket Price:</span>
                            <span class="value fare-value">${price}</span>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="qr-section">
                        <h4>Ticket Verification</h4>
                        <img src="${qrImage}" alt="QR Code" class="qr-image">
                    </div>

                    <div class="footer">
                        <p>Thank you for booking with us!</p>
                        <p style="font-size: 12px; margin-top: 8px;">Please carry this confirmation during your journey</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Download ticket as text file
function downloadTicket() {
    const ticketNumber = document.getElementById('ticketNumberDisplay').textContent;
    const name = document.getElementById('ticketName').textContent;
    const age = document.getElementById('ticketAge').textContent;
    const email = document.getElementById('ticketEmail').textContent;
    const phone = document.getElementById('ticketPhone').textContent;
    const from = document.getElementById('ticketFrom').textContent;
    const to = document.getElementById('ticketTo').textContent;
    const train = document.getElementById('ticketTrain').textContent;
    const trainNo = document.getElementById('ticketTrainNo').textContent;
    const classType = document.getElementById('ticketClass').textContent;
    const price = document.getElementById('ticketPrice').textContent;

    const ticketContent = `
═══════════════════════════════════════════════════════════════
                    RAILWAY BOOKING TICKET
═══════════════════════════════════════════════════════════════

${ticketNumber}

───────────────────────────────────────────────────────────────
PASSENGER DETAILS
───────────────────────────────────────────────────────────────
Name:       ${name}
Age:        ${age}
Email:      ${email}
Phone:      ${phone}

───────────────────────────────────────────────────────────────
JOURNEY DETAILS
───────────────────────────────────────────────────────────────
From:           ${from}
To:             ${to}
Train:          ${train}
Train Number:   ${trainNo}
Class:          ${classType}

───────────────────────────────────────────────────────────────
FARE DETAILS
───────────────────────────────────────────────────────────────
Ticket Price:   ${price}

───────────────────────────────────────────────────────────────
Thank you for booking with us!
Please carry this confirmation during your journey.
═══════════════════════════════════════════════════════════════
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ticketContent));
    element.setAttribute('download', `railway-ticket-${ticketNumber}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Reset booking
function resetBooking() {
    document.getElementById('source').value = '';
    document.getElementById('destination').value = '';
    document.getElementById('quickSource').value = '';
    document.getElementById('quickDestination').value = '';
    document.getElementById('passengerName').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('numSeats').value = '1';
    document.getElementById('classSelect').value = '';
    
    // Reset payment fields
    document.getElementById('paymentMethod').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('cardExpiry').value = '';
    document.getElementById('cardCVV').value = '';
    document.getElementById('cardName').value = '';
    document.getElementById('upiId').value = '';
    document.getElementById('bankName').value = '';
    document.getElementById('netbankingUserId').value = '';
    document.getElementById('walletType').value = '';
    document.getElementById('walletMobile').value = '';
    togglePaymentFields(); // Hide all payment fields
    
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('quickSearchResults').style.display = 'none';
    document.getElementById('ticketForm').style.display = 'none';
    document.getElementById('confirmationSection').style.display = 'none';

    // Scroll to booking section
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to booking with pre-filled values
function scrollToBooking(source, destination) {
    document.getElementById('source').value = source;
    document.getElementById('destination').value = destination;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Increase number of seats
function increaseSeats() {
    const seatInput = document.getElementById('numSeats');
    const currentValue = parseInt(seatInput.value);
    if (currentValue < 6) {
        seatInput.value = currentValue + 1;
    }
}

// Decrease number of seats
function decreaseSeats() {
    const seatInput = document.getElementById('numSeats');
    const currentValue = parseInt(seatInput.value);
    if (currentValue > 1) {
        seatInput.value = currentValue - 1;
    }
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Go to trains page
function goToTrainsPage() {
    window.location.href = 'trains.html';
}

// Navigation link active state
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}
