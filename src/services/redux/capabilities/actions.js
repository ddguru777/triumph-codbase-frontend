const capbilitiesAction = {
  ALL_CAPABILITIES: "ALL_CAPABILITIES",
  SEACH_CAPABILITIES: "SEACH_CAPABILITIES",

  ADD_CAPABILITY: "ADD_CAPABILITY",
  SELECT_CAPABILITY: "SELECT_CAPABILITY",

  // Get All
  allCapabilities:  capabilities => ({
    type: capbilitiesAction.ALL_CAPABILITIES,
    capabilities
  }),
  // Search
  searchCapabilities: (capabilities, isSearch) => ({
    type: capbilitiesAction.SEACH_CAPABILITIES,
    capabilities,
    isSearch
  }),
  // Add Capability
  addCapability: (capability) => ({
    type: capbilitiesAction.ADD_CAPABILITY,
    capability
  }),
  // Select Capability
  selectCapability: (index, capability) => ({
    type: capbilitiesAction.SELECT_CAPABILITY,
    index,
    capability
  })

}

export default capbilitiesAction
