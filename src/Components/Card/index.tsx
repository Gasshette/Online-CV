import React from 'react';
import './styles.scss';
import { withTranslation, WithTranslation } from 'react-i18next';

interface ICard extends WithTranslation {
  children: any;
  title: string;
}

class Card extends React.Component<ICard> {
  private cardRef = React.createRef<HTMLDivElement>();
  private isUpdated: boolean;
  public state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      title: ''
    };

    this.isUpdated = false;

    this.removeTitle = this.removeTitle.bind(this);
  }

  componentDidMount() {
    this.removeTitle();
  }

  removeTitle() {
    if (!this.isUpdated) {
      const componentNode = this.cardRef.current;

      if (componentNode) {
        const h3elements = componentNode.getElementsByTagName('h3');

        if (h3elements[0]) {
          h3elements[0].remove();
        }
      }
    }
  }

  render() {
    return (
      <div className='card-component'>
        <h3>{this.props.title}</h3>
        <div className='caret'></div>
        <div className='card' ref={this.cardRef}>{this.props.children}</div>
      </div>
    );
  }
}

export default withTranslation()(Card);
