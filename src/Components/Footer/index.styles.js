import styled, { css } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DiGithubAlt } from "react-icons/di";

export const StyledFooter = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.darkGray};
  box-shadow: 0px -2px 5px 2px ${({ theme }) => theme.darkGray};
`;

export const StyledOwners = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledOwner = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 5px 0;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.white};
`;

export const Link = styled.a`
  text-decoration: none;
`;

const Icon = css`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  :hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.error};
  }
`;

export const GithubIcon = styled(BsGithub)`
  ${Icon};
`;

export const LinkedinIcon = styled(BsLinkedin)`
  ${Icon};
`;

export const RepositoryIcon = styled(DiGithubAlt)`
  ${Icon};
`;
