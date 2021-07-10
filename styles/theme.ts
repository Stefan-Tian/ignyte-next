import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    layout: {
      queryLG: number;
      queryMD: number;
    };
    margin: {
      m4: string;
      m8: string;
      m16: string;
      m24: string;
      m32: string;
      m36: string;
      m40: string;
    };
    padding: {
      p4: string;
      p8: string;
      p16: string;
      p24: string;
      p32: string;
      p36: string;
      p40: string;
    };
    color: {
      dark: string;
      darkLight: string;
      darkNeutral: string;
      darkBlue: string;
      primaryLight: string;
      blue: string;
      blue2: string;
      blue3: string;
      purple: string;
      gray3: string;
      gray4: string;
      light: string;
      error: string;
      success: string;
    };
    shadow: {
      sm: string;
    };
    borderRadius: {
      xs: string;
      sm: string;
    };
    fontSize: {
      heading1: string;
      heading2: string;
      heading3: string;
      heading4: string;
      heading5: string;
      normalLG: string;
      normalMD: string;
    };
  }
}

const theme: DefaultTheme = {
  layout: {
    queryLG: 1920,
    queryMD: 1242,
  },
  margin: {
    m4: '0.04rem',
    m8: '0.08rem',
    m16: '0.16rem',
    m24: '0.24rem',
    m32: '0.32rem',
    m36: '0.36rem',
    m40: '0.4rem',
  },
  padding: {
    p4: '0.04rem',
    p8: '0.08rem',
    p16: '0.16rem',
    p24: '0.24rem',
    p32: '0.32rem',
    p36: '0.36rem',
    p40: '0.4rem',
  },
  color: {
    dark: '#1D2A38',
    darkNeutral: '#4A5573',
    darkLight: '#334356',
    darkBlue: '#273240',
    primaryLight: '#DFE7F2',
    blue: '#1e69c5',
    blue2: '#4D7EFD',
    blue3: '#E5F0FA',
    purple: '#485bef',
    gray3: '#C9CBD6',
    gray4: '#6E7EA7',
    light: '#F3F3F9',
    error: '#FF647C',
    success: '#00C48C',
  },
  shadow: {
    sm: '0px 0.04rem 0.64rem 0 rgba(0, 0, 0, 0.07)',
  },
  borderRadius: {
    xs: '6px',
    sm: '10px',
  },
  fontSize: {
    heading1: '0.4rem',
    heading2: '0.32rem',
    heading3: '0.28rem',
    heading4: '0.24rem',
    heading5: '0.2rem',
    normalLG: '0.18rem',
    normalMD: '0.16rem',
  },
};

export default theme;
