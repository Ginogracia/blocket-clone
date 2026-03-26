# Blocket Clone

En förenklad Blocket-liknande webbapplikation byggd som examensarbete. Användare kan registrera konto, logga in och lägga upp annonser för varor till salu.

---

## Tekniker

**Frontend**
- React (JSX) med Vite
- React Router DOM
- Axios
- SCSS

**Backend**
- Node.js
- Express
- MongoDB med Mongoose
- JWT för autentisering
- Multer för bilduppladdning

**Verktyg**
- Git & GitHub
- Trello
- MongoDB Atlas

---

## Kom igång

### Krav
- Node.js (LTS)
- npm
- Ett MongoDB Atlas-konto (eller använda variablerna jag skickade i discord)

### Installation

1. Klona repot
```bash
git clone https://github.com/DITT-ANVÄNDARNAMN/blocket-clone.git
cd blocket-clone
```

2. Installera beroenden för backend
```bash
cd backend
npm install
```

3. Installera beroenden för frontend
```bash
cd ../frontend
npm install
```

4. Skapa en `.env`-fil i `backend/`
```
PORT=5000
MONGO_URI=mongodb+srv://ANVÄNDARNAMN:LÖSENORD@cluster0.xxxxx.mongodb.net/?appName=Cluster0
JWT_SECRET=dinhemliganyckelhär
```

5. Starta backend
```bash
cd backend
npm run dev
```

6. Starta frontend (i ett nytt terminalfönster)
```bash
cd frontend
npm run dev
```

Frontend körs på `http://localhost:5173` och backend på `http://localhost:5000`.

---

## API-dokumentation

### Auth

| Method | Endpoint | Skyddad | Beskrivning |
|--------|----------|---------|-------------|
| POST | `/api/auth/register` | Nej | Registrera nytt konto |
| POST | `/api/auth/login` | Nej | Logga in |

**Register — request body**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Login — request body**
```json
{
  "email": "string",
  "password": "string"
}
```

---

### Listings

| Method | Endpoint | Skyddad | Beskrivning |
|--------|----------|---------|-------------|
| GET | `/api/listings` | Nej | Hämta alla annonser |
| GET | `/api/listings/:id` | Nej | Hämta en annons |
| POST | `/api/listings` | Ja | Skapa annons |
| PUT | `/api/listings/:id` | Ja | Uppdatera annons |
| DELETE | `/api/listings/:id` | Ja | Ta bort annons |

**Query-parametrar för GET `/api/listings`**

| Parameter | Typ | Beskrivning |
|-----------|-----|-------------|
| `search` | string | Sök på titel |
| `category` | string | Filtrera på kategori |
| `minPrice` | number | Minsta pris |
| `maxPrice` | number | Högsta pris |

**Skyddade endpoints** kräver header:
```
Authorization: Bearer DIN_TOKEN
```

---

## Projektstruktur

```
blocket-clone/
├── backend/
│   └── src/
│       ├── config/        # Databasanslutning
│       ├── controllers/   # Route-logik
│       ├── middleware/     # JWT-verifiering
│       ├── models/        # Mongoose-modeller
│       ├── routes/        # API-rutter
│       └── uploads/       # Uppladdade bilder
└── frontend/
    └── src/
        ├── components/    # Återanvändbara komponenter
        ├── context/       # AuthContext
        ├── hooks/         # Axios-instans
        ├── pages/         # Sidor
        └── styles/        # SCSS
```

---

## MVP — Kravspecifikation

- ✅ Registrera konto och logga in
- ✅ Autentisering via JWT
- ✅ Skapa annonser med titel, beskrivning, pris och bild
- ✅ Lista alla annonser
- ✅ Söka och filtrera annonser
- ✅ Inspektera en annons i detalj
- ✅ REST API byggt med Express

---

## Länkar

- [Trello](https://trello.com/invite/b/69bfed5bc3917623e78c6f6b/ATTI294f4d4f0fd6968895b40dc7e2888dcb5AD6126A/blocket-clone)
- [PM (Google Docs)](https://docs.google.com/document/d/1hIFcBG0bDHEgoEN6JEgk3rJeQy4mW45ng5R7AF-vgQI/edit?usp=sharing)

---

## Författare

**Gino Gracia Baumkircher** — JS24 Distans, Folkuniversitetet
