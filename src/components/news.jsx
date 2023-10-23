import React, { useState, useEffect } from 'react'
import Newsitem from './newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


//               ----------------FUNCTION BASED-------------------


export default function News(props) {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalresults, settotalresults] = useState(0)

  document.title = `Newsmonkey - ${props.category}`;


  const updateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page}`
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setarticles(parsedData.articles);
    setloading(false);
    settotalresults(parsedData.totalResults);
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews(); 
    //esilent-disable-next-line
  }, [])
  

  const fetchData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page+1}`
    setpage(page +1)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    settotalresults(parsedData.totalResults)
    setarticles(articles.concat(parsedData.articles))
    setloading(false)
  }

  const handleNextClick = async () => {
    setpage(page +1)
    updateNews()
  }

  const handlePrevClick = async () => {
    setpage(page -1)
    updateNews()
  }

    return (
      <>

        <h1 className='text-center'>Newsmonkey - top headlines</h1>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}  //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalresults }
          loader={<Spinner/>}
        >

        <div className="container">

        <div className="row">
          {articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/99d73c3cd0e6210f1f89068818769492.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>

          })}
        </div>
        </div>

        </InfiniteScroll>


        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} class="btn btn-dark">&larr; Previous</button>
        <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.handleNextClick} class="btn btn-dark">Next &rarr;</button>
        </div> */}

      </>
    )
}

News.defaultProps = {
  category: "entertainment",
  pagesize: 6
}

News.propTypes = {
  category: PropTypes.string,
  pagesize: PropTypes.number
}


//                  ----------------CLASS BASED--------------


// import React, { Component } from 'react'
// import Newsitem from './newsitem'
// import Spinner from './spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component'


// export default class News extends Component {

//   static defaultProps = {
//     category: "entertainment",
//     pagesize: 6
//   }

//   static propTypes = {
//     category: PropTypes.string,
//     pagesize: PropTypes.number
//   }


//   constructor(props) {
//     super(props);
//     console.log("this is news constructor")
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1
//     }
//     document.title = `Newsmonkey - ${this.props.category}`;
//   }

//   async updateNews() {
//     this.props.setProgress(10)
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`
//     // this.setState({ loading: true })
//     let data = await fetch(url)
//     this.props.setProgress(30)
//     let parsedData = await data.json()
//     this.props.setProgress(70)
//     console.log(parsedData)
//     this.setState({
//       totalResults: parsedData.totalResults,
//       articles: parsedData.articles,
//       loading: false
//     })
//     this.props.setProgress(100)
//   }

//   async componentDidMount() {
//     this.updateNews()
//   }

//   fetchData = async() => {
//     this.setState({
//       page : this.state.page + 1,
//     })
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=${this.state.page}`
//     let data = await fetch(url)
//     let parsedData = await data.json()
//     console.log(parsedData)
//     this.setState({
//       totalResults: parsedData.totalResults,
//       articles: this.state.articles.concat(parsedData.articles),
//       loading: false
//     })
//   }

//   handleNextClick = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     })
//     this.updateNews()
//   }

//   handlePrevClick = async () => {
//     this.setState({
//       page: this.state.page - 1,
//     })
//     this.updateNews()
//   }

//   render() {
//     return (
//       <>

//         <h1 className='text-center'>Newsmonkey - top headlines</h1>

//         {this.state.loading && <Spinner />}

//         <InfiniteScroll
//           dataLength={this.state.articles.length} //This is important field to render the next data
//           next={this.fetchData}
//           hasMore={this.state.articles.length !== this.state.totalResults }
//           loader={<Spinner/>}
//         >

//         <div className="container">

//         <div className="row">
//           {this.state.articles.map((element) => {

//             return <div className="col-md-4" key={element.url}>
//               <Newsitem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_1315/99d73c3cd0e6210f1f89068818769492.jpg"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//             </div>

//           })}
//         </div>
//         </div>

//         </InfiniteScroll>


        //  <div className="container d-flex justify-content-between">
        // <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} class="btn btn-dark">&larr; Previous</button>
        // <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.handleNextClick} class="btn btn-dark">Next &rarr;</button>
        // </div> 

//       </>
//     )
//   }
// }
