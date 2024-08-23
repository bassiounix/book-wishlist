import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Search from "./pages/Search.tsx";
import Create from "./pages/Create.tsx";
import Edit from "./pages/Edit.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/create">Create</Link>
          </nav>
          <h1>Book Wishlist</h1>
          <p>Simple full stack app for personal books wishlist</p>
        </header>
        <main>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id/edit" element={<Edit />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
