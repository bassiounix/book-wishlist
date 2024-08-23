# Book Wishlist Website

Full stack CRUD app for personal books wishlist using a React frontend and a Django server.
Users are able to manage their book wishlist, add and delete books, edit an existing book, see all books in their wishlist, and search for a single book in the wishlist.

## Start Project

### Backend
install dependencies:
```shell
pip install Django djangorestframework django-cors-headers
```

run the server on default port (8000):
```shell
cd backend
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend

First install dependencies:
```shell
cd frontend
pnpm i
```

To start the dev server run (DevPort=5173, PreviewPort=4173):
```shell
pnpm dev # localhost:5173
```

## Server

### Server Routes

- `/admin`: default administration page
- `/api/books`: retrieve all books, or add a new book.
  - Allow `[GET, POST, HEAD, OPTION]`
- `/api/books/<id>`: manage book by id.
  - Allow `[GET, PUT, PATCH, DELETE, HEAD, OPTIONS]`
- `/api/books/<title>`: manage book by title.
  - Allow `[GET, PUT, PATCH, DELETE, HEAD, OPTIONS]`

### Server DB Model
```text
Table Book {
  id: auto generated pk not null,
  title: unique varchar(100) not null,
  author: varchar(50) not null,
  genre: varchar(20) not null,
  description: text not null
}
```

### Technologies

- Django
- rest framework
- CORS headers 

## Client

### Client Pages
- `/`: index page (Home)
- `/search`: search book page (Search)
- `/create`: create book page (Create)
- `/:id/edit`: edit single book page by id (Edit)

### Components

Reusable components found in `forntend/src/components`:
- `BookForm`: create and edit a book (depends on the context of router) with a simple state presentation on top and bottom.
- `BookItem`: displays a single book item, with options to edit and delete.
- `BookList`: a collection of BookItems.
- `DeleteButton`: custom delete button for deleting a book with id and simple state presentation.
- `SearchBar`: a component to search for a book by title.

### Technologies
- React
- React Router
- TanStack Query
- TypeScript
- Vite
- PNpm
- SimpleCSS

## Additional Thoughts

To level up this project we can introduce user auth and protected pages in both frontend and backend integrating with user system in Django and JWTs. However, for the time and the convenience of the project goal I stopped here.

## Repository

The project repository is available at <https://github.com/bassiounix/book-wishlist>

## 3-Tier AWS Architecutre Diagram

![3-tier AWS architecutre diagram](./3-tier%20AWS%20architecutre%20diagram.png)
