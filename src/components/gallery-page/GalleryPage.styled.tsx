import styled from 'styled-components';
import { Breakpoint, GALLERY_SPACING } from '../../app-constants';

const StyledContainer = styled.div`
  display: grid;
  grid-gap: ${GALLERY_SPACING};
  margin: ${GALLERY_SPACING} auto;
  align-items: center;

  @media (min-width: ${Breakpoint.M}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${Breakpoint.L}) {
    grid-template-columns: repeat(3, 1fr);
  }
  :first-child {
    margin-left: ${GALLERY_SPACING};
  }
  :last-child {
    margin-right: ${GALLERY_SPACING};
  }
`;

export default StyledContainer;
