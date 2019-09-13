import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Card, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    width: 600px;
    justify-content: center;
    align-items: space-between;
`;

const StyledCard = styled(Card)`
    height: 200px;
    width: 50%;
`;

function StarWarsImg() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        Axios.get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log(response);
                const data = response.data.results;
                console.log(data);
                setCharacters(data)
            })
            .catch(error => {
                console.log("This is the error", error)
            })
    }, []);

    return(
        <div className='starWarsCard'>
            {characters.map(data => {
                return(
                    <StyledDiv>
                        <StyledCard>
                            <CardTitle>{data.name}</CardTitle>
                            <CardText>
                                Weight: {data.mass}kg
                            </CardText>
                            <CardText>
                                Height: {data.height}m
                            </CardText>
                        </StyledCard>
                    </StyledDiv>
                )
            })}

        </div>
    )
}

export default StarWarsImg;