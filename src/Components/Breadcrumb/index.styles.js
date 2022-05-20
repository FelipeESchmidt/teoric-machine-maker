import styled from 'styled-components';

export const Breadcrumb = styled.div`
  display: flex;
  gap: 5px;

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.marked};
    }

    :not(:last-child)::after {
      content: ' /';
    }
  }
`;
