import React from 'react'
import './home.scss'
import Title from 'antd/lib/skeleton/Title';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guides: [
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'}
            ]
        }
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
                
            </div>
        )
    }
}

export default Home
