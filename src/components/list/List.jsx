import React from 'react';
import './list.less';

class List extends React.Component {
    constructor(props) {
        super(props);
        const list = this.props.list || {};
        if (list.length) {
            list.map((v, i) => {
                v.keyIndex = `index${i}`;
                v.left = 0;
                return false
            });
        }
        this.state = {
            list: list,
            startX: 0,
            endX: 0,
            left: 0
        };
        this.listLeftStart = this.listLeftStart.bind(this);
        this.listLeftMove = this.listLeftMove.bind(this);
        this.listLeftEnd = this.listLeftEnd.bind(this);
    }
    // componentWillReceiveProps(nextProp) {
    //     if(nextProp.list && nextProp.list.length){
    //         nextProp.list.map((d,i) => {
    //             d.keyIndex = `index${i}`;
    //             d.left = 0;
    //         });
    //     }
    //     this.setState({list:NextProp.list});
    // }

    listLeftStart(e) {
        let clientX = e.touches[0].clientX;
        let clientY = e.touches[0].clientY;
        this.setState({
            startX: clientX,
            endX: clientX
        });
        if (this.state.left === -80) {
            this.setState({ left: 0 });
        }

    }
    listLeftMove(e) {
        let list = this.state.list;
        let moveX = e.touches[0].clientX;
        let startX = this.state.startX;
        let id = e.currentTarget.id;
        if (startX - moveX > 0) {
          list.map((d,i) => {
            if(d.keyIndex === id){
                d.left = -80;
            }else{
                d.left = 0;
            }
          });
          this.setState({
            list:list
        });

        }

    }
    listLeftEnd(e) {
        this.setState({
            // endX:clientX
        });
    }
    render() {
        let l = this.state.list;
        let listHtml = l.map((value, index) => {
            return (
                <li key={index}>
                    <div className="list-wrap" id={value.keyIndex} style={{ left: value.left }} onTouchStart={this.listLeftStart} onTouchMove={this.listLeftMove} onTouchEnd={this.listLeftEnd} >
                        <span className="list-person"><img src={value.img} /></span>
                        <span className="list-title">{value.title}</span>
                    </div>
                    <div className="list-behind">
                        <a href="javascript:;"><span>删除</span></a>
                    </div>
                </li>
            );
        });
        return (
            <div className="list">
                <ul>
                    {listHtml}
                </ul>
            </div>);
    }
}


export default List;