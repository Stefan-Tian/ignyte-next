import { css, DefaultTheme } from 'styled-components';

interface MarginProps {
  margin?: keyof DefaultTheme['margin'];
  $marginLeft?: keyof DefaultTheme['margin'];
  $marginRight?: keyof DefaultTheme['margin'];
  $marginTop?: keyof DefaultTheme['margin'];
  $marginBottom?: keyof DefaultTheme['margin'];
}

const marginHelper = css<MarginProps>`
  ${(props) => {
    const { margin, $marginRight, $marginLeft, $marginBottom, $marginTop } =
      props;
    let result = ``;

    if (margin) {
      result += `margin: ${props.theme.margin[margin]}`;
    }

    if ($marginRight) {
      result += `margin-right: ${props.theme.margin[$marginRight]};`;
    }

    if ($marginLeft) {
      result += `margin-left: ${props.theme.margin[$marginLeft]};`;
    }

    if ($marginTop) {
      result += `margin-top: ${props.theme.margin[$marginTop]};`;
    }

    if ($marginBottom) {
      result += `margin-bottom: ${props.theme.margin[$marginBottom]};`;
    }

    return result;
  }}
`;

export type { MarginProps };
export { marginHelper };
