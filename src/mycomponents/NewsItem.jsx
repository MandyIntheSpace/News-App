import React, { Component, useState } from 'react'
import './Navbar.css'

export class NewsItem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } = this.props
    return (
      <div>
        <div id='card-Element' className="card my-2" style={{ width: '15rem' }}>
          <img src={!imageURL ? "https://talksport.com/wp-content/uploads/sites/5/2023/02/ah-TALKSPORT-BLOG-klopp-guardiola-Bentancur.jpg?strip=all&quality=100&w=1500&h=1000&crop=1" : imageURL} />
          <div className="card-body">
            <h6 className="card-title">{title}   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span class="visually-hidden">unread messages</span></span></h6>
            <p id="APIP" className="card-text">{description}....</p>
            <p class="card-text"><small class="text-muted">By {!author ? "unknown" : author} on {!date ? "Notdefined date" : date}</small></p>
            <a href={newsURL} target='_blank' className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        {/* Next and Previous button from the bootstrap */}
      </div>
    )
  }
}

export default NewsItem
