'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {data: null};
//   }

//   componentDidMount() {
//     window.Front.on("conversation", (data) => {
//       console.log("Event data --> ", data);
//       this.setState({data: data});
//     });
//   }

//   render() {
//     return e(
//       'div',
//       {},
//       'test'
//     );

//   }
// }

class RootComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  componentDidMount() {
    window.Front.on("conversation", (data) => {
      console.log("Event data --> ", data);
      this.setState({data: data});
    });
  }

  render(){
      return (<div>
          <MyComponent />
      </div>);
  }
}

class MyComponent extends React.Component {
  render(){
      return (<div>This is a simple component</div>);
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render( React.createElement(RootComponent), domContainer );

// const domContainer = document.querySelector('#app');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(LikeButton));