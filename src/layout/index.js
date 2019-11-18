import React, { Component } from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import Home from './../pages/home';
import Category from './../pages/category';
import Mine from './../pages/mine';
import ShopCar from './../pages/shopcar';
import Recommend from './../pages/recommend';
import Login from './../pages/login';
import Detail from './../pages/detail';
import List from './../pages/list';
import NotFound from './../pages/notfound';
class LayOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabFlag: false,
            title: {
                '/home': "零刻度-倩",
                '/recommend': '推荐',
                '/category': '分类',
                '/shopcar': '购物车',
                '/mine': "个人中心",
                '/home/hot':'零点热映',
                '/home/comming':'即将开幕'
            },
            arr: ['/recommend', '/category', '/shopcar', '/mine'],
            arrbar: ['/recommend', '/mine'],
            arrbarFlag: true,
        }
    }

// 第一次渲染
    componentDidMount() {
        this.changeTabFlag()
        this.changeTabBar()
        this.changehomeHot()
    }

// 更新渲染
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        this.changeTabFlag(nextProps)
        this.changeTabBar(nextProps)
        this.changehomeHot(nextProps)
    }


// 控制tab 返回箭头
    changeTabFlag = (nextProps) => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        const f = this.state.arr.some(item => item == pathname)
        if (f) {
            this.setState({
                tabFlag: true,
            })
        } else {
            this.setState({
                tabFlag: false,
            })
        }
    }


 //   控制 tabbar 随列表点击的显现与消失 
    changeTabBar = (nextProps) => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        const f = this.state.arrbar.some(item => item == pathname)
        if (f) {
            this.setState({
                tabbarFlag: false,
            })
        } else {
            this.setState({
                tabbarFlag: true,
            })
        }
    }

//  编程式导航
    changehomeHot = (nextProps) => {
         const {pathname} = nextProps && nextProps.location || this.props.location
         const {push,replace} = nextProps && nextProps.history ||this.props.history
         if(pathname=='/home'){
             push('/home/hot')
         }
    }


    render() {
        const { tabFlag, title, tabbarFlag } = this.state
        const { pathname } = this.props.location
        return (
            <div className='layout'>
                <Tab tabFlag={tabFlag} title={title[pathname]}  {...this.props} />
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/home" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/recommend" component={Recommend} />
                    <Route path="/shopcar" component={ShopCar} />
                    <Route path="/login" component={Login} />
                    <Route path="/list" component={List} />
                    <Route path="/detail" component={Detail} />
                    <Route component={NotFound} />
                </Switch>
                {tabbarFlag && <TabBar />}
            </div>
        )
    }
}
export default withRouter(LayOut)