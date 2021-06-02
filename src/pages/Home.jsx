import React from 'react'

//Components
import NewsList from '../components/NewsList'
import SubHeader from '../components/SubHeader'

const Home = ({news}) =>(
    <React.Fragment>
        <SubHeader
            title="News Day"
        />
        <NewsList
            news={news.articles}
        />
    </React.Fragment>
)
export default Home;