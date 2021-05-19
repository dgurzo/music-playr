import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';
import { Link } from 'react-router-dom';

const ProfileStyle = styled("div")`
    position: relative;
    margin-top: 80px;
    margin-left: 30px;
`;

const Image = styled("img")`
    border: 2px solid black;
    float: left;
    margin: 0px 30px;
    border-radius: 8px;
    width: 180px;
    height: 180px;
`;

const DataP = styled("p")`
    margin-bottom: 120px;
`;

interface Artist {
    _id: string,
    name: string,
    _genre_id: string
}

interface Album {
    _id: string,
    name: string,
    release_date: Date,
    _genre_id: string[],
    _artist_id: string[]
}

export const Collections: FunctionComponent = () => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [albums, setAlbums] = useState<Album[]>([]);
    let userId = localStorage.getItem('userid');

    useEffect(() => {
        getFavArtists();
        getFavAlbums();
    }, []);

    const getFavArtists = async () => {
        let response = await fetch("http://localhost:5000/favouriteartist/getfavouriteartists", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userId
            })
        });
        let fav = await response.json();
        console.log(fav);

        let s: any[] = [];
        for(let i = 0; i < fav.length; i++) {
          s.push(fav[i].artist[0]);
        }
        console.log(s);
        setArtists(s);
    }

    const getFavAlbums = async () => {
        let response = await fetch("http://localhost:5000/favouritealbum/getfavouritealbums", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: userId
            })
        });
        let fav = await response.json();
        console.log(fav);

        let s: any[] = [];
        for(let i = 0; i < fav.length; i++) {
          s.push(fav[i].album[0]);
        }
        console.log(s);
        setAlbums(s);
    }

    return (
        <div>
            <ProfileStyle>
                <h1>My collections</h1>
            </ProfileStyle>
                
            <h2 style={{margin: '30px 0 0 30px'}}>Liked artists</h2>
            <CardContainer>
                {artists.map(artist => (
                    <Link to={{
                        pathname: "/artist",
                        state: artist
                    }} key={artist._id} style={{textDecoration: 'none', color: 'white'}}>
                        <Card key={artist._id}>
                            <CardImage></CardImage>
                            <CardText>
                                <h4>{artist.name}</h4>
                            </CardText>
                        </Card>
                </Link>
                ))} 
            </CardContainer>

            <h2 style={{margin: '30px 0 0 30px'}}>Liked albums</h2>
            <CardContainer style={{marginBottom: '80px'}}>
                {albums.map(album => (
                    <Link to={{
                        pathname: "/album",
                        state: album
                    }} key={album._id} style={{textDecoration: 'none', color: 'white'}}>
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
    );
}