---
id: version-1.0.0-alpha.2.1-keyFeatures
title: Key Features
sidebar_label: Key Features
original_id: keyFeatures
---

OpenCRVS has a range of features that respond to common problems that we have observed in civil registration processes around the world. Check these out below and how OpenCRVS responds to these challenges.

# Offline & low connectivity working

## Insight

Field agents working in remote locations are unable to complete birth / death notifications as they have no connectivity

Oftentimes there is connectivity but it is slow and can disrupt work processes

## Solution

OpenCRVS works offline and with low connectivity, and tells users what is going on

OpenCRVS allows users to download applications one by one so that the system is not overloaded, and keeps users updated on the progress of the action they have chosen

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/sentReviewPoorConnectivity-2.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/sentReviewPoorConnectivity-2.png)

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/sentReviewPoorConnectivity-3.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/sentReviewPoorConnectivity-3.png)

# Real-time deduplication

## Insight

Registrars have no way of knowing if an application has already been processed and systems often don't have the ability to identify potential or actual duplicate applications or records.

## Solution

An advanced matching algorithm from is used (Elastic Search) to identify duplicate entries in the system. The system then automatically prompts the Registrar to review possible duplicates before registration.

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/duplicate.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/duplicate.png)

# Usability of form

## Insight

Field agents have difficulty completing long forms in digital format, particularly when scrolling is required and error messages appear in multiple places.

## Solution

The use of award winning design patterns that have been proven to be user friendly and assist high-quality data entry. Users are presented with one question per page to help them easily guide them through the form and their interaction with the applicant.

[assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Usability_of_forms.mp4](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Usability_of_forms.mp4)

# Workqueues

## Insight

Registration staff are faced with piles of birth / death notices for processing and have no way of managing their workload or knowing which applications are higher priority

## Solution

The work queue is the default view for the registration officer, showing birth / death notices at various statuses, including those ready for review. Higher priority applications are shown first. By expanding an application, full details can be seen.

To see all workqueues in the product, check out the [User types](https://www.notion.so/User-types-06ba450af0ea4de0adf3239dbda5f95f) and see what each user can see and how this helps them manage their workload.

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Registrar_Home.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Registrar_Home.png)

# Secure Device Access

## Insight

Digital tools can be stolen and fraudulent birth / death notifications submitted. Also, registration staff can share login details, reducing the traceability of data capture.

## Solution

A PIN must be entered each time the user accesses the application. Once a week an additional 2-factor authentication is required, including a code being sent via SMS to the field agent.

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/2_factor_authentication.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/2_factor_authentication.png)

# Standards-based interopability

## Insight

Systems operate in silos and do not share data. Alternative sources of birth / death notifications and opportunities for external data validation are not leveraged.

## Solution

OpenCRVS uses a standards-based (HL7) interoperability framework to allow birth / death notifications to be retrieved from service point health applications (e.g. OpenMRS, DHIS2). Standards-based APIs to National ID systems allow real-time validation of National ID of parents and retrieval of personal details for fast form completion.

# Data quality measures

## Insight

Data quality is low because manual data entry is prone to human errors. Records often reflect incorrect information despite supporting documents being provided on submission.

## Solution

- Automated validation (e.g. of National ID number) prevents data entry errors
- Client-side validation reduces errors at point of data-entry
- Registration Officers can see the supporting documents alongside the notice of birth / death for simplified manual validation

[assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Client_side_validation.mp4](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Client_side_validation.mp4)

# Digital Signatures

## Insight

There is a severe bottleneck with authorised signatories having to sign large numbers of birth certificates

## Solution

Digitised certification including the use of digital signatures means that printed certificates can be issued immediately, facilitating a rapid registration and certification process

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Digital_Signature.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Digital_Signature.png)

# Performance Management

## Insight

Those responsible for civil registration do not have an accurate view of service levels and performance.

## Solution

The OpenCRVS management view provides a suite of service level data, which allow managers at the National / Provincial / District levels to monitor performance and conduct root cause analysis.

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Performance.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Performance.png)

# Multi-language options

## Insight

System users are unfamiliar with the default language and as a result, cannot follow the process and make data entry errors.

## Solution

OpenCRVS supports multiple languages, which can be selected by the user

![assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Change_Language.png](assets/KeyFeaturesffdd41af330441e8bcbb31ac66dfa881/Change_Language.png)
