import React from 'react'
import "./SearchComponent.css";
import SearchUserCard from './SearchUserCard';

export default function SearchComponent() {
  return (
    <div className="searchContainer">
        <div className='px-3 pb-5'>
            <h1>Search</h1>
            <input className='searchInput' type='text' placeholder='Search...' />
        </div>

        <hr />

        <div className='px-3 pt-5'>
            {[1,1,1,1].map((item) => <SearchUserCard />)}
        </div>
    </div>
  )
}
