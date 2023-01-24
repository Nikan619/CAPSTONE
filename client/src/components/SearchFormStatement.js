import React,{useContext} from 'react'
import { Context } from '../store/auth-context.js'



export default function SearchFormStatement() {
  const { setQuery } = useContext(Context)
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchStatement() {
    setQuery(searchValue.currentValue)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your desired statement</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchStatement}
          />
        </div>
      </form>
    </section>
  )
}