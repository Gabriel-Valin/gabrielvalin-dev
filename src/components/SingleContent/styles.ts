import styled from "styled-components";

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    padding-bottom: 5rem;   
`;

export const ContainerPost = styled.article`
    max-width: 720px;
    margin: 5rem auto 0;

    img {
        max-width: 100%:
        max-height: 410px;
        border-radius: 15px;
    }
`;

export const PostTitle = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    color: ${props => props.theme.colors.white};
`;

export const PostDate = styled.time`
    color: ${props => props.theme.colors.white};
    margin-top: 1.5rem;
    font-size: 1rem;
    display: block;
`;

export const PostContent = styled.div`
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.white};

    iframe {
        width: 100%;
        min-height: 350px;
        padding: 0.5rem 0;
    }

    p, ul {
        margin: 1.5rem 0;
    }

    ul {
        padding-left: 1.5rem;

        li {
            margin: 0.5rem 0;
        }
    }

    a:hover {
        color: ${props => props.theme.colors.yellow_500};
    }

    pre {
        border-radius: 0.5rem;
        background: ${props => props.theme.colors.gray_700};
        padding: 0.5rem;
        color: ${props => props.theme.colors.white};
    }

    img {
        max-width: 720px !important:
        max-height: 410px;
        border-radius: 15px;
    }
`;