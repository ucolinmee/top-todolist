import { Element } from "../../classes";

export function openNoteDialog() {
    buildNoteDialogHtml();

    const noteModal = document.getElementById('note-dialog');
    noteModal.showModal();
}

function closeNoteDialog() {

}

function submitNoteDialog() {

}

function buildNoteDialogHtml() {
    const noteDialogHtml = new Element('dialog').setAttributes({id: 'note-dialog', class: 'modal'});

    noteDialogHtml
    .addChild(new Element('h1').setTextContent('New Note'))
    .addChild(new Element('textarea').setAttributes({placeholder: 'Note Description', class: 'note-dialog-text', rows: '4', cols: '30'}))
    .addChild(new Element('div').setAttributes({class: 'dialog-btns'})
        .addChild(new Element('button').setTextContent('Cancel').setAttributes({id: 'cancel-btn'}).appendEventListener('click', closeNoteDialog))
        .addChild(new Element('button').setTextContent('Create').setAttributes({id: 'create-btn'}).appendEventListener('click', submitNoteDialog))
    );

    document.body.appendChild(noteDialogHtml.buildElement());
}