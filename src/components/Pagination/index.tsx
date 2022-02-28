import {
  PaginationButton,
  PaginationContainer,
  PaginationSection,
} from "./styles";

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import { Posts } from "../../pages/conteudos";
import { Dispatch, SetStateAction, useState } from "react";

type PaginationTypeProps = {
  pageNumber: number;
  totalPage: number;
  setPosts: Dispatch<SetStateAction<Posts[] | any>>
};

function Pagination({ pageNumber, totalPage, setPosts }: PaginationTypeProps) {
    
    const [page, setPage] = useState<number>(pageNumber)

    const postToPagination = async (pageNumber: number) => {
        const client = await getPrismicClient()
        const posts = await client.getByType('blog-content', {
            fetch: ['blog-content.title', 'blog-content.content', 'blog-content.cover'],
            pageSize: 1,
            orderings: {
                field: 'document.first_publication_date',
                direction: 'desc',
              },
              page: Number(pageNumber)
        })
  
        const { results } = posts
  
        const paginationPosts = results.map(post => {
            return {
                slug: post.uid,
                title: RichText.asText(post.data.title),
                cover: post.data.cover.url ?? '',
                content: post.data.content.filter((cnt: { type: string; }) => cnt.type === 'paragraph')?.text ?? '',
                updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
            }
        })

        return paginationPosts
    }
  
    const navigatePage = async (pageNumber: number) => {
        const response =  await postToPagination(Number(pageNumber))
        
        if (response.length === 0) return;
        
        setPage(pageNumber)
        setPosts(response)
    }

  return (
    <PaginationSection>
      {page >= 2 && (
        <PaginationContainer>
          <PaginationButton  onClick={() => navigatePage(Number(1))}>
            <FiChevronsLeft size={25} color="#fff" />
          </PaginationButton>
          <PaginationButton  onClick={() => navigatePage(Number(page - 1 ))}>
            <FiChevronLeft size={25} color="#fff" />
          </PaginationButton>
        </PaginationContainer>
      )}
      {page < totalPage && (
        <PaginationContainer>
          <PaginationButton onClick={() => navigatePage(Number(page + 1))}>
            <FiChevronRight size={25} color="#fff" />
          </PaginationButton>
          <PaginationButton  onClick={() => navigatePage(totalPage)}>
            <FiChevronsRight size={25} color="#fff" />
          </PaginationButton>
        </PaginationContainer>
      )}
    </PaginationSection>
  );
}

export default Pagination;
