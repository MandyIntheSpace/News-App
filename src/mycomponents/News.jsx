import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import './Navbar.css';
import Nn from './Nn';
import Dropdown from './Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import App from '../App';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [updateTitle, setUpdateTitle] = useState(`${document.title = props.category}`)

  async function fetchArticles(pageNumber) {
    props.updateProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    const response = await fetch(url);
    props.updateProgress(40)
    const data = await response.json();
    props.updateProgress(70)
    console.log(data);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  }
  props.updateProgress(100)

  useEffect(() => {
    console.log('This will open after the render');
    fetchArticles(page);
  }, [page]);

  //height of the while page
  const handleScrollAction = async () => {
    try {
      console.log("Scrollheight" + document.documentElement.scrollHeight)
      console.log("Innerheight" + window.innerHeight)//veiwable area of the screen
      console.log("Scrolltop" + document.documentElement.scrollTop)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollAction)
  }, [])

  function handlePreviousClick() {
    if (page > 1) {
      setPage(page - 1);
    }
    fetchArticles();

  }

  function handleNextClick() {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
    }
    fetchArticles();

  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setLoading(false);
  }

  return (
    <>
      <h4 className='nhead text-center'>NewsMonkey - Top Headlines on {capitalizeFirstLetter(updateTitle)}</h4>
      <Dropdown/>
      {/* {loading && <Nn />} */}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Nn />}>
        <div className="container">
          <div className='row'>
            {
              articles.map((elements) => {
                return (
                  <div className='col-md-4 my-4' key={elements.url}>
                    <NewsItem
                      title={elements.title ? elements.title.slice(0, 62) : ''}
                      description={
                        elements.description
                          ? elements.description.slice(0, 60)
                          : ''
                      }
                      imageURL={elements.urlToImage}
                      newsURL={elements.url}
                      author={elements.author}
                      date={elements.publishedAt}
                      source={elements.source.name}
                    />
                  </div>
                );
              })}

          </div>
        </div>
      </InfiniteScroll>
      <div className='container d-flex justify-content-between'>
        <button
          disabled={page <= 1}
          type='button'
          className='btn btn-dark'
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>
        <button
          type='button'
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className='btn btn-dark'
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}

export default News;