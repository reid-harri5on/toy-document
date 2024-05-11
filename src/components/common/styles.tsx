import styled from "styled-components";
import { ICON } from "assets";

export const Spinner = styled.div`
  background: url(${ICON.Loading}) no-repeat center;
  background-size: 3.75rem 3.75rem;
  width: 100%;
  min-height: 2.5rem;
`;

export const Spacer = styled.div`
  flex: 10000;
`;
