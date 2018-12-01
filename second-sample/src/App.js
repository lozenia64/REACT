import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = '상수입니다';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    return (
      // className을 부여하여 css파일에서 통째로 처리.
      <div className="my-div">
        <h1>리액트</h1>
        { /* 중괄호를 사용하여 자바스크립트 표현식 사용 가능 */ }
        <h2>{text}</h2>
        { /* && 연산을 사용하면 condition이 true일 때만 ' '안의 문구가 나타난다. */ }
        { condition && 'condition이 true인 경우에만 보입니다.' }
        { /* CSS 스타일도 중괄호를 사용하여 자바스크립트 표현식으로 사용해야 한다. */ }
        <div style={style} />
      </div>
    );
  }
}

export default App;

