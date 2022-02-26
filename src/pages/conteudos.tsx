import Image from "next/image";
import { Container, ContainerPost, ContainerSection, TitlePost, TitleData, TitleIntroduction, ContainerPostBody } from "../components/Contents/styles";
import nodejs from '../../public/nodejs.jpeg'
import docker from '../../public/docker.jpeg'
import Link from "next/link";
import Pagination from "../components/Pagination";

function Contents() {
    return (
        <Container>
            <ContainerSection>
                <ContainerPost>
                    <Image src={nodejs} alt='blog-post'/>
                    <ContainerPostBody>
                        <TitlePost>
                            <Link href='/' passHref>
                                Como construir uma API Rest em Node.js?
                            </Link>
                        </TitlePost>
                        <TitleData>
                            26/02/2022
                        </TitleData>
                        <TitleIntroduction>
                            Neste artigo iremos abordar como podemos construir uma interface de aplicacao utilizando Node.js, Express e JWT
                            para poder construir rotas que devem ser acessadas por apenas os usuarios autenticados.
                        </TitleIntroduction>
                    </ContainerPostBody>
                </ContainerPost>
                <ContainerPost>
                    <Image src={docker} alt='blog-post'/>
                    <ContainerPostBody>
                        <TitlePost>
                            <Link href='/' passHref>
                                Docker e Node.js
                            </Link>
                        </TitlePost>
                        <TitleData>
                            26/02/2022
                        </TitleData>
                        <TitleIntroduction>
                            Neste artigo iremos abordar como podemos construir uma interface de aplicacao utilizando Node.js, Express e JWT
                            para poder construir rotas que devem ser acessadas por apenas os usuarios autenticados.
                        </TitleIntroduction>
                    </ContainerPostBody>
                </ContainerPost>
                <Pagination />
            </ContainerSection>
        </Container>
        
    );
}

export default Contents;