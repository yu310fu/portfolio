import React from 'react';
import styled from "styled-components";
import Palette from '../../styles/Palette'
import Title from '../../parts/Title'
import HeadingLabel from '../../parts/HeadingLabel'
import Button from '../../parts/Button'
import Modal from '../../modules/Modal'
import WorkContent from '../../parts/WorkContent'
import ImagePost1 from './image_post_1.png';
import ImageWork1 from './image_work_1.png';
import ImageWork2 from './image_work_2.png';
import ImageWork3 from './image_work_3.png';
import ImageWorkBitStar from './image_work_bitstar.png';
import ImageWorkSingle from './image_work_single.png';

interface WorkProps {
  date: string;
  title: string;
  subText: string;
  imageUrl: string;
  moreLinkUrl?: string;
  buttonText?: string;
  Description: JSX.Element;
}

const WORK = {
  yahoo: {
    date: '2020/4~現在',
    title: 'Yahoo!フリマ（旧PayPayフリマ）',
    subText: 'LINEヤフー株式会社 / デザイナー（正社員）',
    imageUrl: ImageWork1,
    moreLinkUrl: 'https://paypayfleamarket.yahoo.co.jp/about',
    buttonText: 'paypayfleamarket.yahoo.co.jp/about',
    Description: 
    <>
    2020年に入社してから現在まで、Yahoo!フリマ（旧PayPayフリマ）のUI/UXデザイン・Webフロントエンド開発に従事しています。<br/>
    Yahoo!フリマ・Yahoo!オークションのリニューアルプロジェクト（2023年11月プレスリリース）においては、プロダクトUI/UXの基盤整備や、両サービス間の連携に必要不可欠な共通デザインシステム整備の推進を行いました。<br/>
    <h3>担当案件リリース時の社外向け記事（抜粋）</h3>
    <ul>
      <li>
        <a href='https://lydesign.jp/n/n5fd83cc7802a' target='_blank'>２つのサービスを繋げるリブランディング 〜Yahoo!フリマ・オークション 新VI決定までの道のり</a>（ブランドカラー検討・UI/UX基盤整備）
      </li>
      <li>
        <a href='https://paypayfleamarket.yahoo.co.jp/notice/function/post_571/' target='_blank'>スピード・安心発送バッジ機能リリースのお知らせ</a>（機能要件検討・デザイン）
      </li>
      <li>
        <a href='https://paypayfleamarket.yahoo.co.jp/topics/20220824/0000/' target='_blank'>【新機能】出品にも購入にも便利な「製品の登録機能」をリリースしました</a>（機能要件検討・デザイン）
      </li>
    </ul>
    <h3>担当案件ページ（抜粋）</h3>
    <ul>
      <li>
        <a href='https://paypayfleamarket.yahoo.co.jp/' target='_blank'>Yahoo!フリマ｜Webトップページ リニューアル</a>（企画・デザイン・実装）
      </li>
      <li>
        <a href='https://s.yimg.jp/images/paypayfleamarket/help/deliverytypeslist.pdf' target='_blank'>Yahoo!フリマ｜配送方法早わかり表</a>（リニューアル提案・デザイン）
      </li>
      <li>
        <a href='https://paypayfleamarket.yahoo.co.jp/contents/shipping' target='_blank'>Yahoo!フリマ｜配送早わかりガイド</a>（機能要件検討・デザイン）
      </li>
      <li>
        <a href='https://paypayfleamarket.yahoo.co.jp/promo/goods/20230614/' target='_blank'>グッズ交換で手数料と送料実質無料キャンペーン</a>（デザイン・実装）
      </li>
      <li>
        <a href='https://paypayfleamarket.yahoo.co.jp/contents/underage' target='_blank'>未成年向けご利用ガイド</a>（実装）
      </li>
    </ul>
    </>
  },
  bitStar: {
    date: '2022/11~2023/7',
    title: 'BitStar Match',
    subText: '株式会社BitStar / デザイナー（業務委託）',
    imageUrl: ImageWorkBitStar,
    moreLinkUrl: 'https://bitstar.tokyo/match/top?platform=youtube',
    buttonText: 'bitstar.tokyo/match',
    Description: 
    <>
    BitStar Matchはインフルエンサーマーケティング特化のSaaSです。<br/>
    業務委託デザイナーとしてお声がけいただき、サービスの基盤となるデザイントークンの設計・プロトタイプ〜リリースまでのプロダクトUIを担当しました。<br/>
    <br/>
    使用ツール：Figma</>
  },
  single: {
    date: '2021/12~2023/8',
    title: '単発案件',
    subText: '株式会社Fluxx / デザイナー・コーダー（業務委託）',
    imageUrl: ImageWorkSingle,
    Description: 
    <>
    <ul>
      <li>
        <a href='https://ranking-contract.web.app/' target='_blank'>不動産電子契約徹底比較 2023年最新ランキング</a>（Figma / HTML / Sass）
      </li>
      <li>
        Release(レリーズ)｜売買特化の不動産電子契約（Figma / React）<span>※公開終了</span>
      </li>
      <li>
        <a href='https://mobipark-5d30f.web.app/' target='_blank'>mobiPark｜時間貸し駐車場運営</a>（HTML / Sass）
      </li>
      <li>
        <a href='https://hokkyokusei-corporation.web.app/' target='_blank'>北極星コーポレーション</a>（Figma / HTML / Sass）
      </li>
      <li>
        <a href='https://zerote.info/' target='_blank'>ゼロテ｜手付金0円で実現する現金不要の新しい住宅購入</a>（Figma / HTML / Sass）
      </li>
      <li>
        <a href='https://ranking-diet.web.app/' target='_blank'>「GLP-1ダイエット」おすすめクリニック徹底比較</a>（AdobeXD / HTML / Sass）
      </li>
      <li>
        <a href='https://ranking-pill-online.jp/' target='_blank'>「低用量ピル」処方サービス最新ランキング</a>（AdobeXD / HTML / Sass）
      </li>
    </ul>
    </>
  }
}

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

