# Environment Variables Setup Guidelines

This document provides a step-by-step guide to setting up the required `.env` files for both the frontend and backend. These variables are essential for the application to function properly.

---

## **Backend `.env` Variables**

1. **`DBURL`**  
   - **Description:** The MongoDB connection string.  
   - **How to Obtain:** Request the MongoDB URL from the backend administrator or team lead.  

2. **`HOST_EMAIL`**  
   - **Description:** The email used as the sender in NodeMailer.  
   - **How to Obtain:** Verify with the backend team or the email service provider.  

3. **`PASSWORD`**  
   - **Description:** The app password for the email account used with NodeMailer.  
   - **How to Obtain:** Generate an app password in your email account settings (e.g., Gmail, Outlook).  

4. **`PORT`**  
   - **Description:** The port used by NodeMailer for SMTP communication.  
   - **How to Obtain:** Commonly `587` for TLS. Check with your email service provider.  

5. **`STRIPE_SECRET_KEY`**  
   - **Description:** The secret key for Stripe payment processing.  
   - **How to Obtain:** Access the API Keys section in the Stripe dashboard.  

6. **`DOMAIN`**  
   - **Description:** The domain of the backend server after deployment.  
   - **How to Obtain:** Use the production domain or staging URL provided by the deployment team.  

7. **`SECRET`**  
   - **Description:** The secret key used for JWT encryption.  
   - **How to Obtain:** Generate a secure random string using a library like `crypto` in Node.js or request it from the team lead.  

8. **`WHATSAPP`**  
   - **Description:** The API token for WhatsApp notifications.  
   - **How to Obtain:** Obtain from the WhatsApp API provider or your team lead.  

---

## **Frontend `.env` Variables**

1. **`VITE_PUBLICATION_KEY`**  
   - **Description:** The public Stripe key for client-side payment processing.  
   - **How to Obtain:** Access the API Keys section in the Stripe dashboard.  

2. **`VITE_JAAS_APP_ID`**  
   - **Description:** The key for integrating Jitsi Meet video conferencing.  
   - **How to Obtain:** Obtain from the Jitsi developer portal or your team lead.  

3. **`VITE_API_KEY`**  
   - **Description:** The API key for chatbot integration.  
   - **How to Obtain:** Request the key from the chatbot service provider or team lead.  

---

### **Important Notes**
- Always keep `.env` files private and do not expose them in version control systems like GitHub.  
- Use environment variable management tools like `dotenv` in development or configure the deployment environment with these variables.  
- Ensure secure storage and limited access to keys, passwords, and tokens.  

---

