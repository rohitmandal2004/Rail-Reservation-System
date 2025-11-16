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
