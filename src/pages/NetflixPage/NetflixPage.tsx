
import LatestShow from "./LatestShow"
import TrendingShowList from "./TrendingShowList"
import RecommendedShowList from "./RecommendedShowList"
import Subscription from "./Subscription"

const NetflixPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Netflix!</h1>
            <h2>Popular Shows | Props demo</h2>
            <div className="row">
                <div className="col-md-3" >
                    <LatestShow
                        tittle="Friends"
                        thumbNailUrl="https://imgs.search.brave.com/9lYBrzdi371VJYVWIBmjnf2qwiSQ0rj29UTPb2y_C-U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5EVmtZalUw/TXpjdE1XUm1aaTAw/TlRreExUZ3daV0V0/T1dWaFlqWmxZamxs/WW1VNFhrRXlYa0Zx/Y0dkZVFYVnlOVEE0/TnpZMU16WUAuanBn"
                        category="sitcom"
                        releaseDate="1994"
                    >
                        This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work.

                    </LatestShow>

                </div>
                <div className="col-md-3">
                    <LatestShow
                        tittle="Money Heist"
                        thumbNailUrl="https://imgs.search.brave.com/CcRRBCKQFRWexQEldGgEVB04NpUDpdOnm-F8yFPNsAY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9ETXdPVEJp/TkdZdE1UZzVaQzAw/WWpjeExXRm1ObUV0/TVdJNU9UUTRNemN6/T0RkbVhrRXlYa0Zx/Y0dkZVFYVnlOVFU1/TlRBeU5EVUAuanBn"
                        category="Thriller"
                        releaseDate="2017"
                    >
                        Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.
                    </LatestShow>
                </div>
                <div className="col-md-3">
                    <LatestShow
                        tittle="Constellation"
                        thumbNailUrl="https://imgs.search.brave.com/4qLW-kTJ372uEIkDrbmbb1kwcqYRgBQUaQ2r36akJe0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1No/VDZNazQydENQTm9O/Z25KTlRVem0tMzIw/LTgwLmpwZw"
                        category="Thriller"
                        releaseDate="2023"
                    >
                        When a fatal accident occurs on board the International Space Station, a lone astronaut makes the heroic journey back to Earth, only to discover key p...
                    </LatestShow>
                </div>
                <div className="col-md-3">
                    <LatestShow
                        tittle="Game of Thrones"
                        thumbNailUrl="https://imgs.search.brave.com/_EMEgL5x3dg4L5a6SXyBoyJNzV4Fp1IzxZiymG3uE40/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtZS1vZi10/aHJvbmVzLXBpY3R1/cmVzLWFkOWQwMmp4/b2F3cGtwcWcuanBn"
                        category="Thriller"
                        releaseDate="2012"
                    >
                        Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power.
                    </LatestShow>
                </div>

            </div>

            <hr />            
            <h2>Trending Shows | Props, State, Events demo</h2>
            <TrendingShowList></TrendingShowList>

            <hr />
            <h2>Recommended Show | Props, State , Events, Lists and Keys, Conditional rendoring demo</h2>
            <RecommendedShowList></RecommendedShowList>

            <hr />
            <h2>Subscription | Styling demo</h2>
            <Subscription></Subscription>

        </div>
    )
}

export default NetflixPage