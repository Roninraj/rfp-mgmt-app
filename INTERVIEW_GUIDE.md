# RFP Management System - Interview Preparation Guide

This document provides a comprehensive overview of the RFP (Request for Proposal) Management System, its architecture, workflow, and potential interview questions.

---

## 1. Project Overview
The RFP Management System is a full-stack platform designed to streamline the procurement process. It allows "Requesters" to create RFPs, invite "Vendors", and receive proposals. A key highlight is the **AI-powered proposal scoring** using local LLMs (Ollama) to help requesters evaluate submissions objectively.

### Key Features:
- **User Roles:** Distinct workflows for Requesters (create RFPs, invite vendors, score/select proposals) and Vendors (view invitations, submit proposals).
- **RFP Lifecycle:** Creation -> Invitation -> Submission -> AI Scoring -> Selection.
- **AI Scoring:** Automatically evaluates proposals based on Price, Delivery, and Warranty using a local Llama 3 model.
- **Email Notifications:** Automated alerts for invitations and proposal selections.

---

## 2. Architecture & Tech Stack

### Frontend:
- **Framework:** Next.js (App Router)
- **State Management:** Zustand (for Auth and Global State)
- **Styling:** Tailwind CSS
- **API Communication:** Fetch API with centralized service layers.

### Backend:
- **Runtime:** Node.js with Express (TypeScript)
- **Database:** PostgreSQL
- **ORM:** Prisma (using Driver Adapters for modern PG connectivity)
- **Authentication:** JWT (JSON Web Tokens) with custom middleware.
- **AI Integration:** Ollama (Local LLM server) via REST API.
- **Background Tasks:** Basic email triggering via Nodemailer.

### Infrastructure:
- **Docker:** PostgreSQL containerized for consistent development.
- **Local AI:** Ollama running Llama 3.

---

## 3. Core Workflow (The "Happy Path")

1.  **Onboarding:** A Requester registers and logs in.
2.  **RFP Creation:** Requester creates a new RFP with specific requirements, budget, and deadlines.
3.  **Vendor Management:** Requester adds vendors to the system and "invites" them to specific RFPs.
4.  **Proposal Submission:** An invited Vendor logs in, sees the invitation, and submits their proposal (price, delivery days, etc.).
5.  **AI Analysis:** Upon submission, the backend triggers the `aiService`. It sends the RFP and Proposal details to a local Ollama instance.
6.  **Scoring:** The AI returns a structured JSON containing scores (0.0 to 1.0) and a natural language explanation.
7.  **Selection:** The Requester reviews the scores and selects the winning proposal, triggering a notification to the vendor.

---

## 4. Technical Deep Dives (For Interviews)

### AI Integration (Ollama)
Instead of relying on expensive cloud APIs (like OpenAI), this project uses **Ollama**.
- **Pros:** Data privacy (data never leaves the machine), no cost per token, offline capability.
- **Implementation:** The `aiService` constructs a structured prompt and uses Ollama's `format: "json"` mode to ensure the response is programmatically parsable.

### Database Design
The schema (Prisma) uses several key relations:
- `User` 1:N `RFP` (Requester ownership)
- `RFP` N:M `Vendor` (via `RfpVendor` join table for invitations)
- `Proposal` 1:1 `ProposalScore` (AI analysis results)
- `RFP` 1:1 `Proposal` (The "Selected" winner)

---

## 5. Potential Interview Questions

### Behavioral / General:
1.  **"What was the biggest technical challenge you faced?"**
    *   *Answer Idea:* Talk about setting up the Prisma Driver Adapters or coordinating the async flow between proposal submission and AI scoring.
2.  **"Why did you choose Ollama/Llama 3 over a cloud API?"**
    *   *Answer Idea:* Emphasize data privacy in procurement and cost-effectiveness for local development.

### Technical (Frontend):
1.  **"How did you handle authentication in Next.js?"**
    *   *Answer Idea:* Discuss the Zustand store combined with `localStorage` and a Higher-Order Component (HOC) or Guard for protected routes.
2.  **"How does the frontend communicate with the AI scoring?"**
    *   *Answer Idea:* It doesn't directly; it submits a proposal to the backend, which triggers the scoring service asynchronously to keep the UI responsive.

### Technical (Backend/Database):
1.  **"Explain your database schema and the choice of Prisma."**
    *   *Answer Idea:* Focus on Type Safety and the ease of handling N:M relationships like `RfpVendor`.
2.  **"How do you ensure only invited vendors can submit proposals?"**
    *   *Answer Idea:* Discuss the validation logic in `proposal.service.ts` that checks the `RfpVendor` table before allowing a `create`.

### Advanced:
1.  **"How would you scale the AI scoring if you had 10,000 proposals coming in at once?"**
    *   *Answer Idea:* Move the AI scoring to a background worker queue (like BullMQ or RabbitMQ) so it doesn't block the main Express thread.
2.  **"How do you handle 'hallucinations' from the AI?"**
    *   *Answer Idea:* Mention strict JSON schema enforcement and providing clear context/constraints in the system prompt.

---

## 6. How to Demo
1.  **Login as Requester:** Show the dashboard and create an RFP.
2.  **Invite Vendor:** Add a vendor and invite them.
3.  **Login as Vendor:** Show the invitation list.
4.  **Submit Proposal:** Submit a proposal with specific numbers.
5.  **Show the Result:** Switch back to Requester, open the RFP, and show the **AI Scores** and the "Selected" button.
