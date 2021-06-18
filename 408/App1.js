import React from 'react';

class formatDate extends React.Component {
  constructor(date) {
    super(date)
    this.state = {date: new Date()};
  }
  render() {
    return this.state.date.toLocaleDateString();
  }
}

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.props = Avatar;
  }
  render() {
    return (
      <img
        className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name}
      />
    );
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.props = UserInfo;
  }
  render() {
    return (
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">{this.props.user.name}</div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = App;
  }
  render() {
    return (
      <div className="Comment">
        <UserInfo user={this.props.author} />
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">
          {this.props.date.toLocaleDateString}
        </div>
      </div>
    );
  }
}

export default App;