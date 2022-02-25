import styled from "styled-components";

export const Container = styled.header`
    height: 5rem;
    border-bottom: 1px solid ${props => props.theme.colors.gray_200};

    @media (max-width: 600px) {
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    height: 5rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        margin: 0 2.5rem;
    }

    @media (max-width: 420px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const HeaderNav = styled.nav`
    a {
        color: ${props => props.theme.colors.gray_100};
        transition: color 0.3s;

        & + a {
            margin-left: 2rem;
        }

        &:hover {
            color: ${props => props.theme.colors.white};
        }

        &.active {
            color: ${props => props.theme.colors.yellow_500};
        }
    }
`;

export const TitleIcon = styled.h3`
    font-weight: bold;
    color: ${props => props.theme.colors.yellow_500};
`;

export const TitleText = styled.h3`
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`;

export const ContainerProfileUser = styled.div`
    display: flex;
    justify-content: center;
`;

