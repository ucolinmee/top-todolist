import formatDate from "../helpers/date";

const Note = () => {
    const notes = [];

    const init = () => {
        const msg = 'This is a sample note. Notes are for storing information, like a recipe, a phone number, an address, etc. Notes are not ToDo tasks';
        createNote(msg)
    }

    const getLatestId = () => {
        if (notes.length == 0)
            return 1;
        return notes[notes.length-1].id + 1;
    }

    const createNote = (msg) => {
        let note = {
            id: getLatestId(),
            message: msg,
            timestamp: `Added on: ${formatDate()}`
        }
        notes.push(note);
    }

    const editNote = (id, msg) => {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                notes[i].message = msg;
                notes[i].timestamp = `Edited on ${formatDate()}`;
            }
        }
    }

    const deleteNote = (id) => {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                notes.splice(i, 1);
            }
        }
    }

    const getNotes = () => {
        return notes;
    }

    init();

    return { createNote, editNote, deleteNote, getNotes }
}

export default Note;