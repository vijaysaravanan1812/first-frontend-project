
interface LatestShowProps {
    tittle: string;
    thumbNailUrl: string;
    children: string;
    category : string;
    releaseDate : string;
}


const LatestShow: React.FC<LatestShowProps> = (props) => {
    return (
        <div className="card">
            <img
                src={props.thumbNailUrl}
                className="card-img-top"
                height={400}
                width={250}
                alt={props.tittle}
            />
            <div className="card-body">
                <h5 className="card-title">{props.tittle}</h5>
                <p className="card-text">{props.children}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.category}</li>
                <li className="list-group-item">{props.releaseDate}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Watch Now</a>
            </div>

        </div>

    )
}

export default LatestShow