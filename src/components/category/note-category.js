import { useState, useMemo, useEffect } from "react";
import Services from "../../services/category-service";

export default function NoteCategory(props) {
  const [note, setNote] = useState(props.note !== undefined ? props.note : "");

  useEffect(() => {
    Services.updateNote(props.id, note);
  }, [note, props.id]);

  return useMemo(() => {
    return (
      <textarea
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      ></textarea>
    );
  }, [note]);
}
