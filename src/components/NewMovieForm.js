import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import InlineError from './InlineError';
import { Button, Form, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class NewMovieForm extends Component {
    state = {
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        errors: {}
    };
    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = () => {
        const errors = this.validate();
        //console.log(errors);
        this.setState({
            errors
        })
        if (Object.keys(errors).length === 0) {
            this.props.onNewMovieSubmit(this.state)
        }
    }
    validate = () => {
        const errors = {};
        if (!this.state.title) errors.title = "Boş Bırakılamaz"
        if (!this.state.cover) errors.cover = "Boş Bırakılamaz"
        return errors
    }
    render() {
        const { errors } = this.state;
       
        return (
            <div>
                <Form onSubmit={this.onSubmit} >
                    <Form.Field error={errors.title}>
                        <label>Title</label>
                        {errors.title && <InlineError message={!!errors.title} />}
                        <input
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder='Title' />
                    </Form.Field>
                    <Form.Field error={errors.cover}>
                        <label>Cover Url</label>
                        {errors.cover && <InlineError message={!!errors.cover} />}
                        <input
                            id="cover"
                            name="cover"
                            value={this.state.cover}
                            onChange={this.handleChange}
                            placeholder='Cover Url' />
                    </Form.Field>
                    <Image src={this.state.cover} size='small' />
                    <div className="clearfix"></div>
                    <Button type='submit' >Submit</Button>
                    
                </Form>
            </div>


        );
    }

}
export default NewMovieForm