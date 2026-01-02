export interface AddIncomeRequest {
    date: string; // YYYY-MM-DD
    income: string; // amount as string per API
    currency: 'UAH' | 'USD' | 'EUR';
    comment?: string;
    cash: boolean;
}
