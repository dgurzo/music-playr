import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';

interface Genre {
    _id: string,
    name: string,
    image: string
}

export const Search: FunctionComponent = () =>  {
    const [Genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        const getGenres = async () => {
            let response = await fetch("http://localhost:5000/api/genres/get/genres");
            let genres = await response.json();
            console.log(genres);
            setGenres(genres);
        }

        getGenres();
    }, []);

    return (
        <div style={{marginBottom: "80px"}}>
            <h2 style={{marginLeft: '30px'}}>Műfajok böngészése</h2>
                
            <CardContainer>
                {Genres.map((genre) => (
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