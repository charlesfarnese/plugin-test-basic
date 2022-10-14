'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false, data: 'no data' };
  }

  componentDidMount() {
    window.Front.on("conversation", (data) => {
      console.log("Event data --> ", data);
      this.setState({data: data});
    });
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'div',
      { onClick: () => this.setState({ liked: true }) },
      this.state.data
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));