export interface Booking {
    id: string;
    client_name: string;
    client_email: string;
    event_date: string; // ISO date string
    event_time: string; // HH:MM:SS format
    event_details: string | null;
    status: 'pending' | 'accepted' | 'cancelled';
    created_at: string;
    updated_at: string;
}

export type BookingStatus = 'pending' | 'accepted' | 'cancelled';

export interface BookingFormData {
    client_name: string;
    client_email: string;
    event_date: string;
    event_time: string;
    event_details: string;
}