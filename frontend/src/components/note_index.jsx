import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/note_actions';

class NoteIndex extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return(
            <>
                {this.props.notes}
            </>
        )
    }
}

const mstp = (state) => {
    return {
        notes: Object.values(state.notes)
    }
}

const mdtp = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(mstp, mdtp)(NoteIndex);