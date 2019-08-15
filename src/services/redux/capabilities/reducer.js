import { Map } from "immutable"

import capabilitiesAction from "./actions"

const initState = new Map({
  allCapabilities: {
    columns: [
      "x",
      "Id Part",
      "Part Number",
      "Description",
      "Base Part",
      "Alternative"
      ],
      rows: []
    },
  filteredCapabilities: {
    columns: [
      "x",
      "Id Part",
      "Part Number",
      "Description",
      "Base Part",
      "Alternative"
      ],
    rows: []
  },
  isSearch: false,
  selectIndex : -1,
  selectCapability: {}
})

const capabilitiesReducer = (state = initState, action) => {
  switch (action.type) {
    case capabilitiesAction.ALL_CAPABILITIES:
      return state.set('allCapabilities', {...action.capabilities})
                  .set('filteredCapabilities', {...action.capabilities})
                  .set('isSearch', false)
    case capabilitiesAction.SEACH_CAPABILITIES:
      return state.set('filteredCapabilities', {...action.capabilities})
                  .set('isSearch', action.isSearch)
    case capabilitiesAction.ADD_CAPABILITY:
      
      // console.log(newCapability);
      let currentAllCapabilities = { ...state.get("allCapabilities") }
      let currentFilteredCapabilities = {...state.get("filteredCapabilities")}
      
      let newIdPart = action.capability["Id Part"]
      
      let isNew = true
      for (let i = 0; i < currentAllCapabilities.rows.length; i++) {
        if (newIdPart === currentAllCapabilities.rows[i]["Id Part"]) {
          isNew = false
          currentAllCapabilities.rows[i] = action.capability
          break;
        }
      }

      if (isNew === true) {
        const newCapability = { ...action.capability, x: currentAllCapabilities.rows.length + 1 }
        currentAllCapabilities.rows.push(newCapability)
      }

      // currentFilteredCapabilities.rows.push(newCapability)

      return state.set('allCapabilities', {...currentAllCapabilities})
                  .set('filteredCapabilities', {...currentFilteredCapabilities})
    case capabilitiesAction.SELECT_CAPABILITY:
      return state.set('selectIndex', action.index)
                  .set('selectCapability', action.capability)
    default:
      return state;
  }
}

export default capabilitiesReducer