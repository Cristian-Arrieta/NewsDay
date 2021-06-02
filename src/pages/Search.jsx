import React from 'react'

//Components
import SearchList from '../components/SearchList';

const Home = ({news,text}) =>(
    <React.Fragment>        
        <SearchList
            text={text}
            news={news.articles}
        />
    </React.Fragment>
)
export default Home;