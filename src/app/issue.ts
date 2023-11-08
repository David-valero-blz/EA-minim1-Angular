//Interfaz de 'Issue'

export interface Issue {
    title: string;
    description: string; 
    priority: 'low' | 'medium' | 'high';
    status: 'open' | 'closed';
    _id: string;
    reportedBy: string;
    createdAt?: string;
    updatedAt?: string;
}