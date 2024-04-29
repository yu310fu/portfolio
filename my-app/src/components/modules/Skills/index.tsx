import React from 'react';
import styled from "styled-components";
import Palette from '../../styles/Palette'
import Title from '../../parts/Title'
import HeadingLabel from '../../parts/HeadingLabel'
import IconAe from './icon_ae.svg';
import IconAi from './icon_ai.svg';
import IconAn from './icon_an.svg';
import IconFigma from './icon_figma.svg';
import IconGitHub from './icon_gitHub.svg';
import IconPs from './icon_ps.svg';

const TOOLS = [
  {
    name: 'Figma',
    proficiency: 9
  },
  {
    name: 'GitHub',
    proficiency: 6
  },
  {
    name: 'Adobe',
    proficiency: 4
  }
]

const Component = styled.div`
  width: 650px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 204px;
  gap: 16px;
  margin-top: 8px;
`

const Box = styled.div<{gridColumn: string, gridRow: string, isRow?: boolean}>`
  display: flex;
  flex-direction: ${props => props.isRow ? 'row' : 'column'};
  justify-content: space-between;
  padding: 24px;
  background-color: ${Palette.surface.low};
  border-radius: 16px;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
`;

const Caption = styled.div`
  font-size: 14px;
`

const ToolsContent = styled.div``;

const ToolIcons = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 8px;

  &:first-child {
    margin-left: 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Palette.content.tertiary};
  padding: 6px;
`

const Point = styled.div`
  display: flex;
`

const PointDot = styled.div<{isActive: boolean}>`
  width: 10px;
  height: 10px;
  margin-left: 4px;
  border-radius: 2px;
  background-color: ${props => props.isActive ? Palette.label.primary : Palette.content.tertiary};
`

const ListHeading = styled.h3``

function Skills() {
  const toolList = TOOLS.map((item, index) => {
    //　ドットを生成
    const pointDots: JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
      if (i < item.proficiency) {
        pointDots.push(<PointDot isActive={true} />)
      } else {
        pointDots.push(<PointDot isActive={false} />)
      }
    }

    return (
      <ListItem key={index}>
        <ListHeading>{item.name}</ListHeading>
        <Point>
          {pointDots}
        </Point>
      </ListItem>
    )
  })

  return (
    <Component>
      <Title>SKILLS</Title>
      <GridContainer>
        <Box gridColumn="1 / 4" gridRow="1">
          <HeadingLabel type="Skill">UI/UX</HeadingLabel>
          <Caption>
            BtoC / SaaS<br/>
            デザインシステム設計・運用 / ABテスト<br/>
            レスポンシブデザイン
          </Caption>
        </Box>
        <Box gridColumn="4 / 7" gridRow="1">
          <HeadingLabel type="Skill">Develop</HeadingLabel>
          <Caption>
            HTML5 / CSS3<br/>
            JavaScript / React / TypeScript<br/>
            Wordpress / Movable Type / SQL
          </Caption>
        </Box>
        <Box gridColumn="1 / 5" gridRow="2" isRow>
          <HeadingLabel type="Skill">Tools</HeadingLabel>
          <ToolsContent>
            <ToolIcons>
              <Icon src={IconFigma}/>
              <Icon src={IconGitHub}/>
              <Icon src={IconAi}/>
              <Icon src={IconPs}/>
              <Icon src={IconAe}/>
              <Icon src={IconAn}/>
            </ToolIcons>
            <ul>
            {toolList}
            </ul>
          </ToolsContent>
        </Box>
        <Box gridColumn="5 / 7" gridRow="2">
          <HeadingLabel type="Skill">Strength Finder</HeadingLabel>
          <Caption>
            最上志向｜適応性｜<br/>
            達成欲｜共感性｜戦略性
          </Caption>
        </Box>
      </GridContainer>
    </Component>
  );
}

export default Skills;
