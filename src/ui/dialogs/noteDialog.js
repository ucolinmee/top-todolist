import { Element, Note, Librarian } from "../../classes";
import { renderNotes } from "../notesUI";
import { convertDateToStringFormat } from "../../helpers/date";

export function openNoteDialog() {
    buildNoteDialogHtml();

    const noteModal = document.getElementById('note-dialog');
    noteModal.showModal();
}

export function openFilledNoteDialog(note) {
    buildNoteDialogHtml(note);

    const noteModal = document.getElementById('note-dialog');
    noteModal.showModal();

    document.querySelector('.note-dialog-text').value = note.content;
}

function closeNoteDialog() {
    var noteText = document.querySelector('.note-dialog-text');
    noteText.innerHTML = '';

    const noteModal = document.getElementById('note-dialog');
    noteModal.close();
    noteModal.remove();
}

function submitNoteDialog(note) {
    var noteText = document.querySelector('.note-dialog-text').value;

    if (note === null) {
        var newNote = new Note(noteText);

        Librarian.addNote(newNote);
    }
    else {
        var noteToEdit = Librarian.findNote(note.id);
        noteToEdit.content = noteText;
        noteToEdit.date = convertDateToStringFormat(new Date());
    }
    

    renderNotes();
    closeNoteDialog();
}

function buildNoteDialogHtml(note=null) {
    const noteDialogHtml = new Element('dialog').setAttributes({id: 'note-dialog', class: 'modal'});

    noteDialogHtml
    .addChild(new Element('h1').setTextContent('New Note'))
    .addChild(new Element('textarea').setAttributes({class: 'note-dialog-text', rows: '4', cols: '30'}))
    .addChild(new Element('div').setAttributes({class: 'dialog-btns'})
        .addChild(new Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn'}).appendEventListener('click', closeNoteDialog))
        .addChild(new Element('button').setTextContent('Create').setAttributes({id: 'create-btn'}).appendEventListener('click', () => submitNoteDialog(note)))
    );

    document.body.appendChild(noteDialogHtml.buildElement());
}