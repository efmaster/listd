/* eslint-disable max-classes-per-file */
import type { Session as OGSession, DefaultSession, User as OGUser } from '@auth/core/types';
import type { UserSettings } from '@prisma/client';
import { SvelteKitAuthConfig as OGSvelteKitAuthConfig } from '@auth/sveltekit';
import type { CustomAdapter } from '$lib/prisma/client';

// TODO: revert this when they fix this...
declare module '@auth/sveltekit/node_modules/@auth/core/types' {
	interface Session extends OGSession {
		user?: {
			id: string;
			settings: UserSettings;
		} & DefaultSession['user'];
	}

	interface User extends OGUser {
		settings: UserSettings;
	}
}

declare module '@auth/sveltekit' {
	interface SvelteKitAuthConfig extends OGSvelteKitAuthConfig {
		adapter: CustomAdapter;
	}
}
