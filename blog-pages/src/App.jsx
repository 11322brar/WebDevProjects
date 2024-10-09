import { useContext, useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { AppContext } from "./components/AppContext";

import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import PageControl from "./components/PageControl";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tag/:tag" element={<TagPage/>}/>
        <Route path="/blog/:blog" element={<BlogPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <PageControl />
    </div>
  );
}
