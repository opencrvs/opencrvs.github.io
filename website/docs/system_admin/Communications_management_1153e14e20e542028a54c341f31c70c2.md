---
id: commsManagement
title: Communications management
---

Effective communication is critical to successful civil registration service delivery. This functionality supports the communication to those applying for vital event registration as well as service providers using the system.

## Configuration

All SMS and notification content can be configured as per a country's requirements.

## User Stories

As an **Applicant**, I want to be able to receive updates on the status of my application, so that I know what is happening next.

As a **System Administrator/Registration Manager**, I want to be able to edit the content of the SMSs in the system easily, so that the correct message is sent to applicants.

As a **System Administrator/Registration Manager**, I want to be able to send out mass communication messages to select demographics, so that key messages can get to target audiences. **[IN ROADMAP]**

As a **System Administrator/Registration Manager**, I want to be able to edit the content of application notifications for end-users, so that the correct message gets to them. **[IN ROADMAP]**

## Functionality

## SMS Content

The below SMSs are currently sent at different steps in the process to keep Applicants updated on the status of their application.

### 1. New user

| Key | Description                                   | English copy                                                                                    | Benagli copy | Explorations | Description 1 |
| --- | --------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------- |
|     | This is sent when an admin creates a new user | You can login to OpenCRVS with this temporary username: {{username}} and password: {{password}} |              |              |               |

### 2. Birth & death declaration

| Key | Description                                                        | English copy                                                                                                                   | Benagli copy | Explorations | Description 1 |
| --- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------ | ------------ | ------------- |
|     | This is sent when a field agent has sent an application for review | Birth registration tracking ID for {{name}} is {{trackingid}}. You will get an SMS within 2 days with progress and next steps. |              |              |               |
|     |                                                                    | Death registration tracking ID for {{name}} is {{trackingid}}. You will get an SMS within 2 days with progress and next steps. |              |              |               |

### 3. Birth & death registration

| Key   | Description                                                         | English copy                                                                                                                                                                                            | Benagli copy | Explorations | Description 1 |
| ----- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------- |
| Birth | This is sent when a reg agent or registrar registers an application | Congratulations, the birth of {{name}} has been registered. The BRN is [201937484839384]. Visit your local registration office with your ID to collect the certificate. Your tracking ID is [BNFA323S]. |              |              |               |
| Death |                                                                     | The death of {{name}} has been registered. The DRN is [201937484839384]. Visit your local registration office with your ID to collect the certificate. Your tracking ID is [BNFA323S].                  |              |              |               |

### Birth & death rejection

| Key   | Description                                                   | English copy                                                                                                                                          | Benagli copy | Explorations | Description 1 |
| ----- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------- |
| Birth | advice? come to office, expect a phone call. speak to the HA? | Your birth application has been rejected. Please visit [Name of office] registration office with your supporting documents. Your tracking ID is [ID]. |              |              |               |
| Death |                                                               | Your death application has been rejected. Please visit [Name of office] registration office with your supporting documents. Your tracking ID is [ID]. |              |              |               |

**Coming Soon**

### Mass SMS broadcast

The **System Administrator/Registration Manager** can send out mass communication messages to select demographics, so that key messages can get to target audiences

### End-User Notifications

The **System Administrator/Registration Manager** can define and creates notifications for end-users to keep them updated with key message and initiatives

The **System Administrator/Registration Manager** can edit the content of application notifications for end-users
