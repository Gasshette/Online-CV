import React from 'react';
import './styles.scss';

class Card extends React.Component {
  private cardRef = React.createRef<HTMLDivElement>();
  public state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    const componentNode = this.cardRef.current;

    if (componentNode) {
      const h3elements = componentNode.getElementsByTagName('h3');

      if (h3elements[1]) {
        this.setState({ ...this.state, title: h3elements[1].innerHTML }, () => h3elements[1].remove());
      }
    }
  }

  render() {
    return (
      <div className='card-component' ref={this.cardRef}>
        <h3>{this.state.title}</h3>
        <div className='caret'></div>
        <div className='card'>{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
