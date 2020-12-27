import React from "react";

// function component 는 return(스크린 표시) 이 있지만
// class는 React.Component로부터 확장되어서 스크린에 표시 

class App extends React.Component{
  // 다이나믹 데이터 (object)
  state = {
    count : 0
  };
  add = () => {
    this.setState(current => ({count : current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count : this.state.count -1}));
  };
  // 매순간 setState를 호출할때 마다 
  // 새로운 state와 함께 render function 호출 
  render(){
    return(
        <div>
            <h1>The number is : {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
      ) 
  }
}

export default App;
