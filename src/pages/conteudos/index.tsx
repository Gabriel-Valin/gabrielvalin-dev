/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-title-in-document-head */
import Image from "next/image";
import {
  Container,
  ContainerPost,
  ContainerSection,
  TitlePost,
  TitleData,
  TitleIntroduction,
  ContainerPostBody,
} from "../../components/Contents/styles";
import Link from "next/link";
import Pagination from "../../components/Pagination";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import { useState } from "react";
import { Head } from "next/document";

export type Posts = {
  slug: string;
  title: string;
  cover: string;
  content: string;
  updateAt: string;
};

type PostProps = {
  posts: Posts[];
  page: number;
  totalPages: number;
};

function Contents({ posts, page, totalPages }: PostProps) {
  const [postsPublisheds, setPostsPublisheds] = useState<Posts[] | any>(posts);

  return (
    <Container>
      <ContainerSection>
        {postsPublisheds?.map((post: Posts) => (
          <ContainerPost key={post.slug}>
            <Link href={`conteudos/${post.slug}`} passHref>
              <a key={post.slug}>
                <Image
                  width={720}
                  height={420}
                  quality={100}
                  src={post.cover}
                  alt={post.title}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8Ool3EwAGIAI4bTwgvAAAAABJRU5ErkJggg=="
                />
              </a>
            </Link>
            <ContainerPostBody>
              <TitlePost>
                <Link href={`conteudos/${post.slug}`} passHref>
                  {post.title}
                </Link>
              </TitlePost>
              <TitleData>{post.updateAt}</TitleData>
              <TitleIntroduction>{post.content}</TitleIntroduction>
            </ContainerPostBody>
          </ContainerPost>
        ))}
        <Pagination
          pageNumber={page}
          totalPage={totalPages}
          setPosts={setPostsPublisheds}
        />
      </ContainerSection>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = await getPrismicClient();
  const response = await client.getByType("blog-content", {
    fetch: ["blog-content.title", "blog-content.content", "blog-content.cover"],
    pageSize: 2,
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  const { results } = response;

  const posts = results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      cover: post.data.cover.url,
      content:
        post.data.content.filter(
          (cnt: { type: string }) => cnt.type === "paragraph"
        )?.text ?? "",
      updateAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
      page: response.page,
      totalPages: response.total_pages,
    },
    revalidate: 10,
  };
};
export default Contents;
