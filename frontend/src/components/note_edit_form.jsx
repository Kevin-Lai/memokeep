import React from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/note_actions';
import { closeModal } from '../actions/modal_actions';

class NoteEditForm extends React.Component {

    constructor(props){
        super(props);

        this.state = this.props.note;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.pinNote = this.pinNote.bind(this);
        this.archiveNote = this.archiveNote.bind(this);
        this.trashNote = this.trashNote.bind(this);
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

        if(this.state.pinned){
            this.setState({
                archived: false,
                trashed: false
            });
        }

        this.props.updateNote(this.state).then(()=>{
            this.props.closeModal();
        });
    }

    pinNote(){
        // pinned state can be toggled on the edit form
        this.setState({
            pinned: !this.state.pinned
        });
    }

    archiveNote(){
        this.setState({
            archived: true,
            trashed: false,
            pinned: false
        });
    }

    trashNote(){
        this.setState({
            trashed: true,
            archived: false,
            pinned: false
        });
    }

    render() {
        return(
            <>
                <button onClick={()=>this.trashNote()}>Trash: {this.state.trashed ? "True" : "False"}</button>
                <button onClick={()=>this.archiveNote()}>Archive: {this.state.archived ? "True" : "False"}</button>
                <button onClick={()=>this.pinNote()}>Pin: {this.state.pinned ? "True" : "False"}</button>
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
                        <button className="create-note-button">Edit Note</button>
                    </div>
                </form>
            </>
        )
    }
}

const mdtp = (dispatch) => {
    return {
        updateNote: (note) => dispatch(updateNote(note)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(null, mdtp)(NoteEditForm);