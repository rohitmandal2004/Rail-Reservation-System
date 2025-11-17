# 🎫 Railway Ticket Reservation System

A modern and interactive Python-based railway ticket booking system with smart search, seat filters, digital tickets, and MySQL database support.

---

## 🚀 Features

### ✅ Modern UI

* Clean & responsive interface
* Easy navigation and booking flow

### 🔍 Smart Train Search

* Search by **Source** and **Destination**
* Auto-suggestions
* Filters: **1A, 2A, 3A, 3E, SL**
* Sort by fare, name, or time

### 💺 Seat Booking System

* Live seat availability
* Auto fare calculation
* Generates unique **PNR**

### 🎟 Digital Ticket

* Automatic **QR Code generation**
* Ticket preview
* Save Ticket (PNG / PDF)

### 🗄 Database Integration

* MySQL backend
* Saves all bookings
* "My Bookings" page to view history

### 🛠 Developer Friendly

* Easy to modify
* Clean folder structure

---

## 🖼 Screenshots

(Add images inside `/screenshots/` folder)

```
<img width="1887" height="883" alt="Screenshot 2025-11-17 222057" src="https://github.com/user-attachments/assets/d32d9097-17de-498f-a4d0-bea78507f44f" />

"C:\Users\rohit\OneDrive\Pictures\Screenshots\Screenshot 2025-11-17 222057.png"
/screenshots/search.png
/screenshots/booking.png
/screenshots/ticket.png
```

---

## 🧰 Tech Stack

| Part            | Technology             |
| --------------- | ---------------------- |
| Backend         | Python                 |
| UI              | Tkinter / Custom       |
| Database        | MySQL                  |
| QR Code         | Python `qrcode` module |
| Images          | Pillow (PIL)           |
| Version Control | Git & GitHub           |

---

## 📁 Folder Structure

```
Railway-Reservation-System/
│
├── main.py
├── database/
│   ├── connect.py
│   ├── trains.sql
│
├── assets/
│   ├── icons/
│   ├── logo.png
│
├── tickets/
│   ├── ticket_XXXX.png
│
├── utils/
│   ├── qr_generator.py
│   ├── pnr_generator.py
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repo

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

---

### 2️⃣ Install Modules

```
pip install -r requirements.txt
```

If missing:

```
pip install qrcode mysql-connector-python pillow
```

---

### 3️⃣ Setup MySQL

```
CREATE DATABASE rail_reserve;
USE rail_reserve;
SOURCE trains.sql;
```

Edit DB config in:

```
database/connect.py
```

---

### 4️⃣ Run the App

```
python main.py
```

---

## 🧪 Future Improvements

* User login system
* Online payment integration
* Live train status
* Mobile responsive web version
* Admin dashboard

---

## 🤝 Contributing

Feel free to open issues or pull requests.

---

---

## ⭐ Support

If you found this useful, please **star the repo ⭐**!

---
