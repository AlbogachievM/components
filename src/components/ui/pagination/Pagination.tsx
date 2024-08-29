import {DOTS, usePagination} from "../../../hooks/usePagination.ts";
import {Icon} from "../icon/icon.tsx";
import {SelectItem, Selector} from "../selector/Selector.tsx";
import s from './styles.module.scss';
import {TextFormat} from "../typography/TextFormat.tsx";
import {KeyboardEventHandler} from "react";

interface Props {
    onPageChange: (page: number) => void,
    setPageSize: (pageSize: string) => void,
    totalCount: number,
    siblingCount: number,
    currentPage: number,
    pageSize: string,
}

const Pagination = (props: Props) => {
    const {onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, setPageSize} = props

    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize});

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    const onNext = () => onPageChange(currentPage + 1);
    const onPrevious = () => onPageChange(currentPage - 1);

    const handleKeyDownPrevious: KeyboardEventHandler<HTMLButtonElement> = e => {
        // Проверка, что нажата клавиша Enter или пробел
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault() // Предотвращение действия по умолчанию, если необходимо
            onPrevious()
        }
    }

    const handleKeyDownNext: KeyboardEventHandler<HTMLButtonElement> = e => {
        // Проверка, что нажата клавиша Enter или пробел
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault() // Предотвращение действия по умолчанию, если необходимо
            onNext()
        }
    }

    const handleClickPage = (page: number | string) => {
        if (typeof page === 'number') onPageChange(page)
    }

    const handleClickDownPage = (key: string, page: number | string) => {
        if (key === 'Enter') handleClickPage(page)
    }

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <div className={s.pagination}>
            <button className={s.buttonArrow}
                    onClick={onPrevious}
                    onKeyDown={handleKeyDownPrevious}
                    disabled={currentPage === 1}>
                <Icon iconId={'arrow-pagination-left'}/>
            </button>
            {paginationRange.map(pageNumber => {

                if (pageNumber === DOTS) {
                    return <span className={s.dots}>&#8230;</span>;
                }

                return (
                    <button className={`${s.button} ${currentPage === pageNumber ? s.active : ''}`}
                            onClick={() => handleClickPage(pageNumber)}
                            onKeyDown={e => handleClickDownPage(e.key, pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            <button className={s.buttonArrow}
                    onClick={onNext}
                    onKeyDown={handleKeyDownNext}
                    disabled={currentPage === lastPage}>
                <Icon iconId={'arrow-pagination-right'}/>
            </button>

                <div className={s.blockSelector}>
                    <TextFormat variant={'body2'}>Показать</TextFormat>
                    <Selector className={s.selector} onValueChange={setPageSize} value={pageSize}>
                        <SelectItem value={'10'}>10</SelectItem>
                        <SelectItem value={'20'}>20</SelectItem>
                        <SelectItem value={'30'}>30</SelectItem>
                        <SelectItem value={'50'}>50</SelectItem>
                        <SelectItem value={'100'}>100</SelectItem>
                    </Selector>
                    <TextFormat variant={'body2'}>на странице</TextFormat>
                </div>
        </div>
    );
};

export default Pagination;