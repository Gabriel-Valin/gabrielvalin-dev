import { PaginationButton, PaginationContainer, PaginationSection } from "./styles";

import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

function Pagination() {
    return (
        <PaginationSection>
            <PaginationContainer>
                <PaginationButton>
                    <FiChevronsLeft size={25} color='#fff' />
                </PaginationButton>
                <PaginationButton>
                    <FiChevronLeft size={25} color='#fff' />
                </PaginationButton>
            </PaginationContainer>
            <PaginationContainer>
                <PaginationButton>
                    <FiChevronRight size={25} color='#fff' />
                </PaginationButton>
                <PaginationButton>
                    <FiChevronsRight size={25} color='#fff' />
                </PaginationButton>
            </PaginationContainer>
        </PaginationSection>
    );
}

export default Pagination;