# ------------------------------
# RAILWAY RESERVATION SIMULATION
# ------------------------------

# Train database (dummy)
trains = [
    {
        "train_no": 12001,
        "name": "Rajdhani Express",
        "from": "Kolkata",
        "to": "Delhi",
        "classes": {
            "1A": 4500,
            "2A": 3000,
            "3A": 2200,
            "3E": 1800,
            "SL": 600
        }
    },
    {
        "train_no": 12223,
        "name": "Shatabdi Express",
        "from": "Kolkata",
        "to": "Patna",
        "classes": {
            "1A": 3200,
            "2A": 2000,
            "3A": 1500,
            "3E": 1100,
            "SL": 450
        }
    },
    {
        "train_no": 13005,
        "name": "Amritsar Mail",
        "from": "Howrah",
        "to": "Amritsar",
        "classes": {
            "1A": 4000,
            "2A": 2600,
            "3A": 1900,
            "3E": 1500,
            "SL": 550
        }
    }
    ,
    {
        "train_no": 24001,
        "name": "Kolkata - Bhubaneswar Express",
        "from": "Kolkata",
        "to": "Bhubaneswar",
        "classes": { "1A": 3200, "2A": 2100, "3A": 1600, "3E": 1200, "SL": 500 }
    },
    {
        "train_no": 24002,
        "name": "Chennai - Coimbatore Intercity",
        "from": "Chennai",
        "to": "Coimbatore",
        "classes": { "1A": 2200, "2A": 1600, "3A": 1200, "3E": 900, "SL": 350 }
    },
    {
        "train_no": 24003,
        "name": "Kochi - Trivandrum Express",
        "from": "Kochi",
        "to": "Trivandrum",
        "classes": { "1A": 3000, "2A": 2000, "3A": 1500, "3E": 1100, "SL": 420 }
    },
    {
        "train_no": 24004,
        "name": "Ahmedabad - Surat Fast",
        "from": "Ahmedabad",
        "to": "Surat",
        "classes": { "1A": 900, "2A": 700, "3A": 550, "3E": 400, "SL": 200 }
    },
    {
        "train_no": 24005,
        "name": "Varanasi - Lucknow Express",
        "from": "Varanasi",
        "to": "Lucknow",
        "classes": { "1A": 1800, "2A": 1200, "3A": 900, "3E": 700, "SL": 300 }
    },
    {
        "train_no": 24006,
        "name": "Bhopal - Indore Fast",
        "from": "Bhopal",
        "to": "Indore",
        "classes": { "1A": 1300, "2A": 900, "3A": 700, "3E": 550, "SL": 250 }
    },
    {
        "train_no": 24007,
        "name": "Patna - Ranchi Express",
        "from": "Patna",
        "to": "Ranchi",
        "classes": { "1A": 2100, "2A": 1500, "3A": 1100, "3E": 850, "SL": 380 }
    },
    {
        "train_no": 24008,
        "name": "Mumbai - Pune Shatabdi",
        "from": "Mumbai",
        "to": "Pune",
        "classes": { "1A": 1200, "2A": 800, "3A": 600, "3E": 0, "SL": 0 }
    },
    {
        "train_no": 24009,
        "name": "Agra - Mathura Express",
        "from": "Agra",
        "to": "Mathura",
        "classes": { "1A": 400, "2A": 300, "3A": 220, "3E": 0, "SL": 80 }
    },
    {
        "train_no": 24010,
        "name": "Guwahati - Shillong Express",
        "from": "Guwahati",
        "to": "Shillong",
        "classes": { "1A": 2500, "2A": 1700, "3A": 1200, "3E": 900, "SL": 420 }
    }
]


# Show all trains
def show_trains():
    print("\n--- Available Trains ---")
    for t in trains:
        print(f"{t['train_no']} - {t['name']} | {t['from']} → {t['to']}")
    print("-------------------------\n")


# Search train by route
def search_train():
    src = input("Enter Source Station: ").title()
    dst = input("Enter Destination Station: ").title()

    print("\nSearching for trains...\n")
    found = False

    for t in trains:
        if t["from"] == src and t["to"] == dst:
            print(f"Train Found: {t['train_no']} - {t['name']}")
            print("Available Classes & Prices:")
            for c, p in t["classes"].items():
                print(f"{c} : ₹{p}")
            print()
            found = True
            return t

    if not found:
        print("❌ No train found for this route.\n")
        return None


# Book a ticket
def book_ticket():
    print("\n--- Ticket Booking ---")

    train = search_train()
    if train is None:
        return

    name = input("Enter Passenger Name: ")
    age = input("Enter Age: ")

    print("Choose Class (1A / 2A / 3A / 3E / SL): ")
    seat = input("Enter Seat Class: ").upper()

    if seat not in train["classes"]:
        print("❌ Invalid Class Selected!")
        return

    price = train["classes"][seat]

    print("\n--- Booking Successful! ---")
    print(f"Passenger Name : {name}")
    print(f"Train          : {train['name']} ({train['train_no']})")
    print(f"Route          : {train['from']} → {train['to']}")
    print(f"Class          : {seat}")
    print(f"Ticket Price   : ₹{price}")
    print("-----------------------------\n")


# Main menu loop
def main():
    while True:
        print("===== Railway Reservation Simulation =====")
        print("1. Show All Trains")
        print("2. Search Train")
        print("3. Book Ticket")
        print("4. Exit")

        choice = input("Enter choice: ")

        if choice == "1":
            show_trains()
        elif choice == "2":
            search_train()
        elif choice == "3":
            book_ticket()
        elif choice == "4":
            print("Thank you for using Railway Reservation System!")
            break
        else:
            print("Invalid choice! Try again.\n")


# Run program
main()
