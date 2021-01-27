import React from 'react'
import ReactDom from 'react-dom'
// CSS
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81NI6sqvvkL._AC_UL320_.jpg',
    title: 'A Promised Land',
    author: 'por Barack Obama y Random House',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/813ky1sbK7L._AC_UL320_.jpg',
    title: 'Squeeze Me: A novel',
    author: 'por Carl Hiaasen',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/815LEcMJsaL._AC_UL320_.jpg',
    title: 'Sold on a Monday: A Novel',
    author: 'por Kristina McMorris',
  },
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}
const Book = (props) => {
  const { img, title, author } = props

  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('Hello world')
  }

  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt={title} />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        Complex Example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
