# 📇 Contact Manager App (React + Flask)

A fullstack contact management application built with **React** (frontend) and **Flask** (backend). It allows users to create, view, update, and delete contacts in a clean, responsive UI with modal interactions and toast notifications.

---

## 🚀 Features

- ✅ Create new contacts via a modal form
- ✅ View contact list in a styled table
- ✅ Update contact details with pre-filled forms
- ✅ Delete contacts with instant UI refresh
- ✅ Toast notifications for success/error feedback
- ✅ Responsive design for mobile and desktop
- ✅ Icon-enhanced buttons using `lucide-react`

---

## 🛠️ Tech Stack

| Frontend      | Backend     | Styling       | Icons         |
|---------------|-------------|---------------|---------------|
| React (Hooks) | Flask       | CSS3          | Lucide Icons  |
| Fetch API     | Flask-CORS  | Flexbox/Grid  |               |

---

## 📦 Project Structure


---

## 🧪 How to Run

### 📍 Backend (Flask)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py


cd frontend
npm install
npm start


| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| GET    | `/contacts`            | Fetch all contacts   |
| POST   | `/create_contact`      | Create a new contact |
| PATCH  | `/update_contact/<id>` | Update contact       |
| DELETE | `/delete_contact/<id>` | Delete contact       |


Author Neoibnqayyimrx
