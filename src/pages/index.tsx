import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import coding from '../../public/coding.svg'
import knowledge from '../../public/knowledge.svg'
import github from '../../public/github.svg'

import js from '../../public/js.png'
import html from '../../public/html.png'
import css from '../../public/css.webp'
import reactjs from '../../public/reactjs.png'
import nextjs from '../../public/nextjs.png'
import nodejs from '../../public/nodejs.png'
import php from '../../public/php.png'
import laravel from '../../public/laravel.png'
import twitter from '../../public/twitter.png'
import githubpng from '../../public/github.png'
import linkedin from '../../public/linkedin.png'
import gmail from '../../public/gmail.png'

import { Container, ContainerHeader, ContainerSection, TitleProfile, DescriptionProfile, ContainerLeft, ImageContainer, Divisor, ContainerSectionTwo, Technologies, ImageDiv, ContainerSectionThree, Social, ImageDivSocial } from '../components/Index/styles'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Gabriel Valin - Software Engineer ✔️
        </title>
      </Head>
      <Container>
        <ContainerHeader>
          <ContainerSection>
            <ContainerLeft>
              <TitleProfile>Gabriel Valin  Software Engineer.</TitleProfile>
              <DescriptionProfile>
                22 anos de idade. <br />
                Vivendo em Botucatu interior de São Paulo há 18 anos. <br />
                Atuando há 3 anos como Desenvolvedor de Software, construindo e desenvolvendo aplicações e sistemas
                web & mobile, sempre buscando a cada dia melhorar o aprendizado e se manter atualizado sobre o mundo da tecnologia.
              </DescriptionProfile>
              <Technologies>
                <ImageDiv>
                  <Image width={40} height={40} src={js} alt='js'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={html} alt='html'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={css} alt='css'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={reactjs} alt='reactjs'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={nextjs} alt='nextjs'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={nodejs} alt='nodejs'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={php} alt='php'/>
                </ImageDiv>
                <ImageDiv>
                  <Image width={40} height={40} src={laravel} alt='laravel'/>
                </ImageDiv>
              </Technologies>
            </ContainerLeft>
            <ImageContainer>
              <Image width={400} height={400} src={coding} alt='coding-picture'/>
            </ImageContainer>
          </ContainerSection>
        </ContainerHeader>
        <Divisor />
        <ContainerSectionTwo>
            <ImageContainer>
              <Image width={400} height={400} src={knowledge} alt='knowledge-img'/>
            </ImageContainer>
            <ContainerLeft>
              <TitleProfile>Fatec - Botucatu 2020-2023</TitleProfile>
              <DescriptionProfile>
                O Tecnólogo em Análise e Desenvolvimento de Sistemas analisa, projeta, documenta,
                especifica, testa, implanta e mantém sistemas computacionais de informação. 
                Esse profissional trabalha, também, com ferramentas computacionais, 
                equipamentos de informática e metodologia de projetos na produção de sistemas. 
                Raciocínio lógico, emprego de linguagens de programação e de metodologias de 
                construção de projetos, preocupação com a qualidade, usabilidade, robustez, 
                integridade e segurança de programas computacionais são fundamentais a atuação desse profissional.
              </DescriptionProfile>
            </ContainerLeft>
        </ContainerSectionTwo>
        <Divisor />
        <ContainerSectionThree>
            <ContainerLeft>
              <TitleProfile>Projetos, Network & Trabalhos</TitleProfile>
              <DescriptionProfile>
                Nessa seção se encontra algumas das redes sociais e locais em que você pode se conectar
                comigo para bater um papo ou até mesmo conversar sobre outras coisas como projetos open source ou não, conceitos,
                metodologias, desenvolvimento, TUDO! 
              </DescriptionProfile>
              <Social>
                <ImageDivSocial>
                  <Link href='https://twitter.com/gvt3ch'passHref>
                    <a><Image width={40} height={40} src={twitter} alt='twitter-img'/></a>
                  </Link>
                </ImageDivSocial>
                <ImageDivSocial>
                  <Link href='https://github.com/Gabriel-Valin'passHref>
                    <a><Image width={40} height={40} src={githubpng} alt='github-img'/></a>
                  </Link>
                </ImageDivSocial>
                <ImageDivSocial>
                  <Link href='https://www.linkedin.com/in/gabriel-valin-dev/'passHref>
                    <a><Image width={40} height={40} src={linkedin} alt='linkedin-img'/></a>
                  </Link>
                </ImageDivSocial>
                <ImageDivSocial>
                  <Link href='mailto:gabrielvalincontato@gmail.com'passHref>
                    <a><Image width={40} height={40} src={gmail} alt='gmail-img'/></a>
                  </Link>
                </ImageDivSocial>
              </Social>
            </ContainerLeft>
            <ImageContainer>
              <Image width={400} height={400} src={github} alt='activities-img'/>
            </ImageContainer>
          </ContainerSectionThree>
      </Container>
    </>
  ) 
}

export default Home
