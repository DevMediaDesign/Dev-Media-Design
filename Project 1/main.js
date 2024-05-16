document.addEventListener('DOMContentLoaded', (event) => {
    let draggables = document.querySelectorAll('.draggable');
    let dropZone = document.getElementById('drop-zone');

    // Add event listeners for drag start
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', e.target.id); // 'text' is also commonly used
        });
    });

    // Drag over drop zone
    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault(); // Necessary to allow drop
    });

    // Drop event listener
    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        const clone = draggableElement.cloneNode(true); // Clone the dragged element
        clone.id = `new-${id}`; // Change ID to maintain uniqueness
        this.appendChild(clone);
    });
});
