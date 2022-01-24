import React from 'react';
import { Timeline, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import Card from '../Card/card';
import { renderToString } from 'react-dom/server';

export const primaryColor = '#424242';

const Skills = () => {
  const { t } = useTranslation();

  const extractTitle = (key: string) => {
    let title: string = '';
    const domEl = document.createElement('div');

    domEl.innerHTML = renderToString(<ReactMarkdown children={t(key)} />);
    title = domEl.getElementsByTagName('h2')[0].innerText;

    return title;
  };

  return (
    <Timeline>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.August2021')}>
          <ReactMarkdown children={t('skills.timeline.August2021')} />
          <div className='tags'>
            <Tag color='cyan'>{t('tags.csharp')}</Tag>
            <Tag color={primaryColor}>{t('tags.architecture')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.october2020')}>
          <ReactMarkdown children={t('skills.timeline.october2020')} />
          <div className='tags'>
            <Tag color='red'>{t('tags.angular')}</Tag>
            <Tag color='cyan'>{t('tags.csharp')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.october2020-1week')}>
          <ReactMarkdown children={t('skills.timeline.october2020-1week')} />
          <div className='tags'>
            <Tag color='blue'>{t('tags.react')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.november2019')}>
          <ReactMarkdown children={t('skills.timeline.november2019')} />
          <div className='tags'>
            <Tag color='red'>{t('tags.angular')}</Tag>
            <Tag color={primaryColor}>{t('tags.ngrx')}</Tag>
            <Tag color={primaryColor}>{t('tags.rxjs')}</Tag>
            <Tag color={primaryColor}>{t('tags.lodash')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.august2019')}>
          <ReactMarkdown children={t('skills.timeline.august2019')} />
          <div className='tags'>
            <Tag color='blue'>{t('tags.react')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2019')}>
          <ReactMarkdown children={t('skills.timeline.2019')} />
          <div className='tags'>
            <Tag color='red'>{t('tags.angular')}</Tag>
            <Tag color='cyan'>{t('tags.csharp')}</Tag>
            <Tag color={primaryColor}>{t('tags.fullstack')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2018')}>
          <ReactMarkdown children={t('skills.timeline.2018')} />
          <div className='tags'>
            <Tag color='red'>{t('tags.angular')}</Tag>
            <Tag color='blue'>{t('tags.react')}</Tag>
            <Tag color='cyan'>{t('tags.csharp')}</Tag>
            <Tag color={primaryColor}>{t('tags.fullstack')}</Tag>
            <Tag color={primaryColor}>{t('tags.architecture')}</Tag>
            <Tag color={primaryColor}>{t('tags.formation')}</Tag>
            <Tag color={primaryColor}>{t('tags.technological-watch')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2017')}>
          <ReactMarkdown children={t('skills.timeline.2017')} />
          <div className='tags'>
            <Tag color='cyan'>{t('tags.csharp')}</Tag>
            <Tag color={primaryColor}>{t('tags.architecture')}</Tag>
            <Tag color={primaryColor}>{t('tags.formation')}</Tag>
            <Tag color={primaryColor}>{t('tags.nodejs')}</Tag>
            <Tag color={primaryColor}>{t('tags.git')}</Tag>
            <Tag color={primaryColor}>{t('tags.gitflow')}</Tag>
          </div>
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2016')}>
          <ReactMarkdown children={t('skills.timeline.2016')} />
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2015')}>
          <ReactMarkdown children={t('skills.timeline.2015')} />
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2013-2015')}>
          <ReactMarkdown children={t('skills.timeline.2013-2015')} />
        </Card>
      </Timeline.Item>
      <Timeline.Item color='gray'>
        <Card title={extractTitle('skills.timeline.2011-2013')}>
          <ReactMarkdown children={t('skills.timeline.2011-2013')} />
        </Card>
      </Timeline.Item>
    </Timeline>
  );
};

export default Skills;
