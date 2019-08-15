import capabilitiesActions from './actions'

import { capabilitiesData } from "../../../sampleData"

import uuidv4 from "uuid/v4";

export const GetAllCapabilities = () => {
  return dispatch => {
    const allCapabilities = capabilitiesData;
    dispatch(capabilitiesActions.allCapabilities(allCapabilities))
  }
}

export const SearchCapabilities = (capabilities, filter) => {
  return dispatch => {

    const filterByQuery = (data, query) => 
         data.filter(e => Object.entries(query).every(([k, v]) => e[k].indexOf(v) >= 0));

    let filterData = capabilities;
    filterData.rows = filterByQuery(capabilities.rows, filter);
    
    let isSearch = false;
    for(let key in filter) {
      if (filter[key] !== "") {
        isSearch = true
        break;
      }
    }

    dispatch(capabilitiesActions.searchCapabilities({...filterData}, isSearch))
  }
}

export const AddCapability = (param) => {
  return dispatch=> {

    if (param.partNumber === '') {
      return false;
    }
    const capability = {
      "Id Part": param.idPart === '' ? "{" + uuidv4().toUpperCase() + "}" : param.idPart,
      "Part Number": param.partNumber,
      "Description": param.description,
      "Base Part": param.basePart,
      "Aircraft Series": param.airCraftSeries,
      "Aircraft Model": param.airCraftModel,
      "Engine": param.engine,
      "ATA": param.ata
    }
    
    dispatch(capabilitiesActions.addCapability(capability))
  }
}