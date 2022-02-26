import styled from "styled-components";

export const Container = styled.main`
`;

export const ContainerSection = styled.div`
    max-width: 720px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 420px) {
        margin: 2rem 2rem;
    }
`;

export const ContainerPost = styled.div`
    margin-bottom: 5.5rem;
`;

export const TitlePost = styled.h2`
    margin-top: .6rem;
`;

export const TitleData = styled.span`
    margin: .6rem 0;
    font-style: italic;
`;

export const TitleIntroduction = styled.p`
    
`;

export const ContainerPostBody = styled.div`
    color: ${props => props.theme.colors.gray_100};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;