import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../actions/note_actions';

import { openModal } from '../actions/modal_actions';

import NoteCreateForm from './note_create_form';
import './note.css';

class NoteIndex extends React.Component {

    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    handleDelete(noteId){
        //debugger
        this.props.deleteNote(noteId);
    }

    render() {
        //debugger

        let list = this.props.notes.map((note, index)=>{
            return(
                <li className="note-list-item" key={"note #" + index}>
                    <button onClick={()=>this.props.openModal({formType: 'edit', note: note})}>{`Title: ${note.title}, Content: ${note.content}`}</button> <button onClick={()=>this.handleDelete(note._id)}>Delete</button>
                </li>
            )
        });

        return(
            <div className="index">
                <NoteCreateForm />
                <ul>
                    {list ? list : ""}
                </ul>
            </div>
        )
    }
}

const mstp = (state) => {
    //debugger
    return {
        notes: state.notes ? Object.values(state.notes) : []
    }
}

const mdtp = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mstp, mdtp)(NoteIndex);