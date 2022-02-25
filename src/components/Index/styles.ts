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
`;

export const TitleProfile = styled.h1`
    font-size: 3.5rem;
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
`;

export const Technologies = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
`;

export const ImageDiv = styled.div`
`;

export const ContainerSectionThree = styled.div`
    height: 100vh;
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;
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