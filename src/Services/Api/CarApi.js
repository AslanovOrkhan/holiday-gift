import instance from "./AxiosConfig";
import { endpoints } from "./Constants";

// create car
async function createCar(carData) {
  try {
    const response = await instance.post(endpoints.cars, carData);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// delete car
async function deleteCar(carId) {
  try {
    const response = await instance.delete(`${endpoints.cars}/${carId}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// get all car
async function getAllCar() {
  try {
    const response = await instance.get(endpoints.cars);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// get one car by id
async function getCarId(carId) {
  try {
    const response = await instance.get(`${endpoints.cars}/${carId}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
// update car
async function updatedCar(carId, updatedData) {
  try {
    const response = await instance.put(
      `${endpoints.cars}/${carId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
const carController = {
  createCar: createCar,
  deleteCar: deleteCar,
  getAllCar: getAllCar,
  getCarId: getCarId,
  updatedCar: updatedCar,
};

export default carController;
