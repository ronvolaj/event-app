import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

import { put, del } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export async function load({ locals }) {

    if (!locals.user) {
        throw redirect(303, '/login');
    }

    const [categories] = await pool.execute(`
        SELECT *
        FROM categories
    `);

    const [events] = await pool.execute(`
        SELECT *
        FROM event
        ORDER BY id DESC
    `);

    return {
        categories,
        events
    };
}

export const actions = {

    // CREATE EVENT
    create: async ({ request, locals }) => {

        if (!locals.user) {
            throw redirect(303, '/login');
        }

        const formData = await request.formData();

        const name = formData.get('name');
        const description = formData.get('description');
        const startdate = formData.get('startdate');
        const starttime = formData.get('starttime');
        const categoryId = formData.get('category_id');

        const uploadedImage = formData.get('image');

        let imageUrl = null;

        // Upload image
        if (uploadedImage && uploadedImage.size > 0) {

            const uploadedBlob = await put(
                uploadedImage.name,
                uploadedImage,
                {
                    access: 'public',
                    token: BLOB_READ_WRITE_TOKEN
                }
            );

            imageUrl = uploadedBlob.url;
        }

        // Save event
        await pool.execute(
            `
            INSERT INTO event
            (name, description, startdate, starttime, category_id, image_url)
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [
                name,
                description,
                startdate,
                starttime,
                categoryId || null,
                imageUrl
            ]
        );

        throw redirect(303, '/admin/events');
    },

    // DELETE EVENT
    delete: async ({ request, locals }) => {

        if (!locals.user) {
            throw redirect(303, '/login');
        }

        const formData = await request.formData();

        const id = formData.get('id');

        // Get image url
        const [rows] = await pool.execute(
            `
            SELECT image_url
            FROM event
            WHERE id = ?
            `,
            [id]
        );

        if (rows.length > 0 && rows[0].image_url) {

            await del(rows[0].image_url, {
                token: BLOB_READ_WRITE_TOKEN
            });
        }

        // Delete event
        await pool.execute(
            `
            DELETE FROM event
            WHERE id = ?
            `,
            [id]
        );

        throw redirect(303, '/admin/events');
    }
};