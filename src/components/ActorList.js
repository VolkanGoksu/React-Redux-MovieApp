import React, { Component } from 'react'
import {Card,Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types';
class ActorList extends Component {
    render() {
        return (
            <div>
                <Grid stackable columns={3}>
                    {
                        this.props.actors.map(actor => (
                        <Grid.Column key={actor.photo}>
                            <Card>
                                <Card
                                    image={actor.photo}
                                    header={actor.name}
                                    extra={actor.description}
                                />
                            </Card>
                        </Grid.Column>))
                    }
                </Grid>
            </div>
        )
    }
}
ActorList.propTypes = {
    actors: PropTypes.array.isRequired
};
ActorList.defaultProps = {};
export default ActorList