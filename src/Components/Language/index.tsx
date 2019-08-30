import React from 'react';
import './styles.scss';

interface ILanguage {
  language:string;
}

const Language: React.FC<ILanguage> = (props) => {
  return <span className={`language ${props.language.toLowerCase().trim()}`}>{props.children}</span>;
};

export default Language;
