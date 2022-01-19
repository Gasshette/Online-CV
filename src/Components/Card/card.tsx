import React from 'react';
import './card.scss';
import { withTranslation, WithTranslation } from 'react-i18next';

interface ICard extends WithTranslation {
  children: any;
  title: string;
}

const Card = (props: ICard) => {
  const cardRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    removeTitle();
  }, []);

  const removeTitle = () => {
      const componentNode = cardRef.current;

      if (componentNode) {
        const h3elements = componentNode.getElementsByTagName('h2');

        if (h3elements[0]) {
          h3elements[0].remove();
        }
      }
  }

  return (
    <div className='card-component'>
        <h2>{props.title}</h2>
        <div className='caret'></div>
        <div className='card' ref={cardRef}>{props.children}</div>
      </div>
  )
}

export default withTranslation()(Card);
