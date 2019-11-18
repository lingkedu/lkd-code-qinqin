import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const renderList = (list) => {
    return list.map(item => (
        <li key={item.api_cid}>
            <Link 
            to={{
                pathname:`/list`,
                search:`cid=${ item.api_cid }`
            }}>
                <img src={item.img}></img>
                <span>{item.name}</span>
            </Link>
        </li>
    ))
}


const Content = props => {
    return (
        <Fragment>
            <div className="floor">
                <h3 style={{ margin: 0 }}> {props.name} </h3>
                <ul>
                    {renderList(props.list)}
                </ul>
            </div>
        </Fragment>
    )
}

export default Content