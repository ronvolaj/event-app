import { invalidateSession } from "$lib/server/auth.js";
import { redirect } from '@sveltejs/kit';

export const actions = {
    logout: async ({ cookies }) => {
        const sessionId = cookies.get('session');
        if (sessionId) {
            //delete session from database
            await invalidateSession(sessionId);
            cookies.delete('session', { path: '/' });
        }
        redirect(303, '/');
    }
};