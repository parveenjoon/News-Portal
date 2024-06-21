import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles, setCurrentPage } from '../redux/articlesSlice';
import Article from './Article';
import Pagination from './Pagination';
import CategoryFilter from './CategoryFilter';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const currentPage = useSelector((state) => state.articles.currentPage);
  const articlesPerPage = useSelector((state) => state.articles.articlesPerPage);
  const totalArticles = useSelector((state) => state.articles.totalArticles);
  const loading = useSelector((state) => state.articles.loading);
  const error = useSelector((state) => state.articles.error);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handlePaginationClick = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(fetchArticles());
  };

  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <CategoryFilter />
      <div className="articles">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePaginationClick}
      />
    </div>
  );
};

export default ArticleList;
