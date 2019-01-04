// navigation items and buttons
export const COLOR_PRIMARY_LINK = '#2c7df7';
export const COLOR_PRIMARY_LINK_INVERSE = '#fff';
// body copy and gerneral type
export const COLOR_PRIMARY_COPY = '#191414';
// headers and titles
export const COLOR_PRIMARY_HEADER = '#123262';
// footer
export const COLOR_FOOTER = '#1a2734';

const theme = {
  button: {
    color: COLOR_PRIMARY_LINK,
    background: 'none'
  },
  buttonBig: {
    color: COLOR_PRIMARY_LINK_INVERSE,
    background: COLOR_PRIMARY_LINK
  },
  paragraph: {
    color: COLOR_PRIMARY_COPY
  },
  header: {
    color: COLOR_PRIMARY_HEADER
  }
}

export default theme;