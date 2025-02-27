import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit(){
    props.onEdit(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>
      <EditRoundedIcon />
      </button>
    </div>
  );
}

export default Note;
