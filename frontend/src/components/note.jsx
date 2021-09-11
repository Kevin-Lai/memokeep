import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/note_actions';
import { openModal } from '../actions/modal_actions';

class Note extends React.Component {
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(noteId){
        //debugger
        this.props.deleteNote(noteId);
    }

    render(){
        return (
            <>
                <button onClick={()=>this.props.openModal({formType: 'edit', note: this.props.note})}>{`Title: ${this.props.note.title}, Content: ${this.props.note.content}`}</button> <button onClick={()=>this.handleDelete(this.props.note._id)}>Delete</button>
            </>
        )
    }
}

const mdtp = (dispatch) => {
    return {
        deleteNote: (noteId) => dispatch(deleteNote(noteId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(null, mdtp)(Note);