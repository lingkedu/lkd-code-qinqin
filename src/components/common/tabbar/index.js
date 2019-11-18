import React from 'react'
import './index.scss'


import {NavLink} from 'react-router-dom'

const TabBar = props => {
    const navs = [
        {
            id: 1,
            iconName: 'fa-home',
            path: '/home',
            text: "首页"
        },
        {
            id: 2,
            iconName: 'fa-hand-peace',
            path: '/recommend',
            text: '推荐',
        },
        {
            id: 3,
            iconName: 'fa-gifts',
            path: '/category',
            text: '分类',
        },
        {
            id: 4,
            iconName: 'fa-shopping-cart',
            path: '/shopcar',
            text: '购物车',
        },
        {
            id: 5,
            iconName: 'fa-user-secret',
            path: '/mine',
            text: '我的'
        }
    ]

    function renderNav() {
        return navs.map(item => {
            return <li key={item.id}>
                     <NavLink
                     to={item.path}
                     activeClassName='active'>
                      <i className={'fas ' + item.iconName}></i>
                      <span> {item.text}</span>
                    </NavLink>
                  </li>
        })
    }

    return (
        <footer>
            <ul>
                {renderNav()}
            </ul>
        </footer>
    )
}


export default TabBar