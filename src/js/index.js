import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.less';
import List from '../components/list/List.jsx';

let app = document.getElementById('app');
let list = [
    { img: 'src/img/person1.jpg',
      title: "大家好，我叫周谣红！"  
    },
    { img: 'src/img/person2.jpg',
      title:"大家好，我叫郭富城！"
    },
    { img: 'src/img/person3.jpg',
      title: "大家好，this is 李亚男。"
    },
    { img: 'src/img/person4.jpg',
      title: "大家好，我叫郭美美！"
    }
];
ReactDOM.render(
    <div>
        <List list={list} />
    </div>, app);
