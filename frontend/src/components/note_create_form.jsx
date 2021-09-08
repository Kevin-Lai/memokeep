import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions/note_actions';

class NoteCreateForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            title: "",
            content: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type){
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.createNote(this.state);

        this.setState({
            title: "",
            content: ""
        });
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit} className="create-note-form">
                    <input type="text"
                        placeholder={"Title"}
                        value={this.state.title}
                        onChange={this.handleChange("title")}
                        className="create-note-input">
                    </input>
                    <input type="text"
                        placeholder={"Take a note..."}
                        value={this.state.content}
                        onChange={this.handleChange("content")}
                        className="create-note-input">
                    </input>
                    <div className="create-note-button-block">
                        <button className="create-note-button">Create Note</button>
                    </div>
                </form>
            </>
        )
    }
}

const mdtp = (dispatch) => {
    return {
        createNote: (note) => dispatch(createNote(note))
    }
}

export default connect(null, mdtp)(NoteCreateForm);