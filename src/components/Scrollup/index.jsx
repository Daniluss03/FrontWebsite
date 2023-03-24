import React, { Component } from 'react';

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  }

  handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div>
        {this.state.isVisible &&
          <button className='buttonplans' onClick={this.handleClick}>^</button>
        }
      </div>
    );
  }
}

export default ScrollButton;
