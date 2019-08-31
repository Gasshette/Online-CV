import React from 'react';
import { Timeline, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import Card from '../Card';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Timeline>
      <Timeline.Item color='blue'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.august2019')} />
          <div className='tags'>
            <Tag color='blue'>React</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2019')} />
          <div className='tags'>
            <Tag color='red'>Angular</Tag>
            <Tag color='cyan'>C#</Tag>
            <Tag color='#383838'>FullStack</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2018')} />
          <div className='tags'>
            <Tag color='red'>Angular</Tag>
            <Tag color='blue'>React</Tag>
            <Tag color='cyan'>C#</Tag>
            <Tag color='#383838'>FullStack</Tag>
            <Tag color='#383838'>Architecture</Tag>
            <Tag color='#383838'>Formation</Tag>
            <Tag color='#383838'>Veille technologique</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2017')} />
          <div className='tags'>
            <Tag color='cyan'>C#</Tag>
            <Tag color='#383838'>Architecture</Tag>
            <Tag color='#383838'>Formation</Tag>
            <Tag color='#383838'>Node.js</Tag>
            <Tag color='#383838'>Git</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2016')} />
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2015')} />
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2013-2015')} />
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card>
          <ReactMarkdown source={t('skills.timeline.2011-2013')} />
        </Card>
      </Timeline.Item>
    </Timeline>
  );
};

export default Skills;
