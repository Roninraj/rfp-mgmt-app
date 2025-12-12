// src/services/ai.service.ts

// No external dependencies needed for Ollama (just fetch)
// We remove GEMINI_API_KEY dependency

interface ScoringInput {
  rfpTitle: string;
  rfpDescription: string;
  rfpBudget?: number | null;
  rfpDeliveryDate?: Date | null;
  proposalPrice?: number | null;
  proposalDeliveryDays?: number | null;
  proposalWarranty?: number | null;
  proposalPaymentTerms?: string | null;
}

interface ScoreResult {
  priceScore: number;
  deliveryScore: number;
  warrantyScore: number;
  overallScore: number;
  explanation: string;
}

export const aiService = {
  async scoreProposal(input: ScoringInput): Promise<ScoreResult | null> {
    const OLLAMA_URL = 'http://localhost:11434/api/generate';
    const MODEL = 'llama3'; // Ensure you ran `ollama run llama3`

    console.log('[AI Service] Starting local AI scoring with Ollama...');

    const prompt = `
      You are an expert procurement analyst. Evaluate the following vendor proposal against the RFP requirements.
      
      RFP Details:
      - Title: ${input.rfpTitle}
      - Description: ${input.rfpDescription}
      - Target Budget: ${input.rfpBudget ? input.rfpBudget : 'Not specified'}
      - Required Delivery Date: ${input.rfpDeliveryDate ? input.rfpDeliveryDate.toISOString() : 'Not specified'}

      Proposal Details:
      - Price: ${input.proposalPrice ? input.proposalPrice : 'Not specified'}
      - Delivery Duration: ${input.proposalDeliveryDays} days
      - Warranty: ${input.proposalWarranty} months
      - Payment Terms: ${input.proposalPaymentTerms || 'Not specified'}

      Task:
      Score the proposal on a scale of 0.0 to 1.0 (where 1.0 is perfect) for the following categories:
      1. Price Score: Lower price is better, or strictly within budget.
      2. Delivery Score: Faster is better, or meeting the deadline.
      3. Warranty Score: Longer is better.
      4. Overall Score: A weighted average based on your judgment of the proposal's value.

      Provide a brief explanation (max 2 sentences) for the score.

      IMPORTANT: Return ONLY a raw JSON object. No Markdown, no backticks, no extra text.
      JSON Format:
      {
        "priceScore": number,
        "deliveryScore": number,
        "warrantyScore": number,
        "overallScore": number,
        "explanation": "string"
      }
    `;

    try {
      console.log('[AI Service] Sending request to Ollama...');
      const response = await fetch(OLLAMA_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL,
          prompt: prompt,
          stream: false, // We want the full response at once
          format: "json" // Force JSON output mode (supported in newer Ollama versions)
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.statusText}`);
      }

      const data = await response.json();
      const rawText = data.response;
      console.log('[AI Service] Raw Ollama response:', rawText);

      // Parse JSON
      // Llama3 with 'format: json' is usually very good, but we clean just in case
      const cleanText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      const scoreData: ScoreResult = JSON.parse(cleanText);

      console.log('[AI Service] Parsed score data:', scoreData);
      return scoreData;

    } catch (error) {
      console.error('AI Scoring failed (Ollama):', error);
      return null;
    }
  },
};