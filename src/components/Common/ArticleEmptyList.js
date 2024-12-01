import EmptyListIcon from '@/components/Icon/EmptyListIcon'

export default function ArticleEmptyList({ msg }) {
    return (
        <div className="article-empty-list flex flex-col justify-center items-center text-center mt-24">
            <EmptyListIcon />
            <div className="py-4 text-sm text-slate-400 font-normal">{msg || '暂无数据哦~'}</div>
        </div>
    )
}
