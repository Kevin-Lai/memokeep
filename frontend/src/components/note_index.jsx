import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/note_actions';

import NoteForm from './note_form';

class NoteIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        //debugger

        let list = this.props.notes.map((note, index)=>{
            return(
                <li key={"note #" + index}>
                    {`Title: ${note.title}, Content: ${note.content}`}
                </li>
            )
        });

        return(
            <>
                <NoteForm />
                <ul>
                    {list ? list : "Hi"}
                </ul>
            </>
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