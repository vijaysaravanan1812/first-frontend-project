import { useState } from "react"; // importing the hook

interface RecommendedShow {
    id: number,
    tittle: string,
    thumbNailUrl: string,
    category: string,
    releaseDate: string,
    description: string,
    isInWatchList: boolean,
}


const RecommendedShowList: React.FC = () => {

    const [shows , setShows] = useState<RecommendedShow[]>([
        {
            id: 1502423,
            tittle: "Money Heist",
            thumbNailUrl: "https://imgs.search.brave.com/CcRRBCKQFRWexQEldGgEVB04NpUDpdOnm-F8yFPNsAY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9ETXdPVEJp/TkdZdE1UZzVaQzAw/WWpjeExXRm1ObUV0/TVdJNU9UUTRNemN6/T0RkbVhrRXlYa0Zx/Y0dkZVFYVnlOVFU1/TlRBeU5EVUAuanBn",
            category: "Thriller",
            releaseDate: "2017",
            description: " Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
            isInWatchList : false,
        },
        {
            id: 1502425,
            tittle: "Constellation",
            thumbNailUrl: "https://imgs.search.brave.com/4qLW-kTJ372uEIkDrbmbb1kwcqYRgBQUaQ2r36akJe0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1No/VDZNazQydENQTm9O/Z25KTlRVem0tMzIw/LTgwLmpwZw",
            category: "Thriller",
            releaseDate: "2023",
            description: "When a fatal accident occurs on board the International Space Station, a lone astronaut makes the heroic journey back to Earth, only to discover key p...",
            isInWatchList: true,
        },
        {
            id: 1502426,
            tittle: "Game of Thrones",
            thumbNailUrl: "https://imgs.search.brave.com/_EMEgL5x3dg4L5a6SXyBoyJNzV4Fp1IzxZiymG3uE40/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtZS1vZi10/aHJvbmVzLXBpY3R1/cmVzLWFkOWQwMmp4/b2F3cGtwcWcuanBn",
            category: "Thriller",
            releaseDate: "2012",
            description: "Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power. ",
            isInWatchList: false,
        },
        {
            id: 1502429,
            tittle: "Friends",
            thumbNailUrl: "https://imgs.search.brave.com/9lYBrzdi371VJYVWIBmjnf2qwiSQ0rj29UTPb2y_C-U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5EVmtZalUw/TXpjdE1XUm1aaTAw/TlRreExUZ3daV0V0/T1dWaFlqWmxZamxs/WW1VNFhrRXlYa0Zx/Y0dkZVFYVnlOVEE0/TnpZMU16WUAuanBn",
            category: "sitcom",
            releaseDate: "1994",
            description: "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work",
            isInWatchList: false,
        }
    ]);

    //conditional rendering
    if (shows && shows.length == 0) {
        return (
            <div className="alert alert-warning" role="alert">
                No recommentation found, Watch more videos to recommend videos based on your interest .
            </div>
        );
    }


    const handleManageWatchList = (index : number) =>{
        const duplicateShow = [...shows];
        //updating the state immutably
        duplicateShow[index].isInWatchList = !duplicateShow[index].isInWatchList;
        setShows(duplicateShow);
    }

    return (
        // List and Keys
        <div className="row">
            {
                shows.map((show, index) => {
                    return (
                        <div className="col-md-3" key={show.id}>
                        <div className="card">
                            <img src={show.thumbNailUrl} className="card-img-top" height={400} width={250} alt={show.tittle} />
                            <div className="card-body">
                                <h5 className="card-title">{show.tittle}</h5>
                                <p className="card-text">{show.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{show.category}</li>
                                <li className="list-group-item">{show.releaseDate}</li>
                            </ul>
                            <div className="card-body">
                                <button className="btn btn-success" onClick={() =>{
                                    handleManageWatchList(index);
                                }} >
                                    {
                                        // conditional rendoring
                                        show.isInWatchList?  "Remove from watch list" : "Add to Watch List" 
                                    }
                                </button>
                            </div>

                        </div>
                    </div>

                    );    
                })
            }

        </div>
    );
}

export default RecommendedShowList