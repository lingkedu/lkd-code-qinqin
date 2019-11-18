import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import qs from 'querystring' 
export default class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        list:[]
    }
  }
  
componentDidMount(){
  const { search } = this.props.location
  const {cid} = qs.parse(search.slice(1))
  console.log(cid)
  axios({
    url:'index.php',
    params:{
      r: 'class/cyajaxsub',
      page: 1,
      cid,
      px:'t',
      cac_id:'', 
    }
  }).then(res=>{
    console.log(res.data.data.content)
    this.setState({
       list:res.data.data.content       
    })
  })
}  
  render() {
    return (
      <div className='container'>
         列表
      </div>
    )
  }
}
