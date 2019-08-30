import React from 'react';
import { Timeline, Tag, Icon } from 'antd';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import i18n from '../../i18n';
import Language from '../Language';

const Skills = () => {
  const { t } = useTranslation();

  const convert = (key:any) => {
    return t(key).replace("<Language language='react'>React</Language>", "<span className='react'>React</span>");
  }
  return (
    <Timeline>
      <Timeline.Item color="blue">
        <ReactMarkdown source={convert('skills.timeline.august2019')} />
      </Timeline.Item>
      <Timeline.Item color="gray">
        2019 - Développement fullStack
        <ul>
          <li><span className='angular'>Angular</span> : Développement d'évolutions majeures et mineures, correction de bogues</li>
          <li><Language language='csharp'>C#</Language> : Développement d'évolutions majeure et mineures, correction de bogues</li>
        </ul>
        <div className="tags">
          <Tag color='red'>Angular</Tag>
          <Tag color='cyan'>C#</Tag>
          <Tag color='#222'>FullStack</Tag>
        </div>
      </Timeline.Item>
      <Timeline.Item color="gray">
        2018 - Développement fullStack
        <ul>
          <li><span className='angular'>Angular</span> : Prise en main, Développement d'évolutions mineures, correction de bogues</li>
          <li><Language language='react'>React</Language> :
            <ul>
              <li>Développement d'une interface de gestion d'exercices d'entrainement (KATA & DOJO)</li>
              <li>Création d'un POC (Proof Of Concept) concernant <Language language='react'>React</Language>. Objectif : proposer <Language language='react'>React</Language> en tant que technologie viable et focntionnelle pour les besoins du client</li>
              <li>Création d'un projet de formation complète</li>
            </ul>
          </li>
          <li><Language language='csharp'>C#</Language> :
            <ul>
              <li>Création des APIs de gestion des exercices d'entrainement (Architecture ONION)</li>
              <li>Développement d'évolutions majeures sur différents sujets</li>
            </ul>
          </li>
          <li>Social : Participation à des présentations sur différents sujets techniques liés au développement et à l'architecture logicielle</li>
          <li>Divers :
            <ul>
              <li>Présentations/Formations (format 30 minutes) sur divers sujets (Veille technologique, découverte, etc.)</li>
              <li>Ecriture de conceptions techniques</li>
            </ul>
          </li>
        </ul>
        <div className="tags">
          <Tag color='red'>Angular</Tag>
          <Tag color='blue'>React</Tag>
          <Tag color='cyan'>C#</Tag>
          <Tag color='#222'>FullStack</Tag>
          <Tag color='#222'>Architecture</Tag>
          <Tag color='#222'>Formation</Tag>
          <Tag color='#222'>Veille technologique</Tag>
        </div>
      </Timeline.Item>
      <Timeline.Item color="gray">
        2017 - Entrée chez Capgemini
        <ul>
          <li><Language language='csharp'>C#</Language> : Formation et apprentissage du language (.NET framework, ASP.NET, Razor)</li>
          <li>Apprentissage de divers outils de développement Front-End : Node.js, Git (Gitflow),</li>
        </ul>
        <div className="tags">
          <Tag color='cyan'>C#</Tag>
          <Tag color='#222'>Architecture</Tag>
          <Tag color='#222'>Formation</Tag>
        </div>
      </Timeline.Item>
      <Timeline.Item color="gray">
        2016 - Recherche d'emploi et prise en main physique
      </Timeline.Item>
      <Timeline.Item color="gray">
        2015 - Hotline et période d'essai chez <a href='https://www.isagri.fr'>Isagri</a>
      </Timeline.Item>
      <Timeline.Item color="gray">
        2013 / 2015 - Licence Réseaux et Génie Informatique en anternance chez <a href={`http://www.lbd.fr/${i18n.language}`}>La Brosse & Dupont</a> puis CDD de 4 mois
      </Timeline.Item>
      <Timeline.Item color="gray">
        2011 - 2013 - BTS Service Informatiques aux Organisations chez <a href={`http://www.lbd.fr/${i18n.language}`}>La Brosse & Dupont</a>
      </Timeline.Item>
    </Timeline>
  );
};

export default Skills;
