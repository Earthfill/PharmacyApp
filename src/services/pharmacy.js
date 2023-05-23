import axios from "axios";

const BASE_URL = 'https://artisanbe.herokuapp.com/api/v1'

const PHARMACY_URL = 'Pharmacy/verify'

const getByGuid = async (uniqueGuid) => {
  const response = await axios.get(`${BASE_URL}/${PHARMACY_URL}/${uniqueGuid}`)
  return response.data
}

const getReportByPharmacyId = async (currentPage, id) => {
  const response = await axios.get(`${BASE_URL}/Report/paged?PageNumber=${currentPage}&PharmacyId=${id}`)
  return response.data
}

export default { getByGuid, getReportByPharmacyId }