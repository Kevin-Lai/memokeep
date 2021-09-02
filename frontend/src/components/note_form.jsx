import React from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions/note_actions';

class NoteForm extends React.Component {

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
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder={"Title"}
                        value={this.state.title}
                        onChange={this.handleChange("title")}>
                    </input>
                    <input type="text"
                        placeholder={"Take a note..."}
                        value={this.state.content}
                        onChange={this.handleChange("content")}>
                    </input>
                    <button>Create Note</button>
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

export default connect(null, mdtp)(NoteForm);