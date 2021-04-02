import { Time } from '../counselor-profile/time.model';

export interface Post {
    netid: string;
    fullName: string;
    zoomLink: string;
    schedule: Time[];
    id?: string;
}