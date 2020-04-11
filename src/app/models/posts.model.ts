export interface Posts {
    id: number;
    slug: string;
    status: string;
    title: {
        rendered: string;
    }
    date: string;
}