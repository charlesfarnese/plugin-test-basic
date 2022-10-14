'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.conversation_id}</div>
    );
  }
}

class LegacyPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null, conversation_id: 'unknown'};
  }

  componentDidMount() {
    window.Front.on("conversation", (data) => {
      console.log("Event data --> ", data);
      this.setState({data: data, conversation_id: data.conversation.id});
    });
  }

  render() {
    return(
      <App conversation_id={this.state.conversation_id}/>
    )
  }
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LegacyPlugin));