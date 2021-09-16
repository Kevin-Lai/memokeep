import React from 'react';
import { connect } from 'react-redux';
import { fetchArchivedNotes } from '../actions/note_actions';

import Note from './note';
import './note.css';

class Archive extends React.Component {

    componentDidMount() {
        this.props.fetchArchivedNotes();
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
        fetchArchivedNotes: () => dispatch(fetchArchivedNotes())
    }
}

export default connect(mstp, mdtp)(Archive);