import React, { useContext } from "react";
import { EntryContext } from "./EntryProvider";

export const Entry = ({ entry, moods }) => {

  const mood = moods.find(m => m.id === entry.moodId)
  const { deleteEntry, getEntryById } = useContext(EntryContext)

  return (

    <section className="entry">
      <div className="entry__concept">{entry.concepts}</div>
      <div className="entry__entry">{entry.entry}</div>
      <div className="entry__date">{entry.time}</div>
      <div className="entry__mood">{entry.mood_id}</div>

      <button onClick={
        () => {
          deleteEntry(entry)
        }
      }>Delete</button>
      <button onClick={
        () => {
          getEntryById(entry.id)
        }
      }>Edit</button>
    </section>
  )
};
