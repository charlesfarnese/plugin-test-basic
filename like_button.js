'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 'no data'};
  }

  componentDidMount() {
    window.Front.on("conversation", (data) => {
      console.log("Event data --> ", data);
      this.setState({data: data});
    });
  }

  render() {
    return e(
      'div',
      {},
      this.state.data.conversation.id
    );
    
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));