const Box = styled.a<{
    gridColumn: string, 
    gridRow: string, 
    isRow?: boolean, 
    imagePC?: string, 
    imageSP?: string, 
    height?: string,
    isBottomLayout?: boolean,
    }>`
    position: relative;
    display: flex;
    flex-direction: ${props => props.isRow ? 'row' : 'column'};
    justify-content: ${props => props.isBottomLayout ? 'flex-end' :'space-between'};
    align-items: flex-start;
    height: ${props => props.height};
    padding: 24px;
    background: url(${props => props.imagePC}) no-repeat center;
    background-size: 100%;
    background-color: ${Palette.surface.low};
    border-radius: 16px;
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};

    &:hover {
      text-decoration: none;
    }

    &::before{
      content: "";
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      transition: all .2s ease;
      cursor: pointer;
      border-radius: 16px;
    }
    &:hover::before {
      box-sizing: border-box;
      background-color: ${Palette.surface.hover};
      border: 2px solid ${Palette.content.parimary};
    }
`;

const ButtonWrap = styled.div`
  z-index: 10;
`

const Caption = styled.div<{isInverted?: boolean, isTopMargin?: boolean}>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-top: ${props => props.isTopMargin ? '16px' : '0'};
  margin-right: 16px;
  color: ${props => props.isInverted ? Palette.content.inverted : Palette.content.parimary};
`

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const FloatingWrap = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
`

const SubText = styled.span`
  font-size: 14px;
  line-height: 1.8;
`

function Performance() {

  // モーダル開閉処理
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({} as WorkProps);

  const handleClickOpenYahoo = () => {
    setModalIsOpen(true)
    setModalContent(WORK.yahoo)
  }
  const handleClickOpenBitStar = () => {
    setModalIsOpen(true)
    setModalContent(WORK.bitStar)
    
  }
  const handleClickOpenSingle = () => {
    setModalIsOpen(true)
    setModalContent(WORK.single)
  }

  const handleClickClose = () => {
    setModalIsOpen(false)
  }

  return (
    <Component>
      <Title>PERFORMANCE</Title>
      <GridContainer>
        <Box gridColumn="1 / 7" gridRow="1 / 2" imagePC={ImageWork1} height='424px' isBottomLayout onClick={handleClickOpenYahoo}>
          <HeadingLabel type="Work" isInverted>
            <RowContainer>
              Yahoo!フリマ
              <SubText>（旧PayPayフリマ）</SubText>
            </RowContainer>
          </HeadingLabel>
          <Caption isInverted isTopMargin>
            UI/UXデザイン・Webフロントエンド開発に従事<br />
            デザインシステムの設計・運用を推進
          </Caption>
          <FloatingWrap>
            <Button type="more" />
          </FloatingWrap>
        </Box>
        <Box gridColumn="1 / 7" gridRow="3" imagePC={ImageWork2} onClick={handleClickOpenBitStar}>
          <HeadingLabel type="Work">BitStar Match</HeadingLabel>
          <Caption>
            サービスの基盤となるデザイントークン設計<br />
            プロトタイプ〜リリースまでのプロダクトUIを担当
          </Caption>
          <ButtonWrap>
            <Button type="more" />
          </ButtonWrap>
        </Box>
        <Box gridColumn="1 / 3" gridRow="4" imagePC={ImageWork3} onClick={handleClickOpenSingle}>
          <HeadingLabel type="Work">単発案件</HeadingLabel>
          <ButtonWrap>
            <Button type="more" />
          </ButtonWrap>
        </Box>
        <Box gridColumn="3 / 7" gridRow="4" imagePC={ImagePost1} href='https://techblog.yahoo.co.jp/entry/2022120430379853/' target='_blank'>
          <HeadingLabel type="Post">
            Yahoo! JAPAN<br/>
            Advent Calendar 2022
          </HeadingLabel>
          <RowContainer>
            <Caption>
            Figmaデザイン管理保守の効率化 〜 PayPayフリマのリファクタリング事例
            </Caption>
            <ButtonWrap>
              <Button type="link" url="techblog.yahoo.co.jp/entry/2022120430379853/" />
            </ButtonWrap>
          </RowContainer>
        </Box>
      </GridContainer>
      <Modal isOpen={modalIsOpen} onClickClose={handleClickClose}>
      {modalContent && 
        <WorkContent
          date={modalContent.date}
          title={modalContent.title}
          subText={modalContent.subText}
          imageUrl={modalContent.imageUrl}
          moreLinkUrl={modalContent.moreLinkUrl}
          buttonText={modalContent.buttonText}
        >
          {modalContent.Description}
        </WorkContent>
      }
      </Modal>
    </Component>
  );
}

export default Performance;
