import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/note_actions';

import NoteCreateForm from './note_create_form';
import Note from './note';

import './note.css';

class NoteIndex extends React.Component {

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        //debugger

        let list = this.props.notes.map((note, index)=>{
            return(
                <li className="note-list-item" key={"note #" + index}>
                    <Note note={note}/>
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
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(mstp, mdtp)(NoteIndex);