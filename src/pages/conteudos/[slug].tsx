import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { Container, ContainerPost, PostContent, PostDate, PostTitle } from "../../components/SingleContent/styles";
import Image from "next/image";

type PostType = {
  post: {
    slug: string;
    title: string;
    content: string;
    cover: string;
    updatedAt: string;
  };
};

function PostDetails({ post }: PostType) {
  return (
    <Container>
      <ContainerPost>
        <Image
          width={720}
          height={420}
          quality={100}
          src={post.cover}
          alt={post.title}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8Ool3EwAGIAI4bTwgvAAAAABJRU5ErkJggg=="
        />
        <PostTitle>
            {post.title}
        </PostTitle>
        <PostDate>
            {post.updatedAt}
        </PostDate>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }}>
        </PostContent>
      </ContainerPost>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  const prismic = await getPrismicClient(context.req);
  const response = await prismic.getByUID("blog-content", String(slug), {});

  if (!response) {
    return {
      redirect: {
        destination: "/conteudos",
        permanent: false,
      },
    };
  }

  const post = {
    slug: slug,
    title: RichText.asText(response.data.title),
    cover: response.data.cover.url,
    content: RichText.asHtml(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};

export default PostDetails;
