import React, { useEffect, useState, FunctionComponent} from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';
import { Link } from 'react-router-dom';
import { History } from 'history';
import AudioPlayer from 'react-h5-audio-player';

const GenreStyle = styled("div")`
    position: relative;
    margin-top: 80px;
`;

interface Genre {
    _id: string,
    name: string,
    image: string
}

interface Artist {
    _id: string,
    name: string,
    _genre_id: string[]
}

interface Props {
    history: History
}

export const GenrePage: FunctionComponent<Props> = ({history}) => {
    const [genre, setGenre] = useState<any>(history.location.state);
    const [artists, setArtistis] = useState<Artist[]>([]);

    useEffect(() => {
        console.log(genre);
        GetArtists();
    }, []);

    const GetArtists = async () => {
        let response = await fetch("http://localhost:5000/api/genres/get/artists", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                genreid: genre._id
            })
        });
        let art = await response.json();
        console.log(art);
        setArtistis(art);
        console.log(artists);
    }
    
    return (
        <div>
            <GenreStyle>
                <h1 style={{marginLeft: '30px', marginBottom: '20px'}}>{genre.name}</h1>
            </GenreStyle>
            
            <h2 style={{margin: '40px 0 0 30px'}}>Artists</h2>
            <CardContainer>
                {artists.map((artist, i) => (
                    <Link to={{
                        pathname: '/artist',
                        state: artist
                    }}  key={artist._id} style={{textDecoration: 'none', color: 'white'}}>
                        <Card>
                            <CardImage/>
                            <CardText>
                                <h4>{artist.name}</h4>
                            </CardText> 
                        </Card>
                    </Link>
                    ))
                }
            </CardContainer>
        </div>
    )
}