import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export async function GET({ params }) {
    const id = params.id;
    const  [rows]  = await pool.query('SELECT * FROM event WHERE id = ?', [id]);


    if (rows.length == 0) {
        return Response.json({message: 'Event not found'}, {status :404});
    }
    return Response.json(rows[0]);
}


export async function DELETE({ request, params }) {
    if (!locals.user) { redirect(303, '/login'); }
    const id = params.id;
    const [result] = await pool.query('DELETE FROM event WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        return Response.json({message: 'Event not found'}, {status :404});
    }
    return Response.json({message: 'Event deleted successfully!'});
}

export async function PUT({ request, params }) {
    const id = params.id;
    const { name, description } = await request.json();

    const [result] = await pool.query('UPDATE event SET name = ?, description = ? WHERE id = ?', [name, description, id]);

    if (result.affectedRows === 0) {
        return Response.json({error: 'Event not found'}, {status :404});
    }
    return Response.json({message: 'Event updated successfully!'});
}