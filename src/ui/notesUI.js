import { Element, Librarian } from "../classes";
import { openNoteDialog } from "./dialogs/noteDialog";

export function renderNotes() {
    const notesSection = document.getElementById('notes');
    notesSection.innerHTML = '';

    const noteHead = buildNoteHead();

    var notesList = new Element('div').setAttributes({class: 'notes-list'}).buildElement();

    Librarian.notes.forEach((note) => {
        notesList.appendChild(note.buildNoteHtml());
    })

    notesSection.appendChild(noteHead);
    notesSection.appendChild(notesList);
}

function buildNoteHead() {
    var headHtml = new Element('div').setAttributes({class: 'flex-row'});

    headHtml
    .addChild(new Element('h1').setTextContent('Notes'))
    .addChild(new Element('button')
        .setTextContent('+')
        .setAttributes({'class': 'add-btn add-project-btn'})
        .appendEventListener('click', openNoteDialog)
    )

    return headHtml.buildElement();
}

{/* 
<div class="flex-row">
    <h1>Notes</h1>
    <button class="add-btn add-project-btn">+</button>
</div> 
<div class="notes-list"> */}



