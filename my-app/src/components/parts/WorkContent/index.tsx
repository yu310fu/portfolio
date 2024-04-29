import React, {ReactNode} from 'react';
import styled from "styled-components";
import Palette from '../../styles/Palette'
import Button from '../Button'

const Component = styled.div`
`;

const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 32px;
`

const Date = styled.div`
  display: inline-block;
  font-weight: bold;
  background-color: ${Palette.label.other};
  color: ${Palette.content.secondary};
  border-radius: 18px;
  margin-bottom: 16px;
  padding: 2px 8px;
  font-size: 12px;
`

const Title = styled.h2`
  font-size: 32px;
`;

const SubText = styled.span`
  color: ${Palette.content.secondary};
`

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 2px;
`;

const Description = styled.div`
  line-height: 1.6;
  font-size: 15px;
  margin-top: 24px;

  h3 {
    margin: 32px 0 16px;
  }

  li {
    list-style: inside;
  }

  span {
    color: ${Palette.content.secondary};
  }
`
const Link = styled.a`
  display: inline-block;
  margin-top: 32px;
`

interface Props {
  children?: ReactNode | undefined;
  date?: string;
  title?: string;
  subText?: string;
  imageUrl?: string;
  moreLinkUrl?: string;
  buttonText?: string;
}

const WorkContent: React.FunctionComponent<Props> = props => {
  const { children, date, title, subText, imageUrl, moreLinkUrl, buttonText} = props;
  return (
    <Component>
      <Heading>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <SubText>{subText}</SubText>
      </Heading>
      <Image src={imageUrl}/>
      <Description>
        {children}
      </Description>
      {moreLinkUrl &&
      <Link href={moreLinkUrl} target='_blank'>
        <Button type="morelink" url={buttonText} />
      </Link>
      }
    </Component>
  );
}

export default WorkContent;
