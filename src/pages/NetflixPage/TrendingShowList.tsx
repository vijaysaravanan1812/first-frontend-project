import React from "react"
import { useState } from "react"; // importing the hook
import TrendingShow from "./TrendingShow"

const TrendingShowList: React.FC = () => {


  const [resolution, setResolution] = useState('HD');  // array destructuring
  console.log(resolution);
  console.log(setResolution);
  //handleEvent 
  const handleSwitchResolution = () => {
    console.log('Clicked');
    setResolution('4K');
  }

  const [shows] = useState([
    {
      id: 1502423,
      trendingRank: 1,
      tittle: "Money Heist",
      thumbNailUrl: "https://imgs.search.brave.com/CcRRBCKQFRWexQEldGgEVB04NpUDpdOnm-F8yFPNsAY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9ETXdPVEJp/TkdZdE1UZzVaQzAw/WWpjeExXRm1ObUV0/TVdJNU9UUTRNemN6/T0RkbVhrRXlYa0Zx/Y0dkZVFYVnlOVFU1/TlRBeU5EVUAuanBn",
      category: "Thriller",
      releaseDate: "2017",
      description: " Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
      isInWatchList: true,
    },
    {
      id: 1502425,
      trendingRank: 2,
      tittle: "Constellation",
      thumbNailUrl: "https://imgs.search.brave.com/4qLW-kTJ372uEIkDrbmbb1kwcqYRgBQUaQ2r36akJe0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1No/VDZNazQydENQTm9O/Z25KTlRVem0tMzIw/LTgwLmpwZw",
      category: "Thriller",
      releaseDate: "2023",
      description: "When a fatal accident occurs on board the International Space Station, a lone astronaut makes the heroic journey back to Earth, only to discover key p...",
      isInWatchList: false,
    },
    {
      id: 1502426,
      trendingRank: 5,
      tittle: "Game of Thrones",
      thumbNailUrl: "https://imgs.search.brave.com/_EMEgL5x3dg4L5a6SXyBoyJNzV4Fp1IzxZiymG3uE40/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtZS1vZi10/aHJvbmVzLXBpY3R1/cmVzLWFkOWQwMmp4/b2F3cGtwcWcuanBn",
      category: "Thriller",
      releaseDate: "2012",
      description: "Trouble is brewing in Westeros. For the inhabitants of this world, control of the Iron Throne holds the lure of great power. ",
      isInWatchList: false,
    },
    {
      id: 1502429,
      trendingRank: 7,
      tittle: "Friends",
      thumbNailUrl: "https://imgs.search.brave.com/9lYBrzdi371VJYVWIBmjnf2qwiSQ0rj29UTPb2y_C-U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5EVmtZalUw/TXpjdE1XUm1aaTAw/TlRreExUZ3daV0V0/T1dWaFlqWmxZamxs/WW1VNFhrRXlYa0Zx/Y0dkZVFYVnlOVEE0/TnpZMU16WUAuanBn",
      category: "sitcom",
      releaseDate: "1994",
      description: "This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work",
      isInWatchList: false,
    }
  ]);


  return (
    <div className="row">
      <h3>Enjoy Watching shows on {resolution} | {'  '}
        <button className="btn btn-sm btn-warning"
          onClick={handleSwitchResolution}
        >
          Switch to 4k
        </button>
      </h3>
      <div className="col-md-3" >
        <TrendingShow
          tittle={shows[0].tittle}
          trendingRank={shows[0].trendingRank}
          thumbNailUrl={shows[0].thumbNailUrl}
          releaseDate={shows[0].releaseDate}
          category={shows[0].category}
          isInWatchList ={shows[0].isInWatchList} 
          
        >{shows[0].description}</TrendingShow>
      </div>
      <div className="col-md-3">
        <TrendingShow
          tittle={shows[1].tittle}
          trendingRank={shows[1].trendingRank}
          thumbNailUrl={shows[1].thumbNailUrl}
          releaseDate={shows[1].releaseDate}
          category={shows[1].category}
          isInWatchList ={shows[1].isInWatchList} 
        >{shows[1].description}</TrendingShow>
      </div>
      <div className="col-md-3">
      <TrendingShow
          tittle={shows[2].tittle}
          trendingRank={shows[2].trendingRank}
          thumbNailUrl={shows[2].thumbNailUrl}
          releaseDate={shows[2].releaseDate}
          category={shows[2].category}
          isInWatchList ={shows[2].isInWatchList} 
        >{shows[2].description}</TrendingShow>
      </div>
      <div className="col-md-3">
      <TrendingShow
          tittle={shows[3].tittle}
          trendingRank={shows[3].trendingRank}
          thumbNailUrl={shows[3].thumbNailUrl}
          releaseDate={shows[3].releaseDate}
          category={shows[3].category}
          isInWatchList ={shows[3].isInWatchList} 
        >{shows[3].description}</TrendingShow>
      </div>

    </div>
  )
}

export default TrendingShowList