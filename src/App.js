import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PostDetail from "./components/PostDetail";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import UpdatePost from "./components/UpdatePost";
import UpdateNewsPost from "./components/news/UpdateNewsPost";
import UpdateOpportunityPost from "./components/opportunity/UpdateOpportunityPost";
import CreateNewsPost from "./components/news/CreateNewsPost";
import CreateOpportunityPost from "./components/opportunity/CreateOpportunityPost";
import PostNewsDetail from "./components/news/PostNewsDetail";
import PostOpportunityDetail from "./components/opportunity/PostOpportunityDetail";

export default function App() {
  const [closedNav, setClosedNav] = useState(false);
  const toggleNav = () => {
    setClosedNav(!closedNav);
  };

  const getNavWidth = () => (closedNav ? "w-16" : "w-56");
  return (
    <div className="flex">
      <nav
        className={getNavWidth() + " min-h-screen border-r transition-width"}
      >
        <div className="sticky top-0">
          <Navbar closed={closedNav} />
        </div>
      </nav>
      <div className="flex-1 bg-gray-100">
        <div className="sticky top-0 bg-gray-100">
          <div className="flex items-center">
            <button
              onClick={toggleNav}
              className="text-right p-2 text-gray-700"
            >
              {closedNav ? (
                <AiOutlineMenuUnfold size={25} />
              ) : (
                <AiOutlineMenuFold size={25} />
              )}
            </button>
            <SearchForm />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Blog Posts */}

          <Route path="/blog/create-post" element={<CreatePost />} />
          <Route path="/blog/update-post/:slug" element={<UpdatePost />} />
          <Route path="/blog/view/:slug" element={<PostDetail />} />

          {/* Opportunity */}

          <Route
            path="/opportunity/create-post"
            element={<CreateOpportunityPost />}
          />
          <Route
            path="/opportunity/update-post/:slug"
            element={<UpdateOpportunityPost />}
          />
          <Route
            path="/opportunity/view/:slug"
            element={<PostOpportunityDetail />}
          />

          {/* News */}

          <Route path="/news/create-post" element={<CreateNewsPost />} />
          <Route path="/news/update-post/:slug" element={<UpdateNewsPost />} />
          <Route path="/news/view/:slug" element={<PostNewsDetail />} />

          <Route path="/search-results" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
