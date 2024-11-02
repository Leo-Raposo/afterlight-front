import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})
export class CodeSubmissionService {
    private baseUrl = 'https://44roy2.buildship.run';

    async submitCode(userName: string, exercise: string, language: string, codeText: string): Promise<any> {
        const url = `${this.baseUrl}/test`;

        const body = {
            userName,
            exercise,
            language,
            codeText
        };

        console.log("Enviando payload:", JSON.stringify(body));

        try {
            const response = await axios.post(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao enviar o código:', error);
            throw error;
        }
    }
}
