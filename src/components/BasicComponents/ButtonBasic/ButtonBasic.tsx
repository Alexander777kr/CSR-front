import { Button as MUIButton, ButtonProps, SxProps } from '@mui/material';

interface IMyButtonProps extends ButtonProps {
  className?: string;
}

export const ButtonBasic = (props: IMyButtonProps) => {
  const btnStyles: SxProps = {
    boxSizing: 'border-box',
    borderRadius: '10px',
    fontFamily: 'Gilroy, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    padding: '16px 32px',
    lineHeight: '20px',
    textTransform: 'initial',
  };

  const disabled: SxProps = {
    '&:disabled': {
      color: '#737373',
      background: '#24232A',
      border: '2px solid #737373',
      borderRadius: '10px',
    },
  };

  const primary: SxProps = {
    color: '#fff',
    backgroundColor: '#B81034',
    '&:hover': {
      textDecoration: 'initial',
      backgroundColor: '#D2002D',
    },
  };

  const outlined: SxProps = {
    color: '#B81034',
    border: '2px solid #B81034',
    backgroundColor: 'transparent',
    '&:hover': {
      textDecoration: 'initial',
      color: '#D2002D',
      border: '2px solid #D2002D',
      backgroundColor: 'transparent',
    },
  };

  const text: SxProps = {
    padding: '0',
    color: '#fff',
    fontWeight: 400,
    border: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  };

  let styles = { ...btnStyles };
  if (props.className === 'primary') styles = { ...styles, ...primary };
  else if (props.className === 'outlined') styles = { ...styles, ...outlined };
  else if (props.disabled) styles = { ...styles, ...disabled };
  else if (props.className === 'text') styles = { ...styles, ...text };

  return <MUIButton {...props} disableRipple={false} sx={{ ...styles, ...props.sx }}></MUIButton>;
};
