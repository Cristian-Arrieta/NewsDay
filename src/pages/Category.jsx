import React from 'react'

//Components
import NewsList from '../components/NewsList'
import SubHeader from '../components/SubHeader'

const Category = ({news,title}) =>(

    <React.Fragment>

        <SubHeader
            title={title}
        />

        <NewsList
            news={news.articles}
        />
    </React.Fragment>

)

export default Category