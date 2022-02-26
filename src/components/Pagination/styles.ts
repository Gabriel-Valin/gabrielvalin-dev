import styled from "styled-components";

export const PaginationSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const PaginationContainer = styled.div`
    display: flex;
`;

export const PaginationButton = styled.button`
    margin: 0 .3rem;
    border: 0;
    background: ${props => props.theme.colors.gray_200};
    color: ${props => props.theme.colors.white};
    padding: 0 0.5rem;
    border-radius: .3rem;

    svg {
        padding: 0 .3rem;
    }
`; 