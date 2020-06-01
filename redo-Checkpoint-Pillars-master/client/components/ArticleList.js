import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Today's Articles:</h1>
        {
            this.state.articles.map((ele)=> {
                return < Article fullArticle={ele} key={ele.id} />
            })
        }
      </div>
    );
  }
}

export default ArticleList;
