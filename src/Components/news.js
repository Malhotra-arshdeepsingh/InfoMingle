import React, { Component } from 'react'
import NewsCard from "./newscard"
import PropTypes from 'prop-types'
import Spinner from './spinner'



export class news extends Component {
  static defaultProps = {
    category: 'general',
  }

  static propTypes = { 
    category: PropTypes.string,
  }

  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1      
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=562df8a080df42768c97370c81eeccc4&page=1&pageSize=20`;
    this.setState({loading: true});
    let data= await fetch(url)
    let parseddata= await data.json()
    this.setState({articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false})
  }
  
  handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=562df8a080df42768c97370c81eeccc4&page=${this.state.page - 1}&pageSize=20`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }

  handleNextClick = async ()=>{
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=562df8a080df42768c97370c81eeccc4&page=${this.state.page + 1}&pageSize=20`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json()  
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }    
  }
  render(){
    return (
      <>
      {this.state.loading && <Spinner/>}
      <div className='container my-5'>
      {!this.state.loading && this.state.articles.map((Element)=>{
      return <div className='m-3 d-inline-flex flex-xxl-row' key={Element.url}>
        <NewsCard title={Element.title} description={Element.description?Element.description.slice(0,157):""} imageUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name}/>                
      </div>
      })}
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1} type="button" class="btn btn-primary" onClick={this.handlePrevClick}>Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next</button>
      </div>
      </>
    )
  }
}
export default news