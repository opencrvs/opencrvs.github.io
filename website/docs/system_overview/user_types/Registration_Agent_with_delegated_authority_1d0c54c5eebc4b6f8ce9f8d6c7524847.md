---
id: registrationAgentDelAuth
title: Registration agent with delegated authority
---

This user type extends the Registration Agents permissions, as detailed above, to allow the Registration agent to (i) register vital events and (ii) issue a certificate with the digital signature of the Registrar, with the authority delegated by the Registrar themselves.

- Able to update incomplete applications from field agents
- Able to complete applications sent from DHIS2
- Able to create birth and death registration applications and register these events
- Able to request a correction to a record to Registration Manager
- Able to assign a Registrar's digital signature to a certificate and issue it

### Delegated Authority

To reflect the common scenario where a Registrar informally delegates their authority (through provision of their username and password) to a data clerk, we have designed the ability to **delegate authority**.

This means that the Registrar can formally delegate responsibility to a trusted data clerk/office member, otherwise known in OpenCRVS as a **Registration Agent _with delegated authority_**. Once they delegate their authority, they can review the activity of this agent through the audit functionality to monitor performance. This ensures that each agent uses their own credentials to access the application and that all interactions can be audited knowing that the who is doing what and when.

If the **Registration Agent** has delegated authority, they will see the same workqueues as the Registrar.
