// Elements:
const addNoteBtn = document.getElementById("addBtn");
const noteContainer = document.getElementById("noteContainer");

// Event Listeners:
addNoteBtn.addEventListener("click", addNote);

function addNote(textAreaValue = "") {
  const noteEl = document.createElement("div");

  noteEl.innerHTML = `
  <div class="note">
  <div class="note-header">
    <span id="removeNote"><i class="fa-solid fa-xmark icon delete"></i></span>
    <span id="editNode"
      ><i class="fa-solid fa-pen-to-square icon edit"></i
    ></span>
  </div>
  <div class="editText ${textAreaValue ? "hidden" : ""}"></div>
  <div class="note-body">
    <textarea
      name="textarea"
      class="noteArea ${textAreaValue ? "" : "hidden"}"
      cols="30"
      rows="10"
    ></textarea>
  </div>
</div>
  `;

  const deleteNote = noteEl.querySelector(".delete");
  const editNote = noteEl.querySelector(".edit");
  const editedText = noteEl.querySelector(".editText");
  const textArea = noteEl.querySelector(".noteArea");

  deleteNote.addEventListener("click", () => {
    // noteContainer.removeChild(noteEl);
    noteEl.remove();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    editedText.innerHTML = value;
  });

  editNote.addEventListener("click", () => {
    textArea.classList.toggle("hidden");
    editedText.classList.toggle("hidden");
  });

  noteContainer.appendChild(noteEl);
}
