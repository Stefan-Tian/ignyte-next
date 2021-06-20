const queryMaxWidth = (width: number, content: string) => `
  @media only screen and (max-width: ${width}px) {
    ${content}
  }
`;

export { queryMaxWidth };
