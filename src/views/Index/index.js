import React from 'react'
import './home.scss'
import Title from 'antd/lib/skeleton/Title'
import Index from "./components/index"


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guides: [
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'}
            ],
            travel:[
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
            ]
        }
    }

    componentWillMount(){
        console.log('在渲染前----fetch data会执行两次，一次在服务器端一次在客户端')
    }

    componentDidMount(){
        console.log('第一次渲染之后 函数中发送ajax请求，拿到数据，通过setState()保存在state中')
    }

    componentWillReceiveProps(){
        console.log('接受到一个新的prop')
    }

    view(index){
        console.log('On click view' + index )
    }

    render() {
        return (
            <div className='main'>
                <div className='header'>
                    <div className="header-layer">
                        <div className='welcome'>
                            <div className='logo'>
                                LOGO 
                            </div>
                        </div>
                        <div className="banner">
                        <div className="nav">
                            <div className="item">首页</div>
                            <div className="item">攻略</div>
                            <div className="item">故事</div>
                            <div className="item">结伴</div>
                            <div className="item">酒店</div>
            
                            <div className="item private">私人规划</div>
                            <div className="item-btn">登入</div>
                            <div className="item-btn active">注册</div>
                        </div>
                        {/* <div className="search">搜索</div> */}
                    </div>
                    </div>
                    <div className="header-body">
                        <div className="travel-title">
                            我们一起去旅行菲律宾
                        </div>
                        <div className="travel-sub">
                            这是你需要决定的菲律宾旅行信息，如果它适合你，让它更有趣、愉快、安全。
                        </div>
                        <div className="start">
                            开始
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="hot">
                        <div className='raiders'>
                            热门旅游攻略
                        </div>
                        <div className='sub'>
                            HOT TRAVEL GUIDES
                        </div>
                        <div className="line"></div>
                        <div className='hot-map'>
                            {
                                this.state.guides.map( (item, index) => {
                                    return (
                                    <div className='item' key={index} >
                                        <div className="img">
                                            <img src={require("./images/" + item.pic)} />
                                        </div>
                                        <div className="title">
                                            标题
                                        </div>
                                        <div className="main">
                                            内容内容~~~~~
                                        </div>
                                        <div className="view" onClick={this.view.bind(index)}>
                                            去看看
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                    <div className="hot">
                        <div className='raiders'>
                            热门民宿推荐
                        </div>
                        <div className='sub'>
                            POPULAR HOMESTAY RECOMMENDATION
                        </div>
                        <div className="line"></div>
                        <div className="hot-border">
                            <div className="hot-source">
                                <div className="img">
                                    <img src={require("./images/item-1.png")} />
                                </div>
                                <div className="brief">
                                    <div className="title">这里是标题</div>
                                    <div className="main">
                                        这里是内容简介，这里是内容简介，这里是内容简介，
                                        这里是内容简介，这里是内容简介，这里是内容简介，
                                        这里是内容简介，这里是内容简介，这里是内容简介，
                                    </div>
                                </div>
                            </div>
                            <div className="hot-source">
                                <div className="brief">
                                    <div className="title">这里是标题</div>
                                    <div className="main">
                                        这里是内容简介，这里是内容简介，这里是内容简介，
                                        这里是内容简介，这里是内容简介，这里是内容简介，
                                        这里是内容简介，这里是内容简介，这里是内容简介，
                                    </div>
                                    <div className="subscribe">
                                        立即订阅
                                    </div>
                                </div>
                                <div className="img">
                                    <img src={require("./images/item-2.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hot">
                        <div className='raiders'>
                            精品一日游推荐
                        </div>
                        <div className='sub'>
                            HOT TRAVEL GUIDES
                        </div>
                        <div className="line"></div>
                        <div className='hot-travel-map'>
                            {
                                this.state.travel.map( (item, index) => {
                                    return (
                                    <div className='item' key={index} >
                                        <div className="img">
                                            <img src={require("./images/" + item.pic)} />
                                        </div>
                                        <div className="title">
                                            标题
                                        </div>
                                        <div className="view">
                                            去看看
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Index/>
            </div>
        )
    }
}

export default Home
