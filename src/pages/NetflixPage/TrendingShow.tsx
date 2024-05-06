
interface TrendingShowProps {
    id? : number;
    trendingRank: number;
    tittle: string;
    thumbNailUrl: string;
    children: string;
    category: string;
    releaseDate: string;
    isInWatchList: boolean;
}


const TrendingShow: React.FC<TrendingShowProps> = ({
    tittle,
    trendingRank,
    thumbNailUrl,
    category,
    releaseDate,
    children,
    isInWatchList,
}) => {
    return (
        <div>
            <div className="card">
                <img
                    src={thumbNailUrl}
                    className="card-img-top"
                    height={400}
                    width={250}
                    alt={tittle}
                />
                <div className="card-body">
                    <h5 className="card-title">{tittle}</h5>
                    <span className="badge rounded-pill text-bg-primary">Trending at #{trendingRank}</span>
                    <p className="card-text">{children}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{category}</li>
                    <li className="list-group-item">{releaseDate}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="btn btn-success">
                        {
                            isInWatchList ? 'Remove from watch list' : 'Add to watch list'
                        }
                        </a>
                </div>

            </div>
        </div>
    )
}

export default TrendingShow