function renderPaginationBar(totalPages, newCurrentPage) {
    const paginationBarEntity = document.getElementsByClassName('pagination-bar')[0];
    let newBarVersion = '';

    if(newCurrentPage > 1) {
        newBarVersion += `<li class="pagination-bar__elem prev-button" onclick="renderPaginationBar(${totalPages}, ${newCurrentPage-1})"><i class="fa-solid fa-chevron-left"></i>Prev</li>`;
    }

    if(newCurrentPage - 3 > 0) {
        newBarVersion += `<li class="pagination-bar__elem number" onclick="renderPaginationBar(${totalPages}, 1)">1</li>`;
        newBarVersion += `<li class="pagination-bar__elem dots">...</li>`;
        for(let i = newCurrentPage-1; i <= newCurrentPage+1; ++i) {
            if(i < totalPages) {
                if(i == newCurrentPage) {
                    newBarVersion += `<li class="pagination-bar__elem number paggination-active-page" onclick="renderPaginationBar(${totalPages}, ${i})">${i}</li>`;
                }
                else {
                    newBarVersion += `<li class="pagination-bar__elem number" onclick="renderPaginationBar(${totalPages}, ${i})">${i}</li>`;
                }
            }
        }
    }
    else {
        for(let i = 1; i <= newCurrentPage+1;++i) {
            if(i == newCurrentPage) {
                newBarVersion += `<li class="pagination-bar__elem number paggination-active-page" onclick="renderPaginationBar(${totalPages}, ${i})">${i}</li>`;
            }
            else {
                newBarVersion += `<li class="pagination-bar__elem number" onclick="renderPaginationBar(${totalPages}, ${i})">${i}</li>`;
            }
        }
    }

    if(totalPages - newCurrentPage >= 3) {
        newBarVersion += `<li class="pagination-bar__elem dots">...</li>`;
    }

    if(newCurrentPage == totalPages) {
        newBarVersion += `<li class="pagination-bar__elem number paggination-active-page" onclick="renderPaginationBar(${totalPages}, ${totalPages})">${totalPages}</li>`;
    }
    else {
        newBarVersion += `<li class="pagination-bar__elem number" onclick="renderPaginationBar(${totalPages}, ${totalPages})">${totalPages}</li>`;
    }

    if(newCurrentPage < totalPages) {
        newBarVersion += `<li class="pagination-bar__elem next-button" onclick="renderPaginationBar(${totalPages}, ${newCurrentPage+1})">Next<i class="fa-solid fa-chevron-right"></i></li>`;
    }
    paginationBarEntity.innerHTML = newBarVersion;
}

window.addEventListener('load', () => {
    let totalPages = 10;
    renderPaginationBar(totalPages,1);
});