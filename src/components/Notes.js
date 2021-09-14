import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import NoteCard from '../components/NoteCard';
import { getNotices, deleteNotice, updateNotice, getByCategory } from '../firestore';



export default function Notes({ category }) {

    const [notes, setNotes] =useState([])

    useEffect(() => {
        updateNotices()
    }, [category])

    const mGetNotices = async () => {
        console.warn("Updating notices")
        console.warn(category)
        if (category == null) {
            return await getNotices()
        } else return await getByCategory(category)
    }

    const updateNotices = () => {

        mGetNotices()
            .then(data => setNotes(data.map((doc) => {
                return doc.data()
            }).sort((a, b) => {
                if (a.date > b.date) return -1
                else if (a.date < b.date) return 1
                else return 0
            })))
    }

    const handleDelete = async (notice) => {
      
        console.warn("deleting: ")
        console.warn(notice)
        await deleteNotice(notice)
        console.warn("deleted: ")
        updateNotices()
    }
      
    const handleChange = async (notice) => {
        await updateNotice(notice)
        updateNotices()
    }


    const breakpoints = {
        default: 3,
        1100: 2,
        500: 1,
    }

    return(
        <Container>
            <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {notes.map(note => (
                <div item key={note.id} >
                   <NoteCard note={note} handleDelete={handleDelete} handleChange={handleChange} />
                </div>
                ))}
            </Masonry>
        </Container>
    )
};