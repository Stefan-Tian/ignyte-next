import styled, { DefaultTheme } from 'styled-components';
import { marginHelper } from '../utils';

import type { StyledComponentBase } from 'styled-components';
import type { MarginProps } from '../utils';

interface TextProps extends MarginProps {
  color?: keyof DefaultTheme['color'];
  clickable?: boolean;
}

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div';

interface Typography {
  name: string;
  tag: Tag;
  size: keyof DefaultTheme['fontSize'];
}

const typographyList: Typography[] = [
  { name: 'Heading1', tag: 'h1', size: 'heading1' },
  { name: 'Heading2', tag: 'h2', size: 'heading2' },
  { name: 'Heading3', tag: 'h3', size: 'heading3' },
  { name: 'Heading4', tag: 'h4', size: 'heading4' },
  { name: 'Heading5', tag: 'h5', size: 'heading5' },
  { name: 'LgText', tag: 'div', size: 'normalLG' },
  { name: 'MdText', tag: 'div', size: 'normalMD' },
];

interface ExportType {
  [x: string]: StyledComponentBase<Tag, DefaultTheme, TextProps, never>;
}

const typography: ExportType = {};
typographyList.forEach(({ name, tag, size }) => {
  typography[name] = styled(tag)<TextProps>`
    font-size: ${(props) => props.theme.fontSize[size]};
    color: ${(props) =>
      props.color
        ? props.theme.color[props.color]
        : props.theme.color.darkLight};
    ${marginHelper}

    ${(props) => props.clickable && `cursor: pointer`};
  `;
});

const { Heading1, Heading2, Heading3, Heading4, Heading5, LgText, MdText } =
  typography;

export { Heading1, Heading2, Heading3, Heading4, Heading5, LgText, MdText };
