import React from 'react';
import styled from "styled-components";
import iconImage from './icon.jpg';
import iconGitHub from './icon_github.svg';
import Palette from '../../styles/Palette'
import Title from '../../parts/Title'

const HISTORY = [
  {
    date: {start: '2020/4'},
    heading: 'LINEヤフー株式会社',
    job: 'デザイナー（正社員）'
  },
  {
    date: {start: '2021/12', end: '2023/8'},
    heading: '株式会社Fuluxx',
    job: 'デザイナー・コーダー（業務委託）'
  },
  {
    date: {start: '2022/11', end: '2023/7'},
    heading: '株式会社BitStar',
    job: 'デザイナー（業務委託）'
  },
  {
    date: {start: '2018/4', end: '2020/3'},
    heading: '岩崎学園情報科学専門学校',
    job: 'Web技術科'
  }
]

const Component = styled.div`
  position: sticky;
  top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid ${Palette.content.tertiary};
  border-radius: 100%;
`

const Spell = styled.span`
  margin-top: 40px;
  color: ${Palette.content.secondary};
  font-size: 18px;
  font-weight: bold;
`;
const Name = styled.h1`
  margin-top: 4px;
  font-size: 42px;
  font-weight: bold;
`
const Content = styled.div`
  margin: 16px 0 40px;
`;

const List = styled.ul`
  width: 100%;
  margin-bottom: 16px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const DurationArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  width: 56px;
`;

const HeadContent = styled.div`
  width: 100%;
  margin-left: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${Palette.content.tertiary};
`;

const Heading = styled.h3`
  font-size: 16px;
`

const Job = styled.div`
  margin-top: 4px;
`

const IconGitHub = styled.img`
  width: 32px;
  height: 32px;
`

function Profile() {
  const historyList = HISTORY.map((item, index) => {
    return (
      <ListItem key={index}>
        <DurationArea>
          <time>{item.date.start}</time>
          {item.date.end ? <time>~{item.date.end}</time> : '~現在'}
        </DurationArea>
        <HeadContent>
          <Heading>{item.heading}</Heading>
          <Job>{item.job}</Job>
        </HeadContent>
      </ListItem>
    )
  })

  return (
    <Component>
      <Icon src={iconImage}/>
      <Spell>YURI KATO</Spell>
      <Name>加藤 ゆり</Name>
      <Content>
        1994年生まれ、韓国出身。<br/>
        2020年に岩崎学園情報科学専門学校を卒業後、ヤフー（現LINEヤフー）に入社。<br/>
        PayPayフリマ（現Yahoo!フリマ）のUI/UXデザイン・Webフロントエンド開発に従事。
      </Content>
      <Title>PERSONAL HISTORY</Title>
      <List>
      {historyList}
      </List>
      <a href='https://github.com/yu310fu/portfolio' target='_blank'>
        <IconGitHub src={iconGitHub}/>
      </a>
    </Component>
  );
}

export default Profile;
