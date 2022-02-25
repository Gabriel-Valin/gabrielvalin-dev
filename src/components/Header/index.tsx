import { Container, HeaderContent, HeaderNav, TitleIcon, TitleText, ContainerProfileUser } from './style'
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
    const { pathname } = useRouter()

    return (
        <Container>
            <HeaderContent>
                <ContainerProfileUser>
                    <TitleIcon>@</TitleIcon><TitleText>gvt3ch</TitleText>
                </ContainerProfileUser>
                <HeaderNav>
                    <Link href='/' passHref><a className={pathname == '/' ? 'active' : ''}>Sobre mim</a></Link>
                    <Link href='/conteudos' passHref><a className={pathname == '/conteudos' ? 'active' : ''}>Conteudos</a></Link>
                </HeaderNav>
            </HeaderContent>
        </Container>
    );
}

export default Header;