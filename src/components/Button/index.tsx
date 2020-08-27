import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
  color: ${props => props.outlined ? 'var(--twitter)' : 'var(--white)' };
  border: ${props => props.outlined ? '1px'}
`;
