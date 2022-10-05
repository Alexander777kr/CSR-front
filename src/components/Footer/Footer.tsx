import { Grid, Box, Container, Link, Stack } from '@mui/material';
import { FooterKey, FooterNet, FooterPerson, LogoFooter, SocialFacebook, SocialInstagram, SocialSteam } from '../svg';
import { FC } from 'react';

type TFooterStatisticProps = {
  openCases: number;
  onlineUsers: number;
  totalUsers: number;
};

type TFooterStatisticItemInfo = {
  amount: number;
  title: string;
};

type TFooterLink = {
  value: string;
  url: string;
};

const FooterStatisticItemInfo: FC<TFooterStatisticItemInfo> = ({ amount, title }) => {
  return (
    <Box>
      <Box className="footer-statistic-item__amount">{amount.toLocaleString('en-US')}</Box>
      <Box className="footer-statistic-item__title">{title}</Box>
    </Box>
  );
};

const FooterStatistic: FC<TFooterStatisticProps> = ({ openCases, onlineUsers, totalUsers }) => {
  return (
    <Box className="footer-statistic">
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box className="footer-statistic-item">
              <FooterKey />
              <FooterStatisticItemInfo amount={openCases} title="Открыто кейсов" />
            </Box>
          </Grid>
          <Grid item>
            <Box className="footer-statistic-item">
              <FooterNet />
              <FooterStatisticItemInfo amount={onlineUsers} title="Онлайн" />
            </Box>
          </Grid>
          <Grid item>
            <Box className="footer-statistic-item">
              <FooterPerson />
              <FooterStatisticItemInfo amount={totalUsers} title="Пользователей" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const FooterLink: FC<TFooterLink> = ({ value, url }) => {
  return (
    <Box sx={{ marginTop: '5px' }}>
      <Link href={url} underline="hover" color="inherit">
        {value}
      </Link>
    </Box>
  );
};

const FooterInfo = () => {
  return (
    <Box className="footer-info">
      <Container sx={{ maxWidth: '1158px' }} maxWidth={false}>
        <Grid container direction="row">
          <Grid item xs={12} sm={5}>
            <LogoFooter />
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={1} sx={{ marginTop: '10px' }}>
              <Link href="https://www.instagram.com/">
                <SocialInstagram />
              </Link>
              <Link href="https://www.facebook.com/">
                <SocialFacebook />
              </Link>
              <Link href="https://store.steampowered.com/">
                <SocialSteam />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container>
              <Grid item xs={6} sm={4}>
                <Box className="footer-info__title">Сервис</Box>
                <FooterLink value="Проверка" url="#" />
                <FooterLink value="Правила" url="/terms-of-service" />
                <FooterLink value="Политика" url="/privacy-policy" />
                <FooterLink value="Поддержка" url="/tech-support" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box className="footer-info__title">Мой аккаунт</Box>
                <FooterLink value="Мой аккаунт" url="#" />
                <FooterLink value="Мои кейсы" url="#" />
                <FooterLink value="Плюшки" url="#" />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box className="footer-info__title">FEDAG ROULETTE</Box>
                <FooterLink value="Дневной кейс" url="#" />
                <FooterLink value="Акции" url="#" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const Footer = () => {
  // get from backend
  const openCases = 253901;
  const onlineUsers = 8912;
  const totalUsers = 10319;

  return (
    <footer className="footer">
      <FooterStatistic openCases={openCases} onlineUsers={onlineUsers} totalUsers={totalUsers} />
      <FooterInfo />
    </footer>
  );
};
