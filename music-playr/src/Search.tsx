import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';

interface Genre {
    _id: string,
    name: string
}

export const Search: FunctionComponent = () =>  {
    const [Genres, setGenres] = useState<Genre[]>([]);
    //let history = useHistory();

    useEffect(() => {
        /*fetch("http://localhost:5000/api/genres/get/genres")
        .then(response => response.json())
        .then(response => console.log(response))
        .then(response => {
            setGenres(r)
        });*/
        const getGenres = async () => {
            let response = await fetch("http://localhost:5000/api/genres/get/genres");
            let genres = await response.json();
            console.log(genres);
            setGenres(genres);
        }

        getGenres();
    }, []);

    /*const getGenres = async () => {
        let response = await fetch("http://localhost:5000/api/genres/get/genres");
        let genres = await response.json();
        console.log(genres);
        setGenres(genres);
        console.log(Genres);
    }*/

    /*const handleCardClick = (genre: Genre) => {
        history.push({
            pathname: '/genre',
            state: {
                genre
            }
        });
    }*/

    return (
        <div style={{marginBottom: "80px"}}>
            <h2 style={{marginLeft: '30px'}}>Műfajok böngészése</h2>
                
            <CardContainer>
                {Genres.map((genre: Genre) => (
                    /*<Card key={genre._id} onClick={(e) => handleCardClick(genre)}>*/
                    <Link to={{
                        pathname: '/genre',
                        state: genre
                    }}  key={genre._id} style={{textDecoration: 'none', color: 'white'}}>
                        <Card> 
                            <CardImage></CardImage>
                            <CardText>
                                <h4>{genre.name}</h4>
                            </CardText>
                        </Card>
                    </Link>
                ))}
            </CardContainer>
        </div>
    )
}