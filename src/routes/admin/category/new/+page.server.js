import pool from '$lib/server/database.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    create: async ({ request, locals }) => {
        if (!locals.user) { redirect(303, '/login'); }

        const formData = await request.formData();
        const name = formData.get('name');

        await pool.execute(
            'INSERT INTO categories (name) VALUES (?)',
            [name]
        );

        throw redirect(303, '/categories'); 
}
};
