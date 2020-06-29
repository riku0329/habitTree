import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/hero.svg';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '../UIkit';

const Hero = () => {
  const history = useHistory();
  return (
    <SectionWrap component='section'>
      <HeroWrap container>
        <TitleWrap item sm={12} md={6}>
          <Typography variant='h1'>
            スキルを習得するための習慣化アプリ
          </Typography>
          <SubTitle>
            一つのスキル習得に焦点をあて、スキルの習得、より高度化を目指し自分のスキルの成長をゲーム感覚で確認できるアプリです。
          </SubTitle>
          <CustomButton
            color='secondary'
            onClick={() => history.push('/signin')}
            label='サインインまたはサインアップ'
            half={true}
          />
        </TitleWrap>
        <ImageWrap item sm={12} md={6}>
          <img className='image' src={hero} alt='hero' />
        </ImageWrap>
      </HeroWrap>
    </SectionWrap>
  );
};

const SectionWrap = styled(Box)`
  height: 100%;
  margin-top: 166px;
`;

const HeroWrap = styled(Grid)`
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  @media (min-width: 960px) {
    width: 100%;
  }
`;

const TitleWrap = styled(Grid)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const SubTitle = styled.p`
  margin-top: 30px;
  color: #777;
  @media (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

const ImageWrap = styled(Grid)`
  display: flex;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  @media (max-width: 960px) {
    margin-top: 30px;
  }
  .image {
    width: 100%;
    height: auto;
  }
`;

export { Hero };
