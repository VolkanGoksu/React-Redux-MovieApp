import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const MovieCard = ({ movie }) => (
    <Grid.Column>
        <Card>
            <Image src={movie.cover} />
            <Card.Content>
                <Card.Header>
                    {movie.title}
                </Card.Header>

            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
				22 Friends
			</a>
            </Card.Content>
        </Card>
    </Grid.Column>
);

export default MovieCard