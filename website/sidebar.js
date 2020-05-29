module.exports = {
  docs: {
    "System overview": [
      "system_overview/introduction",
      "system_overview/designPrinciples",
      "system_overview/functionalArchitecture",
      "system_overview/keyFeatures",
      "system_overview/interoperability",
      "system_overview/configuration",
      "system_overview/siteMap",
    ],
    "User types": [
      "system_overview/user_types/overviewUserTypes",
      "system_overview/user_types/fieldAgents",
      "system_overview/user_types/registrationAgent",
      "system_overview/user_types/registrationAgentDelAuth",
      "system_overview/user_types/registrar",
      "system_overview/user_types/registrationManager",
      "system_overview/user_types/sysAdmin",
    ],
    "Core functions": [
      "core_functions/notifyAVitalEvent",
      "core_functions/declareAVitalEvent",
      "core_functions/validateRegisterVitalEvent",
      "core_functions/issueACertificate",
      "core_functions/vitalStatisticsExport",
      "core_functions/correctRecord",
      "core_functions/recordVerification",
    ],
    "Support functions": [
      "support_functions/login",
      "support_functions/performanceManagement",
      "support_functions/audit",
      "support_functions/learning",
      "support_functions/legacyDataImport",
      "support_functions/userSupport",
    ],
    "System admin functions": [
      "system_admin/userTeam",
      "system_admin/contentManagement",
      "system_admin/commsManagement",
      "system_admin/configManagement",
    ],
    Technology: ["technology/technologyIntroduction"],
  },
  community: {
    Community: [
      "community/introduction",
      "community/contributing",
      "community/team",
      "community/implementations",
    ],
  },
};
