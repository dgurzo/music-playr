import React, { useEffect, useState, FunctionComponent} from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';
import { GreenButton } from './ui/GreenButton';
import { History } from 'history';
import { Link } from 'react-router-dom';

const ArtistStyle = styled("div")`
    position: relative;
    margin-top: 80px;
`;

interface Artist {
    _id: string,
    name: string,
    _genre_id: string[] 
}

interface Album {
    name: string
    _genre_id: string[],
    _id: string,
    _artist_id: string[],
}

interface Props {
    history: History
}

export const Artist: FunctionComponent<Props> = ({history}) => {
    const [artist, setArtist] = useState<any>(history.location.state);
    const [albums, setAlbums] = useState<Album[]>([]);
    const user = localStorage.getItem('userid');

    useEffect(() => {
        console.log(artist);
        GetAlbums();
        console.log(albums);
    }, []);

    const GetAlbums = async () => {
        let response = await fetch("http://localhost:5000/artist/get/albums", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                artistid: artist._id
            })
        });
        let alb = await response.json();
        console.log(alb);
        setAlbums(alb);
        console.log(alb);
    }

    const handleLike = async () => {
        let userId = localStorage.getItem('userid');
        let response =  await fetch("http://localhost:5000/favouriteartist/like", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userId,
                artistid: artist._id
            })
        });
        let likeres = await response.json();
        console.log(likeres);
        
        if(likeres.delete == "successful") {
            window.alert("Successful delete from favourite artists!");
        } else {
            window.alert("Artist like successful!");
        };
    }

    return (
        <div>
            <ArtistStyle>
                <h1 style={{marginLeft: '30px', marginBottom: '20px'}}>{artist.name}</h1>
                <GreenButton>Play</GreenButton>
                <GreenButton onClick={handleLike}>Like</GreenButton>
            </ArtistStyle>
                
            <h2 style={{margin: '40px 0 0 30px'}}>Albumok</h2>

            <CardContainer>
                {albums.map(album => (
                    <Link to={{
                        pathname: '/album',
                        state: album
                    }}  key={album._id} style={{textDecoration: 'none', color: 'white'}}>
                        <Card key={album._id}>
                            <CardImage></CardImage>
                            <CardText>
                                <h4>{album.name}</h4>
                            </CardText>
                        </Card>
                    </Link>
                ))}
            </CardContainer>
        </div>
    )
}