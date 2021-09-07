import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes, deleteNote } from '../actions/note_actions';

import NoteForm from './note_form';
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
                    {`Title: ${note.title}, Content: ${note.content}`} <button onClick={()=>this.handleDelete(note._id)}>Delete</button>
                </li>
            )
        });

        return(
            <div className="index">
                <NoteForm />
                <ul>
                    {list ? list : "Hi"}
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
        deleteNote: (noteId) => dispatch(deleteNote(noteId))
    }
}

export default connect(mstp, mdtp)(NoteIndex);