import styled from "styled-components";
import fakeprofile from '../../public/me.jpeg'

export const Container = styled.main``;

export const ContainerHeader = styled.div`
   
`;

export const ContainerSection = styled.section`
    min-height: calc(100vh - 5rem);
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        justify-content: center;
    }

    @media (max-width: 420px) {
        justify-content: flex-end;
        margin: 0 2rem;
    }

    @media (max-height: 700px) {
        margin-bottom: 2rem;
    }
`;

export const TitleProfile = styled.h1`
    font-size: 3rem;

    @media (max-width: 420px) {
        font-size: 1.3rem;
    }

    @media (max-height: 700px) {
        font-size: 1.2rem;
    }
`;

export const DescriptionProfile = styled.span`
    line-height: 2rem;  
`;

export const ContainerLeft = styled.div`
    max-width: 500px;
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    @media (max-height: 700px) {
        img {
            height: 210px !important;
        }
    }
`;

export const Divisor = styled.hr`
    width: 100%;
    bottom: 0;
    height: 1px;
    background-color: ${props => props.theme.colors.gray_100};
`;

export const ContainerSectionTwo = styled.div`
    height: 100vh;
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        justify-content: center;
    }

    @media (max-width: 420px) {
        justify-content: flex-end;
        margin: 3rem 2rem;
    }

    @media (max-height: 700px) {
        margin-bottom: 2rem;
    }
`;

export const Technologies = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
`;

export const ImageDiv = styled.div`
    @media (max-width: 420px) {
        img {
            width: 25px !important;
            height: 25px !important;
        }
    }
`;

export const ContainerSectionThree = styled.div`
    height: 100vh;
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column-reverse;
        justify-content: center;
    }

    @media (max-width: 420px) {
        justify-content: flex-end;
        margin: 3rem 2rem;
    }

    @media (max-height: 700px) {
        margin-bottom: 2rem;
    }
`;

export const Social = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
`;

export const ImageDivSocial = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
`;