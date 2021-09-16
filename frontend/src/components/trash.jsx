import React from 'react';
import { connect } from 'react-redux';
import { fetchTrashedNotes } from '../actions/note_actions';

import Note from './note';
import './note.css';

class Trash extends React.Component {

    componentDidMount() {
        this.props.fetchTrashedNotes();
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
        fetchTrashedNotes: () => dispatch(fetchTrashedNotes())
    }
}

export default connect(mstp, mdtp)(Trash);